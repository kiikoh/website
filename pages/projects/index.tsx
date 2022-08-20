import type {NextPage} from 'next';
import NextLink from 'next/link';
import Image from 'next/image';
import {motion} from 'framer-motion';
import projects, {Project} from '../../data/projects';
import ProjectComponent from '../../components/project';

interface ProjectProps {
	projects: Project[];
}

const Projects: NextPage<ProjectProps> = ({projects}: ProjectProps) => (
	<>
		<div>
			<h1 className='mb-8 text-4xl text-red-600 dark:text-red-400'>Projects</h1>
		</div>
		<motion.div
			variants={{
				hidden: {
					opacity: 0,
				},
				show: {
					opacity: 1,
					transition: {
						staggerChildren: 0.1,
					},
				},
			}}
			initial='hidden'
			animate='show'
			className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'
		>
			{projects.map(project => (
				<ProjectComponent {...project} key={project.slug} />
			))}
		</motion.div>
	</>
);

export const getStaticProps = async () => ({
	props: {
		projects,
	},
});

export default Projects;
