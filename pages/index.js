import Head from 'next/head';
import styles from '../styles/Home.module.css';
import layout from './../styles/Layout.module.css';
import Navbar from '../comps/Navbar';
import sunLogo from './../img/sun-logo.svg';
import Grid from '@material-ui/core/Grid';
import creditCards from './../img/credit-card-logos.png';
import tapeMeasure from './../img/tape-measure.svg';
import React from 'react';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

import gordon from './../img/galleries/1-sloped-flat/cover-gallery-1.jpeg';
import custom from './../img/galleries/2-custom/brown-door-angle.jpg';
import commercial from './../img/galleries/3-commercial/commercial-black-front.jpg';
import quad from './../img/galleries/4-quad/img_7516.jpg';
import brooklynCoalChute from './../img/galleries/5-brooklyn-coal-chute/white-door-square.jpg';
import aluminum from './../img/galleries/6-aluminum/white-in-front.jpg';
import screenDoor from './../img/galleries/7-protective-screens/screen door.jpg';
import steps from './../img/galleries/8-steps-handrails/black-exit-staircase-facing-down.jpg';
import gate from './../img/galleries/9-gate/default.jpg';
import colonial from './../img/galleries/10-colonial/red-door-even-lighting.jpg';

import GalleryCard from '../comps/GalleryCard';

function GalleryGridItem({ img, title, link }) {
	return (
		<Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
			<GalleryCard img={img} title={title} link={link} />
		</Grid>
	);
}

export default function Home() {
	return (
		<>
			<div className={layout.container}>
				<Head>
					<title>Home | Stellar Cellar Doors</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main className={layout.main}>
					<img
						src={sunLogo}
						alt={'Logo of a sun behind clouds'}
						className={styles.logo}
					/>
					<h1 className={layout.title}>Stellar Cellar Doors</h1>

					<p className={layout.description}>
						Licensed, Certified, and Insured. NY’s Cellar Door
						Specialist For Ten Years Commercial Or Residential flat
						or sloped, stock size or custom made.
					</p>

					<Grid
						container
						spacing={4}
						justify={'center'}
						className={styles.headingGrid}
					>
						<Grid
							className={styles.headingGridItem}
							item
							sm={4}
							md={3}
							lg={3}
							xl={3}
							xs={10}
						>
							<h3>Call Us Now 9am- 7pm</h3>
							<p>646-703-3444</p>
							<p>info@stellarcellardoors.com</p>
							<p>Phone Quotes Gladly Provided!</p>
						</Grid>
						<Grid
							className={styles.headingGridItem}
							item
							sm={4}
							md={3}
							lg={3}
							xl={3}
							xs={10}
						>
							<h3>We accept all major credit card providers</h3>
							<img
								className={styles.creditCardProviders}
								src={creditCards}
								alt={'Supported credit card providers'}
							/>
						</Grid>

						<Grid
							className={styles.headingGridItem}
							item
							sm={4}
							md={3}
							lg={3}
							xl={3}
							xs={10}
						>
							<h3>Serving the greater New York City area</h3>
							<p>
								We serve all of NYC, Nassau, Westchester, Essex,
								Hudson, Union, and Bergen Counties.
							</p>
							<p>
								Not sure if we serve your area? Feel free to
								give us a call!
							</p>
						</Grid>
					</Grid>

					<img
						src={tapeMeasure}
						alt={'Tape Measure'}
						className={styles.measuringTape}
					/>
					<h2>Don't know how to measure your door?</h2>
					<p>
						Not to worry! We've compiled a list of instructions so
						you can get the most accurate measurements and we can
						best serve you.
					</p>
					<Link href={'/how-to-measure'}>
						<Button
							variant={'contained'}
							className={styles.measureButton}
							color={'secondary'}
						>
							Learn To Measure My Door
						</Button>
					</Link>

					<h2>Galleries</h2>
					<p>See some of our past work</p>

					<Grid container spacing={2} justify={'center'}>
						<GalleryGridItem
							img={gordon}
							title={'Sloped and Flat Gordon Doors'}
							link={'/gallery/sloped-flat'}
						/>
						<GalleryGridItem
							img={custom}
							title={'Custom Doors'}
							link={'/gallery/custom'}
						/>
						<GalleryGridItem
							img={commercial}
							title={'Commercial Doors'}
							link={'/gallery/commercial'}
						/>
						<GalleryGridItem
							img={quad}
							title={'Quad Doors'}
							link={'/gallery/quad'}
						/>
						<GalleryGridItem
							img={brooklynCoalChute}
							title={'Brooklyn Coal Chute Doors'}
							link={'/gallery/brooklyn-coal-chute'}
						/>
						<GalleryGridItem
							img={aluminum}
							title={'Aluminum Doors'}
							link={'/gallery/aluminum'}
						/>
						<GalleryGridItem
							img={screenDoor}
							title={'Doors With Protective Screens'}
							link={'/gallery/protective-screens'}
						/>
						<GalleryGridItem
							img={steps}
							title={'Steps and Handrails'}
							link={'/gallery/steps-and-handrails'}
						/>
						<GalleryGridItem
							img={gate}
							title={'Gate doors'}
							link={'/gallery/gate'}
						/>
						<GalleryGridItem
							img={colonial}
							title={'Colonial Doors'}
							link={'/gallery/colonial'}
						/>
					</Grid>
				</main>
			</div>
		</>
	);
}
