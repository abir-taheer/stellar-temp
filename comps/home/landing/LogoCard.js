import Grid from '@material-ui/core/Grid';
import styles from '../../../styles/Home.module.css';
import sunLogo from '../../../img/sun-logo.svg';
import layout from '../../../styles/Layout.module.css';
import React from 'react';

export default function LogoCard() {
	return (
		<Grid
			className={styles.headingGridItem}
			item
			xl={3}
			lg={3}
			md={10}
			sm={10}
			xs={12}
		>
			<img
				src={sunLogo}
				alt={'Logo of a sun behind clouds'}
				className={styles.logo}
			/>
			<h1 className={layout.title}>Stellar Cellar Doors</h1>

			<p className={layout.description}>
				Licensed, Bonded, and Insured.
				<br />
				NY’s Cellar Door Specialist For Ten Years
				<br />
				Commercial or residential, flat or sloped, custom made or stock
				size
			</p>
		</Grid>
	);
}
