import NextLink from 'next/link';
import {Dispatch, FC, SetStateAction} from 'react';
import clsx from 'clsx';
import {motion} from 'framer-motion';

interface NavLinkProps {
	href: string;
	name: string;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	active: boolean;
}

const NavLink: FC<NavLinkProps> = ({href, name, setIsOpen, active}: NavLinkProps) => (
	<NextLink href={href} className='flex flex-col'>
		<a
			className='rounded px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-900 hover:text-gray-100 dark:text-gray-200 md:mx-2'
			onClick={() => {
				setIsOpen(false);
			}}
		>
			{name}
			{active && <motion.div layout layoutId='nav-underline' className='h-1 w-full bg-red-500' />}
		</a>
	</NextLink>

);

export default NavLink;
