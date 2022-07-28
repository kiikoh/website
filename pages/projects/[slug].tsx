import process from 'node:process';
import {Buffer} from 'node:buffer';
import {GetStaticPaths, GetStaticProps, NextPage, NextPageContext} from 'next';
import {Octokit} from '@octokit/rest';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import projects, {Project} from '../../data/projects';
import GithubButton from '../../components/github-button';
import DemoButton from '../../components/demo-button';

interface ProjectPageProps {
	project: Project;
	readme: string;
	stars: number;
}

const ProjectPage: NextPage<ProjectPageProps> = ({readme, project, stars}: ProjectPageProps) => (
	<>
		<Head>
			{/* TODO add titles */}
			<title>{project.name}</title>
		</Head>
		<div className='grid md:grid-cols-7 pt-4'>
			<div className='h-min md:col-span-2 md:sticky md:mt-64 md:top-64 bg-gray-50 dark:bg-gray-600 drop-shadow-xl rounded-md p-2'>
				<div>Category: {project.category}</div>
				<div>Technologies: {project.technologies.join(', ')}</div>
				<div className='w-full'>
					{project.github.map(gh => {
						const [owner, repo] = gh.split('/');

						return (
							<GithubButton key={`${owner}/${repo}`} stars={stars} owner={owner} repo={repo} />
						);
					})}
				</div>
				<DemoButton url={project.demo}>View the site live</DemoButton>
			</div>
			<div className='p-2 mx-auto prose prose-lg dark:prose-invert md:col-span-5'>
				<ReactMarkdown>{readme}</ReactMarkdown>
			</div>
		</div>
	</>
);

export const getStaticPaths: GetStaticPaths = () => {
	const paths = projects.map(project => ({
		params: {
			slug: project.slug,
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({params}) => {
	const octokit = new Octokit({auth: process.env.GITHUB_PAT});

	const project = projects.find(p => p.slug === params!.slug);

	if (!project) {
		throw new Error('Project not found');
	}

	const [owner, repo] = project.github[0].split('/');

	const readme = await octokit.rest.repos.getReadme({owner, repo})
		.then(response => Buffer.from(response.data.content, 'base64').toString('utf8'))
		.catch(() => ('### README.md not found for ' + project.name));

	const stars = await octokit.repos.get({owner, repo})
		.then(response => response.data.stargazers_count)
		.catch(() => 0);

	return {
		props: {
			readme,
			project,
			stars,
		},
		revalidate: 60 * 60,
	};
};

export default ProjectPage;
