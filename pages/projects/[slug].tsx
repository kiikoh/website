import process from 'node:process';
import {Buffer} from 'node:buffer';
import {ParsedUrlQuery} from 'node:querystring';
import {GetStaticPaths, GetStaticProps, NextPage, NextPageContext} from 'next';
import {useRouter} from 'next/router';
import {Octokit} from '@octokit/rest';
import {useEffect, useState} from 'react';
import {OctokitResponse} from '@octokit/types';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import projects, {Project} from '../../data/projects';

interface ProjectPageProps {
	project: Project;
	readme: string;
}

const ProjectPage: NextPage<ProjectPageProps> = ({readme, project}: ProjectPageProps) => (
	<>
		<Head>
			{/* TODO add titles */}
			<title>{project.name}</title>
		</Head>
		<div className='mx-auto prose prose-lg dark:prose-invert'>
			<ReactMarkdown>{readme}</ReactMarkdown>
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
		throw new Error("Project not found");
	}

	const [owner, repo] = project.github[0].split('/');

	const readme = await octokit.rest.repos.getReadme({owner, repo})
		.then(response => Buffer.from(response.data.content, 'base64').toString('utf8'))
		.catch(() => ('### README.md not found for ' + project.name));

	return {
		props: {
			readme,
			project,
		},
		revalidate: 60 * 60,
	};
};

export default ProjectPage;
