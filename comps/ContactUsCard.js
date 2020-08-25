import React from 'react';
import Grid from '@material-ui/core/Grid';
import layout from './../styles/Layout.module.css';
import phone from './../img/phone.svg';

export default function ContactUsCard() {
	return (
		<div>
			<h2 className={layout.title}>Feel Free To Reach Out</h2>
			<Grid spacing={2} container justify={'center'}>
				<Grid item xs={3}>
					<img
						className={layout.imageFit}
						alt={'A phone'}
						src={phone}
					/>
				</Grid>
				<Grid item>
					<p>646-703-3444</p>
					<p>info@stellarcellardoors.com</p>
					<p>Phone Quotes Gladly Provided!</p>
				</Grid>
			</Grid>
		</div>
	);
}
