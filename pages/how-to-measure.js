import React from 'react';
import Head from 'next/head';
import layout from './../styles/Layout.module.css';
import BackButton from '../comps/BackButton';

import diagram from './../img/door-measurements.png';
import ContactUsCard from '../comps/ContactUsCard';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const gordonDoors = [
	{ model: 'CD-3', length: 71, width: 53, height: 19.5 },
	{ model: 'CD-3', length: 72, width: 55, height: 19.5 },
	{ model: 'CD-2', length: 63, width: 49, height: 22 },
	{ model: 'CD-2', length: 64, width: 51, height: 22 },
	{ model: 'CD-SL', length: 42.5, width: 49, height: 51 },
	{ model: 'CD-SL', length: 43.25, width: 51, height: 52 },
	{ model: 'CD-0', length: 54, width: 45, height: 30 },
	{ model: 'CD-0', length: 55, height: 47, width: 30 },
	{ model: 'CD-1', length: 57, width: 45, height: 24.5 },
];

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
						className={layout.imageFit + ' ' + layout.bottomMargin}
						style={{ width: '400px' }}
						src={diagram}
						alt={'Diagram of how to measure a door'}
					/>

					<h2>Stock Gordon Doors</h2>

					<TableContainer
						component={Paper}
						className={layout.bottomMargin}
					>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Model</TableCell>
									<TableCell align="right">
										Length (in)
									</TableCell>
									<TableCell align="right">
										Width (in)
									</TableCell>
									<TableCell align="right">
										Height (in)
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{gordonDoors.map((row, index) => (
									<TableRow key={index}>
										<TableCell component="th" scope="row">
											{row.model}
										</TableCell>
										<TableCell align="right">
											{row.length}"
										</TableCell>
										<TableCell align="right">
											{row.width}"
										</TableCell>
										<TableCell align="right">
											{row.height}"
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<ContactUsCard />
				</main>
			</div>
		</>
	);
};

export default HowToMeasure;
