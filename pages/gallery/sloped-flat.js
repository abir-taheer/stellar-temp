import React from 'react';
import layout from '../../styles/Layout.module.css';
import Gallery from '../../comps/gallery/Gallery';
import Head from 'next/head';
import ContactUs from '../../comps/ui/ContactUs';
import BackButton from '../../comps/ui/BackButton';
import HowToMeasure from '../../comps/shared/HowToMeasure';

const images = [
	{
		src:
			'/img/galleries/1-sloped-flat/cd3-gordon-door-18-extension-after.jpg',
		thumbnail:
			'/img/galleries/1-sloped-flat/cd3-gordon-door-18-extension-after.jpg',
		thumbnailWidth: 698,
		thumbnailHeight: 931,
		alt: 'cd3 gordon door 18 extension after',
	},
	{
		src: '/img/galleries/1-sloped-flat/cover-gallery-1.jpg',
		thumbnail: '/img/galleries/1-sloped-flat/cover-gallery-1.jpg',
		thumbnailWidth: 747,
		thumbnailHeight: 559,
		alt: 'cover gallery 1',
	},
	{
		src: '/img/galleries/1-sloped-flat/flat-slope-no-sides.jpg',
		thumbnail: '/img/galleries/1-sloped-flat/flat-slope-no-sides.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'flat slope no sides',
	},
	{
		src: '/img/galleries/1-sloped-flat/gordon-model-cdsl-rustoleum-red.jpg',
		thumbnail:
			'/img/galleries/1-sloped-flat/gordon-model-cdsl-rustoleum-red.jpg',
		thumbnailWidth: 629,
		thumbnailHeight: 838,
		alt: 'gordon model cdsl rustoleum red',
	},
	{
		src:
			'/img/galleries/1-sloped-flat/gordon-rustoleum-battleship-grey.jpg',
		thumbnail:
			'/img/galleries/1-sloped-flat/gordon-rustoleum-battleship-grey.jpg',
		thumbnailWidth: 1000,
		thumbnailHeight: 750,
		alt: 'gordon rustoleum battleship grey',
	},
	{
		src: '/img/galleries/1-sloped-flat/with-header-rustoleum-black.jpg',
		thumbnail:
			'/img/galleries/1-sloped-flat/with-header-rustoleum-black.jpg',
		thumbnailWidth: 842,
		thumbnailHeight: 631,
		alt: 'with header rustoleum black',
	},
];

export default function SlopedFlat() {
	return (
		<div className={layout.container}>
			<Head>
				<title>
					Sloped and Flat Bilco / Gordon Doors | Stellar Cellar Doors
				</title>
				<meta
					property={'og:title'}
					content={
						'Sloped and Flat Bilco / Gordon Doors | Stellar Cellar Doors'
					}
				/>
			</Head>
			<main className={layout.main}>
				<BackButton />
				<h1>Sloped and Flat Bilco / Gordon Doors</h1>
				<p>All stock sizes available for immediate installation</p>
				<HowToMeasure />
				<Gallery images={images} />
				<ContactUs />
			</main>
		</div>
	);
}
