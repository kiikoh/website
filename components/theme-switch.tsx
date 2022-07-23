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
		<select
			value={theme}
			onChange={event => {
				setTheme(event.target.value);
			}}
		>
			<option value='system'>System</option>
			<option value='dark'>Dark</option>
			<option value='light'>Light</option>
		</select>
	);
};

export default ThemeSwitch;

