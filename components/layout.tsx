import Head from 'next/head';
import Navbar from './navbar';
import Transition from './page-transition';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}: LayoutProps) => (
	<div className='bg-gray-200 dark:bg-gray-800'>
		<Head>
			<title>Kyle DePace | KiiKoh</title>
			<meta name='description' content='Personal Portfolio of Kyle DePace' />
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<Navbar />
		<Transition>
			<div className='container m-4 mx-auto min-h-screen rounded-lg bg-gray-100 p-8 shadow-lg dark:bg-gray-700'>
				{children}
			</div>
		</Transition>

	</div>
);

export default Layout;

