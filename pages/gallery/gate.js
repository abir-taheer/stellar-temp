import React from 'react';
import layout from '../../styles/Layout.module.css';
import Gallery from '../../comps/gallery/Gallery';
import Head from 'next/head';
import ContactUs from '../../comps/ui/ContactUs';
import BackButton from '../../comps/ui/BackButton';
import MarlonBrando from '../../comps/shared/MarlonBrando';

const images = [
	{
		src: '/img/galleries/9-gate/1.jpg',
		thumbnail: '/img/galleries/9-gate/1.jpg',
		thumbnailWidth: 206,
		thumbnailHeight: 275,
		alt: '1',
	},
	{
		src: '/img/galleries/9-gate/2.jpg',
		thumbnail: '/img/galleries/9-gate/2.jpg',
		thumbnailWidth: 275,
		thumbnailHeight: 272,
		alt: '2',
	},
	{
		src: '/img/galleries/9-gate/3.jpg',
		thumbnail: '/img/galleries/9-gate/3.jpg',
		thumbnailWidth: 188,
		thumbnailHeight: 275,
		alt: '3',
	},
	{
		src: '/img/galleries/9-gate/4.jpg',
		thumbnail: '/img/galleries/9-gate/4.jpg',
		thumbnailWidth: 375,
		thumbnailHeight: 500,
		alt: '4',
	},
	{
		src: '/img/galleries/9-gate/5.jpg',
		thumbnail: '/img/galleries/9-gate/5.jpg',
		thumbnailWidth: 373,
		thumbnailHeight: 500,
		alt: '5',
	},
	{
		src: '/img/galleries/9-gate/6.jpg',
		thumbnail: '/img/galleries/9-gate/6.jpg',
		thumbnailWidth: 373,
		thumbnailHeight: 500,
		alt: '6',
	},
	{
		src: '/img/galleries/9-gate/default.jpg',
		thumbnail: '/img/galleries/9-gate/default.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'default',
	},
	{
		src: '/img/galleries/9-gate/pic-for-12-custom-gate-doors.jpg',
		thumbnail: '/img/galleries/9-gate/pic-for-12-custom-gate-doors.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'pic for 12 custom gate doors',
	},
	{
		src: '/img/galleries/9-gate/pic12-gate-door-with-transom.jpg',
		thumbnail: '/img/galleries/9-gate/pic12-gate-door-with-transom.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'pic12 gate door with transom',
	},
];

const Gate = () => {
	return (
		<div className={layout.container}>
			<Head>
				<title>Gate Doors | Stellar Cellar Doors</title>
				<meta
					property={'og:title'}
					content={'Gate Doors | Stellar Cellar Doors'}
				/>
			</Head>
			<main className={layout.main}>
				<BackButton />
				<h1>Gate Doors</h1>
				<MarlonBrando />
				<Gallery images={images} />
				<ContactUs />
			</main>
		</div>
	);
};

export default Gate;
