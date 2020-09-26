import React from 'react';
import styles from '../../../styles/Home.module.css';
import Grid from '@material-ui/core/Grid';
import LogoCard from './LogoCard';
import ContactCard from './ContactCard';
import RegionsCard from './RegionsCard';
import { useMediaQuery } from '@material-ui/core';

export default function LandingCards() {
	const isDesktop = useMediaQuery('(min-width: 1280px)');
	return (
		<div>
			<Grid
				container
				spacing={4}
				justify={'center'}
				className={styles.headingGrid}
			>
				{/* On mobile and tablet devices we want the Logo card to be the first card */}
				{/* On desktop devices we want it to be the second card so that it's placed in the center */}

				{isDesktop ? (
					<>
						<ContactCard />
						<LogoCard />
						<RegionsCard />
					</>
				) : (
					<>
						<LogoCard />
						<ContactCard />
						<RegionsCard />
					</>
				)}
			</Grid>
		</div>
	);
}
