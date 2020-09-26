import React from 'react';

import layout from '../../styles/Layout.module.css';
import Gallery from '../../comps/gallery/Gallery';
import Head from 'next/head';
import ContactUs from '../../comps/ui/ContactUs';
import BackButton from '../../comps/ui/BackButton';
import MarlonBrando from '../../comps/shared/MarlonBrando';

const images = [
	{
		src: '/img/galleries/10-colonial/blue-door-part-shadow.jpg',
		thumbnail: '/img/galleries/10-colonial/blue-door-part-shadow.jpg',
		thumbnailWidth: 749,
		thumbnailHeight: 562,
		alt: 'blue door part shadow',
	},
	{
		src: '/img/galleries/10-colonial/green-door-in-front-of-window.jpg',
		thumbnail:
			'/img/galleries/10-colonial/green-door-in-front-of-window.jpg',
		thumbnailWidth: 685,
		thumbnailHeight: 515,
		alt: 'green door in front of window',
	},
	{
		src: '/img/galleries/10-colonial/grey-door.jpg',
		thumbnail: '/img/galleries/10-colonial/grey-door.jpg',
		thumbnailWidth: 612,
		thumbnailHeight: 459,
		alt: 'grey door',
	},
	{
		src: '/img/galleries/10-colonial/light-green-door.jpg',
		thumbnail: '/img/galleries/10-colonial/light-green-door.jpg',
		thumbnailWidth: 1000,
		thumbnailHeight: 750,
		alt: 'light green door',
	},
	{
		src: '/img/galleries/10-colonial/red-door-even-lighting.jpg',
		thumbnail: '/img/galleries/10-colonial/red-door-even-lighting.jpg',
		thumbnailWidth: 829,
		thumbnailHeight: 621,
		alt: 'red door even lighting',
	},
	{
		src: '/img/galleries/10-colonial/red-door-in-shade.jpg',
		thumbnail: '/img/galleries/10-colonial/red-door-in-shade.jpg',
		thumbnailWidth: 681,
		thumbnailHeight: 908,
		alt: 'red door in shade',
	},
	{
		src: '/img/galleries/10-colonial/small-dark-red-door.jpg',
		thumbnail: '/img/galleries/10-colonial/small-dark-red-door.jpg',
		thumbnailWidth: 749,
		thumbnailHeight: 562,
		alt: 'small dark red door',
	},
];

const Colonial = () => {
	return (
		<div className={layout.container}>
			<Head>
				<title>Colonial Doors | Stellar Cellar Doors</title>
				<meta
					property={'og:title'}
					content={'Colonial Doors | Stellar Cellar Doors'}
				/>
			</Head>
			<main className={layout.main}>
				<BackButton />
				<h1>Colonial Doors</h1>
				<p>Custom Made / Waterproof</p>
				<MarlonBrando />
				<Gallery images={images} />
				<ContactUs />
			</main>
		</div>
	);
};

export default Colonial;
