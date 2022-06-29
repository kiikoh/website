import Head from 'next/head';
import Navbar from './navbar';

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
		<div className='container mx-auto bg-gray-100 dark:bg-gray-700 min-h-screen m-4 p-8 shadow-lg rounded-lg'>
			{children}
		</div>
	</div>
);

export default Layout;

