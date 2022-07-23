import process from 'node:process';
import {Buffer} from 'node:buffer';
import {NextPage, NextPageContext} from 'next';
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

export async function getServerSideProps(context: NextPageContext) {
	const octokit = new Octokit({auth: process.env.GITHUB_PAT});
	const project = projects.find(p => p.slug === context.query.slug);

	if (!project) {
		throw new Error('Project Not Found');
	}

	const [owner, repo] = project.github[0].split('/');

	const readmeResponse = await octokit.rest.repos.getReadme({owner, repo});
	const readme = Buffer.from(readmeResponse.data.content, 'base64').toString();

	return {
		props: {
			readme,
			project,
		},
	};
}

export default ProjectPage;
