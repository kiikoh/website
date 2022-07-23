export type Project = {
	slug: string;
	name: string;
	description: string;
	image: string;
	technologies: Technology[];
	github: string[];
	demo: string;
	category: Category;
};

type Category = 'Project' | 'Tutorial' | 'Assignment';

type Technology = 'TypeScript' | 'React' | 'Node' | 'Express' | 'MongoDB' | 'React Native' | 'Next.js' | 'JavaScript' | 'Java' | 'Python' | 'Sendgrid' | 'Material UI' | 'Airtable' | 'Vite' | 'Fortran' | 'COBOL' | 'Basic' | 'Pascal' | 'Scala' | 'Lisp' | 'Erlang' | 'ML';

const projects: Project[] = [
	{
		slug: 'litro',
		name: 'Litro',
		description: 'Lighting control system for WS2811x LEDs',
		image: '/images/nextjs.png',
		technologies: ['Next.js', 'React'],
		github: ['kiikoh/Litro'],
		demo: '',
		category: 'Project',
	},
	{
		slug: 'golfers-frames',
		name: 'Golfers Frames',
		description: 'Next.js is a minimalistic framework for server-rendered React applications.',
		image: '/images/nextjs.png',
		technologies: ['React', 'Express', 'Sendgrid', 'Material UI', 'Airtable'],
		github: ['kiikoh/GolfersFrames', 'kiikoh/Frames-be'],
		demo: 'https://golfersflyby.com/frames/',
		category: 'Project',
	},
	{
		slug: '6502-processor',
		name: '6502 Processor',
		description: 'A revision on our school\'s menu system. It is a simple, easy to use, and responsive menu build with React Native.',
		image: '/images/nextjs.png',
		technologies: ['React Native'],
		github: [''],
		demo: '',
		category: 'Assignment',
	},
	{
		slug: 'better-menu',
		name: 'Better Menus',
		description: 'Better Menus is a revision on our school\'s menu system. It is a simple, easy to use, and responsive menu build with React Native.',
		image: '/images/nextjs.png',
		technologies: ['TypeScript'],
		github: ['BetterMenus/server', 'BetterMenus/app'],
		demo: '',
		category: 'Project',
	},
	{
		slug: 'teetimes',
		name: 'TeeTimes',
		description: 'A full-stack web app to place automatic recurring tee times using browser automation tools.',
		image: '/images/nextjs.png',
		technologies: ['React', 'Vite', 'Express', 'MongoDB'],
		github: ['kiikoh/TeeTimes'],
		demo: '',
		category: 'Project',
	},
	{
		slug: 'pipes',
		name: 'Pipes',
		description: 'A fictional programming language concept made for Theory of Programming Languages class.',
		image: '/images/nextjs.png',
		technologies: ['TypeScript'],
		github: ['kiikoh/Pipes'],
		demo: 'https://github.com/kiikoh/Pipes/blob/main/language-project.pdf',
		category: 'Assignment',
	},
	{
		slug: 'caesar',
		name: 'Caesar Cipher',
		description: 'A simple Caesar Cipher implementation in 9 different programming languages using both Legacy and Functional programming languages.',
		image: '/images/nextjs.png',
		technologies: ['Fortran', 'COBOL', 'Basic', 'Pascal', 'Scala', 'Lisp', 'Erlang', 'ML', 'JavaScript'],
		github: ['kiikoh/PitP', 'kiikoh/Functional'],
		demo: '',
		category: 'Assignment',
	},
	{
		slug: 'whoop2csv',
		name: 'Whoop2CSV',
		description: 'Tiny node program to extract data from a Whoop API and save it to a CSV file for further analysis.',
		image: '/images/nextjs.png',
		technologies: ['Node'],
		github: ['kiikoh/Whoop2CSV'],
		demo: '',
		category: 'Project',
	},
	{
		slug: 'meal-deals',
		name: 'Meal Deals',
		description: 'Node.js program to calcualate the optimal dining hall plan for the Marist College dining hall',
		image: '/images/nextjs.png',
		technologies: ['Node', 'JavaScript'],
		github: ['kiikoh/MealDeals'],
		demo: 'https://repl.it/@kiikoh/MealDeals#index.js',
		category: 'Project',
	},
];

export default projects;
