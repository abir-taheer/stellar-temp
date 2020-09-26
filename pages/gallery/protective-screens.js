import React from 'react';
import layout from '../../styles/Layout.module.css';
import Gallery from '../../comps/gallery/Gallery';
import Head from 'next/head';
import ContactUs from '../../comps/ui/ContactUs';
import BackButton from '../../comps/ui/BackButton';
import MarlonBrando from '../../comps/shared/MarlonBrando';

const images = [
	{
		src: '/img/galleries/7-protective-screens/cellar-door-screens.jpg',
		thumbnail:
			'/img/galleries/7-protective-screens/cellar-door-screens.jpg',
		thumbnailWidth: 500,
		thumbnailHeight: 667,
		alt: 'cellar door screens',
	},
	{
		src: '/img/galleries/7-protective-screens/gallery7-window-screen.jpg',
		thumbnail:
			'/img/galleries/7-protective-screens/gallery7-window-screen.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'gallery7 window screen',
	},
	{
		src: '/img/galleries/7-protective-screens/screen-door.jpg',
		thumbnail: '/img/galleries/7-protective-screens/screen-door.jpg',
		thumbnailWidth: 500,
		thumbnailHeight: 667,
		alt: 'screen door',
	},
];
const ProtectiveScreens = () => {
	return (
		<div className={layout.container}>
			<Head>
				<title>Protective Screen Doors | Stellar Cellar Doors</title>
				<meta
					property={'og:title'}
					content={'Protective Screen Doors | Stellar Cellar Doors'}
				/>
			</Head>
			<main className={layout.main}>
				<BackButton />
				<h1>Protective Screen Doors</h1>
				<p>We also make steel mesh screens for windows</p>
				<MarlonBrando />
				<Gallery images={images} />
				<ContactUs />
			</main>
		</div>
	);
};

export default ProtectiveScreens;
