import Image from 'next/image';
import NextLink from 'next/link';
import type {NextPage} from 'next';
import type {ProjectType} from '../data/projects';

const project: NextPage<ProjectType> = ({name, slug, description, category}: ProjectType) => (
	<div key={slug} className='max-w-2xl w-full mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-600'>
		<div className='object-cover w-full h-64 relative'>
			<Image src='https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='Article' layout='fill' />
		</div>
		<div className='p-6'>
			<div>
				<span className='text-xs font-medium text-red-600 uppercase dark:text-red-400'>{category}</span>
				<NextLink href={`/projects/${slug}`}>
					<a href='#' className='block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 dark:hover:text-gray-400 hover:underline'>{name}</a>
				</NextLink>
				<p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>{description}</p>
			</div>
			<div className='mt-4'>
				<div className='flex items-center'>
					<div className='flex items-center w-full'>
						<div className='object-cover h-10 w-10 relative'>
							<Image className='rounded-full' layout='fill' src='/img/professional.jpg' alt='Avatar' />
						</div>
						<div className='mx-2 font-semibold text-gray-700 dark:text-gray-200'>Kyle DePace</div>
					</div>
					<span className='mx-1 text-xs text-right w-full text-gray-600 dark:text-gray-300'>21 SEP 2015</span>
				</div>
			</div>
		</div>
	</div>
);

export default project;
