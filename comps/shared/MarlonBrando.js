import marlon from './../../img/marlon-brando.jpg';

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useMediaQuery } from '@material-ui/core';

const MarlonBrando = () => {
	const isDesktop = useMediaQuery('(min-width: 1000px)');

	if (!isDesktop) {
		return null;
	}

	return (
		<div
			style={{
				position: 'absolute',
				top: 100,
				right: '5vw',
				border: 'solid 1px rgba(0,0,0, 0.1)',
				borderRadius: '5px',
			}}
		>
			<Grid container>
				<Grid
					item
					style={{
						width: '160px',
						paddingLeft: '15px',
						textAlign: 'left',
					}}
				>
					<h4>"STELLAR! HEY STELLAR! I LOVE YOU, BABY."</h4>
					<p>- Marlon Brando</p>
				</Grid>
				<Grid item>
					<img
						src={marlon}
						style={{
							width: '120px',
							objectFit: 'contain',
						}}
						alt={'Marlon Brando'}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default MarlonBrando;
