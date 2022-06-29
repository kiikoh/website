import type {NextPage} from 'next';
import NextLink from 'next/link';
import Image from 'next/image';
import projects, {ProjectType} from '../../data/projects';
import Project from '../../components/project';

interface ProjectProps {
	projects: ProjectType[];
}

const Projects: NextPage<ProjectProps> = (props: ProjectProps) => (
	<>
		<div>
			<h1 className='text-4xl mb-8 text-red-600 dark:text-red-400'>Projects</h1>
		</div>
		<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
			{props.projects.map(project => (
				<Project {...project} key={project.slug} />
			),
			)}
		</div>
	</>
);

export const getStaticProps = async () => ({
	props: {
		projects,
	},
});

export default Projects;
