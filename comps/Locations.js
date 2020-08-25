import React from 'react';
import layout from '../styles/Layout.module.css';
import { Grid, Link } from '@material-ui/core';

function SmartLocation({ title, address }) {
	return (
		<>
			{title}:{' '}
			<Link
				href={`http://maps.google.com/?q=${address}`}
				target={'_blank'}
			>
				{address}
			</Link>
		</>
	);
}

const Locations = (props) => {
	return (
		<>
			<h2>Our Locations</h2>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<ul className={layout.noListStyle}>
						<li>
							<SmartLocation
								title={'Factory'}
								address={'116-30 Springfield Blvd. Jamaica, NY'}
							/>
						</li>
						<li>
							<SmartLocation
								title={'Administrative Offices'}
								address={`NYC - 39 Avenue A NY, NY`}
							/>
						</li>
						<li>
							<SmartLocation
								title={'Essex, Bergen, Union & Hudson counties'}
								address={`321 Route 440 Jersey City, NJ`}
							/>
						</li>
						<li>
							<SmartLocation
								title={`Westchester`}
								address={`1767 Central Park Avenue S. - Yonkers, NY`}
							/>
						</li>
						<li>
							<SmartLocation
								title={'Nassau'}
								address={`471 N. Broadway - Jericho, NY`}
							/>
						</li>
					</ul>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<iframe
						className={layout.map}
						src="https://maps.google.com/maps?q=39%20Avenue%20A%2C%20NY%2C%20NY%2010009&t=&z=17&ie=UTF8&iwloc=&output=embed"
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default Locations;
