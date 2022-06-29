export type ProjectType = {
	slug: string;
	name: string;
	description: string;
	url: string;
	image: string;
	tags: string[];
	github: string;
	demo: string;
	category: Category;
};

type Category = 'Project' | 'Tutorial' | 'Assignment';

const projects: ProjectType[] = [
	{
		slug: 'litro',
		name: 'Litro',
		description: 'Lighting control system for WS2811x LEDs',
		url: 'https://nextjs.org/',
		image: '/images/nextjs.png',
		tags: ['nextjs', 'react', 'server', 'ssr'],
		github: '',
		demo: '',
		category: 'Project',
	},
	{
		slug: 'best',
		name: 'Best.js',
		description: 'Next.js is a minimalistic framework for server-rendered React applications.',
		url: 'https://nextjs.org/',
		image: '/images/nextjs.png',
		tags: ['nextjs', 'react', 'server', 'ssr'],
		github: '',
		demo: '',
		category: 'Assignment',
	},

	{
		slug: 'nest',
		name: 'Nest.js',
		description: 'Next.js is a minimalistic framework for server-rendered React applications.',
		url: 'https://nextjs.org/',
		image: '/images/nextjs.png',
		tags: ['nextjs', 'react', 'server', 'ssr'],
		github: '',
		demo: '',
		category: 'Tutorial',
	},
];

export default projects;
