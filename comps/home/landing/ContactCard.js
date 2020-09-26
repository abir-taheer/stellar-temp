import React from 'react';
import styles from '../../../styles/Home.module.css';
import creditCards from '../../../img/credit-card-logos.png';
import Grid from '@material-ui/core/Grid';
import { Link as StyledLink } from '@material-ui/core';

export default function ContactCard() {
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
			<h3>Call Us Now</h3>
			<p>Monday - Saturday: 9am - 7pm</p>
			<p>
				<StyledLink href={'tel:6467033444'}>646-703-3444</StyledLink>
			</p>
			<p>
				<StyledLink href={'mailto:info@stellarcellardoors.com'}>
					info@stellarcellardoors.com
				</StyledLink>
			</p>
			<p>Phone Quotes Gladly Provided!</p>
			<img
				className={styles.creditCardProviders}
				src={creditCards}
				alt={'Supported credit card providers'}
			/>
		</Grid>
	);
}
