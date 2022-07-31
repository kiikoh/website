import {useState, useEffect} from 'react';
import {useTheme} from 'next-themes';

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const {theme, setTheme} = useTheme();

	// UseEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<label htmlFor='theme-toggle' className='relative inline-flex items-center cursor-pointer'>
			<input
				id='theme-toggle'
				className='sr-only peer'
				type='checkbox'
				checked={theme === 'dark'}
				onChange={event => {
					setTheme(event.target.checked ? 'dark' : 'light');
				}}
			/>
			<div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-red-800" />
			<span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
		</label>
	);
};

export default ThemeSwitch;

