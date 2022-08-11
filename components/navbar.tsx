import {useState} from 'react';
import clsx from 'clsx';
import NextLink from 'next/link';
import {useRouter} from 'next/router';
import {motion} from 'framer-motion';
import ThemeSwitch from './theme-switch';
import NavLink from './navlink';

const links = [
	{href: '/', name: 'Home'},
	{href: '/projects', name: 'Projects'},
	{href: '/contact', name: 'Contact'},
];

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const {pathname} = useRouter();

	return (
		<nav className='w-full bg-white shadow-lg shadow-red-500 dark:bg-gray-800 dark:shadow-red-400'>
			<div className='container mx-auto px-6 py-3 md:flex'>
				<div className='flex items-center justify-between'>
					<div>
						<NextLink href='/'>
							<a
								className='text-2xl font-bold text-gray-800 transition-colors duration-200 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl'
								onClick={() => {
									setIsOpen(false);
								}}
							>
								KiiKoh
							</a>
						</NextLink>
					</div>
					{/* Mobile menu button */}
					<div className='flex md:hidden'>
						<button type='button' className='text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400' aria-label='toggle menu' onClick={() => {
							setIsOpen(!isOpen);
						}}
						>
							<svg viewBox='0 0 24 24' className='h-6 w-6 fill-current'>
								<path fillRule='evenodd' d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z' />
							</svg>
						</button>
					</div>
				</div>
				<div className={
					clsx([
						'w-full transition-height duration-300 md:flex md:items-center md:justify-between',
						isOpen ? 'h-36 scale-100' : 'h-0 scale-0',
						'md:h-auto md:scale-100',
					])
				}
				>
					<div className='-mx-4 flex flex-col px-2 py-3 md:mx-0 md:flex-row md:py-0'>
						{
							links.map(({href, name}) => (
								<NavLink key={href} href={href} name={name} setIsOpen={setIsOpen} active={pathname.split('/')[1] === href.split('/')[1]} />
							))
						}
					</div>
					<div className='relative'>
						{/* <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
							<svg className='w-5 h-5 text-gray-400' viewBox='0 0 24 24' fill='none'>
								<path d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
							</svg>
						</span>
						<input type='text' className='w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300' placeholder='Search' /> */}
						<ThemeSwitch />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
