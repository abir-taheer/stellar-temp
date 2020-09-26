import React from 'react';
import Grid from '@material-ui/core/Grid';
import layout from '../../styles/Layout.module.css';
import phone from '../../img/phone.svg';
import { Link as StyledLink } from '@material-ui/core';
import styles from '../../styles/Home.module.css';
import creditCards from '../../img/credit-card-logos.png';

export default function ContactUs() {
	return (
		<div>
			<h2 className={layout.title}>Phone Quotes Gladly Provided</h2>
			<Grid spacing={2} container justify={'center'}>
				<Grid item xs={3}>
					<img
						className={layout.imageFit}
						alt={'A phone'}
						src={phone}
					/>
				</Grid>
				<Grid item>
					<p>Monday - Saturday: 9am - 7pm</p>
					<p>
						<StyledLink href={'tel:6467033444'}>
							646-703-3444
						</StyledLink>
					</p>
					<p>
						<StyledLink href={'mailto:info@stellarcellardoors.com'}>
							info@stellarcellardoors.com
						</StyledLink>
					</p>
					<img
						className={styles.creditCardProviders}
						src={creditCards}
						alt={'Supported credit card providers'}
					/>
				</Grid>
			</Grid>
		</div>
	);
}
