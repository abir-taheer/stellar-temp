import React from 'react';
import layout from '../../styles/Layout.module.css';
import Gallery from '../../comps/gallery/Gallery';
import Head from 'next/head';
import ContactUs from '../../comps/ui/ContactUs';
import BackButton from '../../comps/ui/BackButton';
import MarlonBrando from '../../comps/shared/MarlonBrando';

const images = [
	{
		src: '/img/galleries/4-quad/img-7516.jpg',
		thumbnail: '/img/galleries/4-quad/img-7516.jpg',
		thumbnailWidth: 555,
		thumbnailHeight: 740,
		alt: 'img 7516',
	},
	{
		src: '/img/galleries/4-quad/img-7518.jpg',
		thumbnail: '/img/galleries/4-quad/img-7518.jpg',
		thumbnailWidth: 600,
		thumbnailHeight: 800,
		alt: 'img 7518',
	},
	{
		src: '/img/galleries/4-quad/img-7520.jpg',
		thumbnail: '/img/galleries/4-quad/img-7520.jpg',
		thumbnailWidth: 600,
		thumbnailHeight: 800,
		alt: 'img 7520',
	},
	{
		src: '/img/galleries/4-quad/img-7522.jpg',
		thumbnail: '/img/galleries/4-quad/img-7522.jpg',
		thumbnailWidth: 600,
		thumbnailHeight: 800,
		alt: 'img 7522',
	},
];
const Quad = () => {
	return (
		<div className={layout.container}>
			<Head>
				<title>Quad Doors | Stellar Cellar Doors</title>
				<meta
					property={'og:title'}
					content={'Quad Doors | Stellar Cellar Doors'}
				/>
			</Head>
			<main className={layout.main}>
				<BackButton />
				<h1>Quad Doors</h1>
				<p>Replace your sloped door and gain more yard space</p>
				<MarlonBrando />
				<Gallery images={images} />
				<ContactUs />
			</main>
		</div>
	);
};

export default Quad;
