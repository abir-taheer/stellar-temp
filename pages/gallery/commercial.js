import React from 'react';
import layout from '../../styles/Layout.module.css';
import Gallery from '../../comps/gallery/Gallery';
import Head from 'next/head';
import ContactUs from '../../comps/ui/ContactUs';
import BackButton from '../../comps/ui/BackButton';
import HowToMeasure from '../../comps/shared/HowToMeasure';
import MarlonBrando from '../../comps/shared/MarlonBrando';

const images = [
	{
		src: '/img/galleries/3-commercial/20180509-082839.jpg',
		thumbnail: '/img/galleries/3-commercial/20180509-082839.jpg',
		thumbnailWidth: 1024,
		thumbnailHeight: 768,
		alt: '20180509 082839',
	},
	{
		src: '/img/galleries/3-commercial/black-door-1.jpg',
		thumbnail: '/img/galleries/3-commercial/black-door-1.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'black door 1',
	},
	{
		src: '/img/galleries/3-commercial/black-door-2.jpg',
		thumbnail: '/img/galleries/3-commercial/black-door-2.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'black door 2',
	},
	{
		src: '/img/galleries/3-commercial/black-door-3.jpg',
		thumbnail: '/img/galleries/3-commercial/black-door-3.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'black door 3',
	},
	{
		src: '/img/galleries/3-commercial/commercial-black.jpg',
		thumbnail: '/img/galleries/3-commercial/commercial-black.jpg',
		thumbnailWidth: 749,
		thumbnailHeight: 561,
		alt: 'commercial black',
	},
	{
		src: '/img/galleries/3-commercial/commercial-black-door.jpg',
		thumbnail: '/img/galleries/3-commercial/commercial-black-door.jpg',
		thumbnailWidth: 1000,
		thumbnailHeight: 750,
		alt: 'commercial black door',
	},
	{
		src: '/img/galleries/3-commercial/commercial-black-front.jpg',
		thumbnail: '/img/galleries/3-commercial/commercial-black-front.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'commercial black front',
	},
	{
		src: '/img/galleries/3-commercial/commercial-black-side.jpg',
		thumbnail: '/img/galleries/3-commercial/commercial-black-side.jpg',
		thumbnailWidth: 907,
		thumbnailHeight: 681,
		alt: 'commercial black side',
	},
];
const Commercial = () => {
	return (
		<div className={layout.container}>
			<Head>
				<title>Commercial Doors | Stellar Cellar Doors</title>
				<meta
					property={'og:title'}
					content={'Commercial Doors | Stellar Cellar Doors'}
				/>
			</Head>
			<main className={layout.main}>
				<BackButton />
				<h1>Commercial Doors</h1>
				<MarlonBrando />
				<Gallery images={images} />
				<ContactUs />
			</main>
		</div>
	);
};

export default Commercial;
