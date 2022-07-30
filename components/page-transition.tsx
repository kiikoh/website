import {motion, AnimatePresence} from 'framer-motion';
import React, {FC, ReactNode} from 'react';
import {useRouter} from 'next/router';

interface TransitionProps {
	children: ReactNode;
}

const variants = {
	out: {
		opacity: 0,
		y: 40,
		transition: {
			duration: 0.25,
		},
	},
	in: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.25,
		},
	},
};

const Transition: FC<TransitionProps> = ({children}) => {
	const {asPath} = useRouter();

	return (
		<div>
			<AnimatePresence
				exitBeforeEnter
				initial={false}
			>
				<motion.div
					key={asPath}
					variants={variants}
					animate='in'
					initial='out'
					exit='out'
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default Transition;
