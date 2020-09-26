import Head from 'next/head';
import layout from './../styles/Layout.module.css';
import React from 'react';

import Locations from '../comps/home/Locations';
import LandingCards from '../comps/home/landing/LandingCards';
import GalleryGrid from '../comps/home/gallery-grid/GalleryGrid';

export default function Home() {
	return (
		<>
			<Head>
				<title>Home | Stellar Cellar Doors</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={layout.container}>
				<main className={layout.main}>
					<LandingCards />
					<GalleryGrid />
					<Locations />
				</main>
			</div>
		</>
	);
}
