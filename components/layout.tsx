import Navbar from './navbar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}: LayoutProps) => (
	<div>
		<Navbar />
		<div className='container mx-auto'>
			{children}
		</div>
	</div>
);

export default Layout;

