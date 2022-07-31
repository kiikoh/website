import Image from 'next/image';
import NextLink from 'next/link';
import type {NextPage} from 'next';
import type {Project} from '../data/projects';

const project: NextPage<Project> = ({name, slug, description, category}: Project) => (
	<div key={slug} className='mx-auto w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-600'>
		<div className='relative h-64 w-full object-cover'>
			<Image src='https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='Article' layout='fill' />
		</div>
		<div className='p-6'>
			<div>
				<span className='text-xs font-medium uppercase text-red-600 dark:text-red-400'>{category}</span>
				<NextLink href={`/projects/${slug}`}>
					<a href='#' className='mt-2 block text-2xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600 hover:underline dark:text-white dark:hover:text-gray-400'>{name}</a>
				</NextLink>
				<p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>{description}</p>
			</div>

			<div className='mt-4'>
				<div className='flex items-center'>
					<div className='flex w-full items-center'>
						<div className='relative h-10 w-10 object-cover'>
							<Image className='rounded-full' layout='fill' src='/img/professional.jpg' alt='Avatar' />
						</div>
						<div className='mx-2 font-semibold text-gray-700 dark:text-gray-200'>Kyle DePace</div>
					</div>
					<span className='mx-1 w-full text-right text-xs text-gray-600 dark:text-gray-300'>21 SEP 2015</span>
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
	</div>
);

export default project;
