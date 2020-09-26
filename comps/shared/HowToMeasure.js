import React from 'react';
import layout from '../../styles/Layout.module.css';
import diagram from '../../img/door-measurements.png';
import measureFrame from '../../img/door-frame-drawing.jpg';
import { Grid } from '@material-ui/core';

const HowToMeasure = () => {
	return (
		<>
			<hr />
			<h2>How To Measure Your Door</h2>
			<Grid container>
				<Grid item lg={4} md={4} sm={6}>
					<img
						className={layout.imageFit + ' ' + layout.bottomMargin}
						style={{ width: '400px', maxWidth: '100%' }}
						src={measureFrame}
						alt={'Instructions to measure the frame of the door'}
					/>
				</Grid>
				<Grid item lg={8} md={8} sm={6}>
					<ol>
						<li>Please measure the width of your stairwell.</li>
						<li>
							Please measure the length of your stairwell from the
							side of the house/building to the top step
						</li>
						<li>
							If applicable, measure the height of the doorway
							from the base of the house to the top of the
							doorway.
						</li>
						<li>
							If you have an existing door, please measure that as
							well.{' '}
							<b>
								Please measure the outermost dimensions
								including the frame.
							</b>
						</li>
						<li>
							We stock every size of Gordon waterproof cellar
							doors for immediate installation - 5 year
							manufacturers’ warranty (after painting)-guaranteed
							waterproof.
						</li>
					</ol>
					<img
						className={layout.imageFit + ' ' + layout.bottomMargin}
						style={{ width: '400px', maxWidth: '100%' }}
						src={diagram}
						alt={'Diagram of how to measure a door'}
					/>
				</Grid>
			</Grid>
			<hr />
		</>
	);
};

export default HowToMeasure;
