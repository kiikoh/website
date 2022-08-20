import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {ThemeProvider} from 'next-themes';
import Head from 'next/head';
import Layout from '../components/layout';

const MyApp = ({Component, pageProps}: AppProps) => (
	<ThemeProvider attribute='class'>
		<Head>
			<link rel='shortcut icon' href='/favicon.svg' />
		</Head>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</ThemeProvider>
);

export default MyApp;
