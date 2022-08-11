import process from 'node:process';
import {Buffer} from 'node:buffer';
import {GetStaticPaths, GetStaticProps, NextPage, NextPageContext} from 'next';
import {Octokit} from '@octokit/rest';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Image from 'next/image';
import projects, {Project} from '../../data/projects';
import GithubButton from '../../components/github-button';
import DemoButton from '../../components/demo-button';

interface ProjectPageProps {
	project: Project;
	readme: string;
	stars: number;
	isPrivate: boolean;
}

const ProjectPage: NextPage<ProjectPageProps> = ({readme, project, stars, isPrivate}: ProjectPageProps) => (
	<>
		<Head>
			{/* TODO add titles */}
			<title>{project.name}</title>
		</Head>
		<div className='grid pt-4 md:grid-cols-7'>
			<div className='h-min rounded-md bg-gray-50 p-2 drop-shadow-xl dark:bg-gray-600 md:sticky md:top-64 md:col-span-2 md:mt-64'>
				<div>Category: {project.category}</div>
				<div>Technologies: {project.technologies.join(', ')}</div>
				<div className='w-full'>
					{project.github.map(gh => {
						const [owner, repo] = gh.split('/');

						return (
							<GithubButton key={`${owner}/${repo}`} isPrivate={isPrivate} stars={stars} owner={owner} repo={repo} />
						);
					})}
				</div>
				{project.demo && <DemoButton url={project.demo}>View the site live</DemoButton>}
			</div>
			<div className='prose-lg prose mx-auto p-2 dark:prose-invert md:col-span-5'>
				<ReactMarkdown components={
					{
						img(props: {src?: string; alt?: string}) {
							if (!props.src) {
								return null;
							}

							return <Image src={props.src} alt={props.alt} width={768} height={480} />;
						}}
				}
				>
					{readme}
				</ReactMarkdown>
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

	const [stars, isPrivate] = await octokit.repos.get({owner, repo})
		.then(response => [response.data.stargazers_count, Boolean(response.data.private)])
		.catch(() => [0, true]);

	return {
		props: {
			readme,
			project,
			stars,
			isPrivate,
		},
		revalidate: 60 * 60,
	};
};

export default ProjectPage;
