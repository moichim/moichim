import React, { forwardRef, useMemo } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
export type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function ProjectTransition({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) {
	const initial = { opacity: 0, scale: .7 }
	const animate = { opacity: 1, scale: 1 }
	const exit = { opacity: 0, scale: .7 }

	const transition = { duration: 2, ease: 'easeInOut' }

	return (
		<motion.div
			ref={ref}
			initial={initial}
			animate={animate}
			exit={exit}
			transition={transition}
			{...rest}
		>
			{children}
		</motion.div>
	)
}

export default forwardRef(ProjectTransition)