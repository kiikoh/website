import Head from 'next/head';
import Navbar from './navbar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}: LayoutProps) => (
	<div>
		<Head>
			<title>KiiKoh | Kyle DePace</title>
			<meta name='description' content='Personal Portfolio of Kyle DePace' />
			<link rel='icon' href='/favicon.ico' />
		</Head>

		<Navbar />
		<div className='container mx-auto'>
			{children}
		</div>
	</div>
);

export default Layout;

