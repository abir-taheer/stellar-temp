import styles from '../../../styles/Home.module.css';
import Grid from '@material-ui/core/Grid';
import React from 'react';

export default function RegionsCard() {
	return (
		<Grid
			className={styles.headingGridItem}
			item
			xl={3}
			lg={3}
			md={5}
			sm={5}
			xs={12}
		>
			<h3>Serving the greater New York City area</h3>
			<p>
				We serve all of NYC, Nassau, Westchester, Essex, Hudson, Union,
				and Bergen Counties.
			</p>
		</Grid>
	);
}
