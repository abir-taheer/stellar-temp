import React from 'react';
import layout from '../../styles/Layout.module.css';
import Gallery from '../../comps/gallery/Gallery';
import BackButton from '../../comps/ui/BackButton';
import Head from 'next/head';
import ContactUs from '../../comps/ui/ContactUs';
import HowToMeasure from '../../comps/shared/HowToMeasure';

const images = [
	{
		src:
			'/img/galleries/6-aluminum/pg-6-powder-coated-flood-proof-aluminum-door.jpg',
		thumbnail:
			'/img/galleries/6-aluminum/pg-6-powder-coated-flood-proof-aluminum-door.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'pg 6 powder coated flood proof aluminum door',
	},
	{
		src: '/img/galleries/6-aluminum/white-angled.jpg',
		thumbnail: '/img/galleries/6-aluminum/white-angled.jpg',
		thumbnailWidth: 665,
		thumbnailHeight: 887,
		alt: 'white angled',
	},
	{
		src: '/img/galleries/6-aluminum/white-in-front.jpg',
		thumbnail: '/img/galleries/6-aluminum/white-in-front.jpg',
		thumbnailWidth: 725,
		thumbnailHeight: 965,
		alt: 'white in front',
	},
	{
		src: '/img/galleries/6-aluminum/white-piston.jpg',
		thumbnail: '/img/galleries/6-aluminum/white-piston.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'white piston',
	},
	{
		src: '/img/galleries/6-aluminum/white-puston-2.jpg',
		thumbnail: '/img/galleries/6-aluminum/white-puston-2.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'white puston 2',
	},
];

const Aluminum = () => {
	return (
		<div className={layout.container}>
			<Head>
				<title>Aluminum Doors | Stellar Cellar Doors</title>
				<meta
					property={'og:title'}
					content={'Aluminum Doors | Stellar Cellar Doors'}
				/>
			</Head>
			<main className={layout.main}>
				<BackButton />
				<h1>Aluminum Doors</h1>
				<HowToMeasure />
				<Gallery images={images} />
				<ContactUs />
			</main>
		</div>
	);
};

export default Aluminum;
