import type {NextPage} from 'next';
import NextLink from 'next/link';
import Image from 'next/image';

const Home: NextPage = () => (
	<>
		<div className='flex flex-col items-center px-4 py-12 mx-auto xl:flex-row'>
			<div className='flex justify-center xl:w-1/2'>
				<div className='h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover relative'>
					<Image layout='fill' className='rounded-full' src='/img/professional.jpg' alt='' />
				</div>
			</div>
			<div className='flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0'>
				<h2 className='text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white'>
					Kyle DePace
				</h2>
				<p className='block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300'>is a Computer-Science Major and Rower from Marist College, looking for work as a full-stack developer</p>
				<div className='mt-6 sm:-mx-2'>
					<div className='inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2'>
						<a href='#' className='group inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto'>
							<svg className='transition-all delay-50 duration-300 scale-x-[-1] -rotate-180 group-hover:rotate-180  w-6 h-6 mx-2 fill-current' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 325 325' xmlSpace='preserve'>
								<g>
									<path d='M275.291,0H49.709c-3.314,0-6,2.687-6,6v313c0,3.314,2.686,6,6,6h168.024v-59.075c0-4.418,3.582-8,8-8h55.558V6   C281.291,2.687,278.604,0,275.291,0z' />
									<path d='M233.733,325h5.462c1.708,0,3.335-0.728,4.474-2.002l36.096-40.387c0.983-1.1,1.526-2.523,1.526-3.998v-4.689h-47.558V325z   ' />
								</g>
							</svg>
							<span className='mx-2'>
								Resume
							</span>
						</a>
					</div>
					<div className='inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2'>
						<a href='#' className='group inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto'>
							<svg className='transition-all delay-50 duration-300 rotate-0 group-hover:rotate-[360deg] w-6 h-6 mx-2 fill-current' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 310 310' xmlSpace='preserve'>
								<g id='XMLID_801_'>
									<path id='XMLID_802_' d='M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73   C77.16,101.969,74.922,99.73,72.16,99.73z' />
									<path id='XMLID_803_' d='M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4   c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z' />
									<path id='XMLID_804_' d='M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599   c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319   c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995   C310,145.43,300.549,94.761,230.454,94.761z' />
								</g>
							</svg>
							<span className='mx-2'>
								LinkedIn
							</span>
						</a>
					</div>
					<div className='inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0'>
						<a href='#' className='group inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-400'>
							<svg className='transition-all delay-50 duration-300 rotate-0 group-hover:rotate-[360deg] w-6 h-6 mx-2 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z' /></svg>
							<span className='mx-2'>
								Contact
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		{/* TODO: ADD LIGHT MODE HERE */}
		<div className='flex flex-col items-center px-4 py-12 mx-auto xl:flex-row'>
			<blockquote className='flex flex-col items-center justify-center px-4 py-12 mx-auto text-center text-gray-700 dark:text-gray-300 bg-gray-900'>
				<p className='text-xl font-semibold px-4'>
					I am a Software Developer with a demonstrated history of problem solving and learning new skills. Skilled in React, Javascript, Java,
					MongoDB & other technologies that make the web functional. I am constantly seeking to learn something new.
					Always on the lookout for opportunities to develop and improve my technical skill set and work ethic. Passionate
					about technology, coding, fitness, and giving back through my community
				</p>
			</blockquote>
		</div>
		<div className='container px-6 py-10 mx-auto'>
			<h1 className='text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white'>Learn about <br /> my <span className='underline decoration-red-500'>background</span></h1>
			<p className='mt-4 text-gray-500 xl:mt-6 dark:text-gray-300'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
			</p>
			<div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 xl:grid-cols-3'>
				<div className='p-8 space-y-3 border-2 border-red-400 dark:border-red-300 rounded-xl'>
					<span className='inline-block text-red-500 dark:text-red-400'>
						<svg xmlns='http://www.w3.org/2000/svg' className='w-8 h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z' />
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z' />
						</svg>
					</span>
					<h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>Education</h1>
					<p className='text-gray-500 dark:text-gray-300'>
						Class of &apos;23 from Marist College, B.S. in Computer Science, summa cum laude. <br />Minors in IT, IS, Data Science and Cybersecurity
					</p>
					<a href='#' className='inline-flex p-2 text-red-500 capitalize transition-colors duration-200 transform bg-red-100 rounded-full dark:bg-red-500 dark:text-white hover:underline hover:text-red-600 dark:hover:text-red-500'>
						<svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z' />
						</svg>
					</a>
				</div>
				<div className='p-8 space-y-3 border-2 border-red-400 dark:border-red-300 rounded-xl'>
					<span className='inline-block text-red-500 dark:text-red-400'>
						<svg xmlns='http://www.w3.org/2000/svg' className='w-8 h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' />
						</svg>
					</span>
					<h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>Experience</h1>
					<p className='text-gray-500 dark:text-gray-300'>
						Interned 3 years at Prudential Financial under Global Technology learning AWS, NodeJS, Express, Kafka, Splunk, Agile Methodologies, Java, Spring Boot and more.
					</p>
					<a href='#' className='inline-flex p-2 text-red-500 capitalize transition-colors duration-200 transform bg-red-100 rounded-full dark:bg-red-500 dark:text-white hover:underline hover:text-red-600 dark:hover:text-red-500'>
						<svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z' />
						</svg>
					</a>
				</div>
				<div className='p-8 space-y-3 border-2 border-red-400 dark:border-red-300 rounded-xl'>
					<span className='inline-block text-red-500 dark:text-red-400'>
						<svg xmlns='http://www.w3.org/2000/svg' className='w-8 h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' />
						</svg>
					</span>
					<h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>Projects</h1>
					<p className='text-gray-500 dark:text-gray-300'>
						Large variety of different projects, ranging from small to large scale. Everything from calculator programs to full-stack web apps.
					</p>
					<NextLink href='/projects'>
						<a className='inline-flex p-2 text-red-500 capitalize transition-colors duration-200 transform bg-red-100 rounded-full dark:bg-red-500 dark:text-white hover:underline hover:text-red-600 dark:hover:text-red-500'>
							<svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z' />
							</svg>
						</a>
					</NextLink>
				</div>
			</div>
		</div>

	</>
);

export default Home;
