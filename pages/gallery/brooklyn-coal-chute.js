import React from 'react';
import Gallery from '../../comps/gallery/Gallery';
import layout from '../../styles/Layout.module.css';
import BackButton from '../../comps/ui/BackButton';
import Head from 'next/head';
import ContactUs from '../../comps/ui/ContactUs';
import MarlonBrando from '../../comps/shared/MarlonBrando';

const images = [
	{
		src: '/img/galleries/5-brooklyn-coal-chute/white-door-square.jpg',
		thumbnail: '/img/galleries/5-brooklyn-coal-chute/white-door-square.jpg',
		thumbnailWidth: 561,
		thumbnailHeight: 749,
		alt: 'white door square',
	},
];

const BrooklynCoalChute = () => {
	return (
		<div className={layout.container}>
			<Head>
				<title>Brooklyn Coal Chute Doors | Stellar Cellar Doors</title>
				<meta
					property={'og:title'}
					content={'Brooklyn Coal Chute Doors | Stellar Cellar Doors'}
				/>
			</Head>
			<main className={layout.main}>
				<BackButton />
				<h1>Brooklyn Coal Chute Cellar Doors</h1>
				<MarlonBrando />
				<Gallery images={images} />
				<ContactUs />
			</main>
		</div>
	);
};

export default BrooklynCoalChute;
