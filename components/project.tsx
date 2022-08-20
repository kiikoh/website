import Image from 'next/image';
import NextLink from 'next/link';
import type {NextPage} from 'next';
import {motion} from 'framer-motion';
import type {Project} from '../data/projects';
import professional from '../public/img/professional.jpg';

const project: NextPage<Project> = ({name, slug, description, category, image}: Project) => (
	<motion.div
		key={slug}
		variants={{
			hidden: {opacity: 0},
			show: {opacity: 1},
		}}
		className='w-full max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-600'
	>
		<div className='relative object-cover w-full'>
			<Image src={image} alt={name} sizes='50vw' width='100%' height='75%' layout='responsive' />
		</div>
		<div className='p-6'>
			<div className='h-32'>
				<span className='text-xs font-medium text-red-600 uppercase dark:text-red-400'>{category}</span>
				<NextLink href={`/projects/${slug}`}>
					<a href='#' className='block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600 hover:underline dark:text-white dark:hover:text-gray-400'>{name}</a>
				</NextLink>
				<p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>{description}</p>
			</div>

			<div className='mt-4'>
				<div className='flex items-center'>
					<div className='flex items-center w-full'>
						<div className='relative object-cover w-10 h-10'>
							<Image className='rounded-full' layout='fill' sizes='10vw' src={professional} alt='Avatar' />
						</div>
						<div className='mx-2 font-semibold text-gray-700 dark:text-gray-200'>Kyle DePace</div>
					</div>
					<span className='w-full mx-1 text-xs text-right text-gray-600 dark:text-gray-300'>21 SEP 2015</span>
				</div>
			</div>
			{/* <div className='space-y-2 sm:space-y-0 sm:flex sm:-mx-1'>
				<button className='flex items-center justify-center w-full px-2 py-1 text-white transition-colors duration-200 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40'>
					<svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 mx-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' />
					</svg>
					<span className='mx-1'>
						Upload
					</span>
				</button>
				<button className='flex items-center justify-center w-full px-2 py-1 text-white transition-colors duration-200 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40'>
					<svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 mx-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4' />
					</svg>
					<span className='mx-1'>
						Drift
					</span>
				</button>
				<button className='flex items-center justify-center w-full px-2 py-1 text-white transition-colors duration-200 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40'>
					<svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 mx-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
					</svg>
					<span className='mx-1'>
						View
					</span>
				</button>
			</div> */}
		</div>
	</motion.div>
);

export default project;
