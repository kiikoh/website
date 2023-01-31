import type {NextPage} from 'next';
import NextLink from 'next/link';
import Image from 'next/image';
import professional from '../public/img/professional.jpg';

const Home: NextPage = () => (
	<>
		<div className='mx-auto flex flex-col items-center px-4 py-12 xl:flex-row'>
			<div className='flex justify-center xl:w-1/2'>
				<div className='relative h-80 w-80 shrink-0 object-cover sm:h-[28rem] sm:w-[28rem]'>
					<Image priority layout='fill' className='rounded-full' src={professional} alt='Portrait of Kye DePace' />
				</div>
			</div>
			<div className='mt-6 flex flex-col items-center xl:mt-0 xl:w-1/2 xl:items-start'>
				<h2 className='text-3xl font-bold tracking-tight text-gray-800 dark:text-white xl:text-4xl'>
					Kyle DePace
				</h2>
				<p className='mt-4 block max-w-2xl text-xl text-gray-500 dark:text-gray-300'>is a Computer-Science Major and Student-Athlete from Marist College, joining Prudential after college</p>
				<div className='mt-6 sm:-mx-2'>
					<div className='inline-flex w-full overflow-hidden shadow sm:mx-2 sm:w-auto'>
						<a target='_blank' href='/KyleDePaceResume.pdf' className='group inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 px-5 py-3 text-base font-medium text-white hover:from-gray-600 hover:to-gray-600 focus:border-2 sm:w-auto'>
							<svg className='mx-2 h-6 w-6 -rotate-180 scale-x-[-1] fill-current  transition-all delay-75 duration-300 group-hover:rotate-180' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 325 325' xmlSpace='preserve'>
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
					<div className='mt-4 inline-flex w-full overflow-hidden shadow sm:mx-2 sm:w-auto'>
						<a target='_blank' href='https://www.linkedin.com/in/kyledepace/' className='group inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 px-5 py-3 text-base font-medium text-white hover:from-gray-600 hover:to-gray-600 focus:border-2 sm:w-auto' rel='noreferrer'>
							<svg className='mx-2 h-6 w-6 rotate-0 fill-current transition-all delay-75 duration-300 group-hover:rotate-[360deg]' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 310 310' xmlSpace='preserve'>
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
					<div className='mt-4 inline-flex w-full overflow-hidden shadow sm:mx-2 sm:mt-0 sm:w-auto'>
						<NextLink href='/contact'>
							<a className='group inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-red-500 to-red-700 px-5 py-3 text-base font-medium text-white transition-colors duration-150 hover:from-red-400 hover:to-red-400 focus:border-2 sm:w-auto'>
								<svg className='mx-2 h-6 w-6 rotate-0 fill-current transition-all delay-75 duration-300 group-hover:rotate-[360deg]' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z' /></svg>
								<span className='mx-2'>
									Contact
								</span>
							</a>
						</NextLink>
					</div>
				</div>
			</div>
		</div>
		<div className='mx-auto flex flex-col items-center px-4 py-12 xl:flex-row'>
			<blockquote className='mx-auto flex flex-col items-center justify-center bg-gray-200 px-4 py-12 text-center text-gray-700 dark:bg-gray-900 dark:text-gray-300'>
				<p className='px-4 text-xl font-semibold'>
				As a passionate software developer, I am always eager to experiment with new technologies and explore the latest and greatest in the tech industry. My background as a student athlete at Marist College, where I rowed, has honed my determination and hard work, which I bring to my work as a developer. My love for new technologies and my drive to succeed make me a dynamic and innovative professional who is always pushing the boundaries. With a strong work ethic and a focus on growth, I strive to make a positive impact through my work and continue to develop my skills as a software developer.
				</p>
			</blockquote>
		</div>
		<div className='container mx-auto px-6 py-10'>
			<h1 className='text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl'>Learn about <br /> my <span className='underline decoration-red-500'>background</span></h1>
			<p className='mt-4 text-gray-500 dark:text-gray-300 xl:mt-6'>
				Quick Facts
			</p>
			<div className='mt-8 grid grid-cols-1 gap-8 xl:mt-12 xl:grid-cols-3 xl:gap-12'>
				<div className='space-y-3 rounded-xl border-2 border-red-400 p-8 dark:border-red-300'>
					<span className='inline-block text-red-500 dark:text-red-400'>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' viewBox='0 0 1024 1024' fill='currentColor'>
							<path d='M990.848 696.304V438.16l16.096-8.496c10.464-5.44 17.055-16.225 17.183-28.032.128-11.777-6.256-22.689-16.592-28.368l-481.44-257.6c-9.631-5.28-21.28-5.249-30.976.095l-478.8 257.92C6.126 379.36-.177 390.143-.113 401.84s6.496 22.4 16.817 27.97l210.384 111.983c-2.64 4.656-4.272 9.968-4.272 15.696v270.784c0 9.12 3.905 17.84 10.72 23.904 6.945 6.16 73.441 60.096 276.753 60.096 202.592 0 270.88-50.976 278-56.784 7.44-6.064 11.744-15.152 11.744-24.784V552.976c0-4.496-.944-8.768-2.608-12.64l129.424-68.369V696.48c-18.976 11.104-31.84 31.472-31.84 55.024 0 35.344 28.656 64 64 64s64-28.656 64-64c0-23.697-13.04-44.145-32.16-55.2zM736.031 812.368c-25.152 12.096-91.712 35.904-225.744 35.904-134.88 0-199.936-25.344-223.472-37.536V573.6l207.808 110.624a31.896 31.896 0 0 0 15.184 3.84 31.675 31.675 0 0 0 14.816-3.664l211.408-111.664v239.632zM510.063 619.81l-411.6-218.561 412.32-220.976 413.6 220.336z' />
						</svg>
					</span>
					<h1 className='text-2xl font-semibold capitalize text-gray-700 dark:text-white'>Education</h1>
					<p className='text-gray-500 dark:text-gray-300'>
						Class of &apos;23 from Marist College, B.S. in Computer Science, summa cum laude. <br />Minors in IT, IS, Data Science and Cybersecurity
					</p>
					{/* <a href='#' className='inline-flex rounded-full bg-red-100 p-2 capitalize text-red-500 transition-colors duration-200 hover:text-red-600 hover:underline dark:bg-red-500 dark:text-white dark:hover:text-red-500'>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z' />
						</svg>
					</a> */}
				</div>
				<div className='space-y-3 rounded-xl border-2 border-red-400 p-8 dark:border-red-300'>
					<span className='inline-block text-red-500 dark:text-red-400'>
						<svg className='h-8 w-8' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' fill='currentColor' stroke='none' x='0px' y='0px' width='256px' height='209px' viewBox='0 0 256 209' enableBackground='new 0 0 256 209' xmlSpace='preserve'>
							<path d='M246.125,195.063v-82.688h-63v82.688h-7.875V17.823h-23.625V2.125h-47.25v15.698H80.75v177.24h-7.875V80.875h-63v114.188H2  v11.813h252v-11.813H246.125z M47.281,177.344H35.469v-11.813h11.813V177.344z M47.281,145.844H35.469v-11.813h11.813V145.844z   M47.281,114.344H35.469v-11.813h11.813V114.344z M119.141,174.391h-11.813v-11.813h11.813V174.391z M119.141,142.891h-11.813  v-11.813h11.813V142.891z M119.141,111.391h-11.813V99.578h11.813V111.391z M119.141,79.891h-11.813V68.078h11.813V79.891z   M150.641,174.391h-11.813v-11.813h11.813V174.391z M150.641,142.891h-11.813v-11.813h11.813V142.891z M150.641,111.391h-11.813  V99.578h11.813V111.391z M150.641,79.891h-11.813V68.078h11.813V79.891z M220.531,177.344h-11.813v-11.813h11.813V177.344z   M220.531,145.844h-11.813v-11.813h11.813V145.844z' />
						</svg>
					</span>
					<h1 className='text-2xl font-semibold capitalize text-gray-700 dark:text-white'>Experience</h1>
					<p className='text-gray-500 dark:text-gray-300'>
						Interned 3 years at Prudential Financial under Global Technology learning AWS, NodeJS, Express, Kafka, Splunk, Agile Methodologies, Java, Spring Boot and more.
					</p>
					{/* <a href='#' className='inline-flex rounded-full bg-red-100 p-2 capitalize text-red-500 transition-colors duration-200 hover:text-red-600 hover:underline dark:bg-red-500 dark:text-white dark:hover:text-red-500'>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z' />
						</svg>
					</a> */}
				</div>
				<div className='space-y-3 rounded-xl border-2 border-red-400 p-8 dark:border-red-300'>
					<span className='inline-block text-red-500 dark:text-red-400'>
						<svg className='h-8 w-8' stroke='currentColor' fill='currentColor' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 231.087 231.087' enableBackground='new 0 0 231.087 231.087'>
							<g>
								<path d='m230.042,142.627c-1.871-2.744-5.612-3.452-8.355-1.581l-65.513,44.667-14.55-19.473c-1.526-2.036-4.241-2.977-6.788-2.129-3.185,1.06-4.908,4.501-3.848,7.686l11.908,35.785c0.45,1.33 1.184,2.645 2.18,3.757 3.94,4.401 10.702,4.776 15.104,0.836l.777-.695 68.129-60.985c2.216-1.981 2.676-5.346 0.956-7.868z' />
								<path d='m120.211,190.676h-108.211v-162.49h158.43v124.823c0,3.313 2.687,6 6,6s6-2.687 6-6v-130.823c0-3.313-2.687-6-6-6h-170.43c-3.313,0-6,2.687-6,6v174.49c0,3.313 2.687,6 6,6h114.211c3.313,0 6-2.687 6-6 0-3.314-2.687-6-6-6z' />
								<path d='m139.694,53.855h-96.959c-3.313,0-6,2.687-6,6s2.687,6 6,6h96.959c3.313,0 6-2.687 6-6s-2.686-6-6-6z' />
								<path d='m139.694,79.79h-96.959c-3.313,0-6,2.687-6,6s2.687,6 6,6h96.959c3.313,0 6-2.687 6-6s-2.686-6-6-6z' />
								<path d='m139.694,105.725h-96.959c-3.313,0-6,2.687-6,6s2.687,6 6,6h96.959c3.313,0 6-2.687 6-6s-2.686-6-6-6z' />
								<path d='m145.694,137.659c0-3.313-2.687-6-6-6h-96.959c-3.313,0-6,2.687-6,6s2.687,6 6,6h96.959c3.314,0 6-2.686 6-6z' />
								<path d='M42.735,156.329c-3.313,0-6,2.687-6,6s2.687,6,6,6h48.479c3.313,0,6-2.687,6-6s-2.687-6-6-6H42.735z' />
							</g>
						</svg>
					</span>
					<h1 className='text-2xl font-semibold capitalize text-gray-700 dark:text-white'>Projects</h1>
					<p className='text-gray-500 dark:text-gray-300'>
						Large variety of different projects, ranging from small to large scale. Everything from calculator programs to full-stack web apps.
					</p>
					<NextLink href='/projects'>
						<a className='inline-flex rounded-full bg-red-100 p-2 capitalize text-red-500 transition-colors duration-200 hover:text-red-600 hover:underline dark:bg-red-500 dark:text-white dark:hover:text-red-500'>
							<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
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
