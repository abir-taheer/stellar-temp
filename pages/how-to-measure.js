import React from 'react';
import Head from 'next/head';
import layout from './../styles/Layout.module.css';
import BackButton from '../comps/BackButton';

import diagram from './../img/door-measurements.png';
import ContactUsCard from '../comps/ContactUsCard';

const HowToMeasure = () => {
	return (
		<>
			<Head>
				<title>How To Measure Your Door | Stellar Cellar Doors</title>
			</Head>
			<div className={layout.container}>
				<main className={layout.main}>
					<BackButton />
					<h1>How To Measure</h1>
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
							If you have an existing door , please measure that
							as well.
						</li>
						<li>
							We stock every size of Gordon waterproof cellar
							doors for immediate installation - 5 year
							manufacturers’ warranty (after painting)-guaranteed
							waterproof.
						</li>
					</ol>
					<img
						className={layout.imageFit}
						style={{ width: '400px' }}
						src={diagram}
						alt={'Diagram of how to measure a door'}
					/>
					<ContactUsCard />
				</main>
			</div>
		</>
	);
};

export default HowToMeasure;
