import React from 'react';
import layout from '../../styles/Layout.module.css';
import Gallery from '../../comps/gallery/Gallery';
import Head from 'next/head';
import ContactUs from '../../comps/ui/ContactUs';
import BackButton from '../../comps/ui/BackButton';
import HowToMeasure from '../../comps/shared/HowToMeasure';

const images = [
	{
		src: '/img/galleries/2-custom/20150918-134947.jpg',
		thumbnail: '/img/galleries/2-custom/20150918-134947.jpg',
		thumbnailWidth: 562,
		thumbnailHeight: 749,
		alt: '20150918 134947',
	},
	{
		src: '/img/galleries/2-custom/20181018-.jpg',
		thumbnail: '/img/galleries/2-custom/20181018-.jpg',
		thumbnailWidth: 920,
		thumbnailHeight: 689,
		alt: '20181018 ',
	},
	{
		src: '/img/galleries/2-custom/brown-door-angle.jpg',
		thumbnail: '/img/galleries/2-custom/brown-door-angle.jpg',
		thumbnailWidth: 948,
		thumbnailHeight: 711,
		alt: 'brown door angle',
	},
	{
		src: '/img/galleries/2-custom/brown-door-front.jpg',
		thumbnail: '/img/galleries/2-custom/brown-door-front.jpg',
		thumbnailWidth: 929,
		thumbnailHeight: 696,
		alt: 'brown door front',
	},
	{
		src: '/img/galleries/2-custom/brown-door-open.jpg',
		thumbnail: '/img/galleries/2-custom/brown-door-open.jpg',
		thumbnailWidth: 665,
		thumbnailHeight: 499,
		alt: 'brown door open',
	},
	{
		src: '/img/galleries/2-custom/category-2.jpg',
		thumbnail: '/img/galleries/2-custom/category-2.jpg',
		thumbnailWidth: 2235,
		thumbnailHeight: 2980,
		alt: 'category 2',
	},
	{
		src:
			'/img/galleries/2-custom/custom-stairwell-with-custom-cellar-door-outside.jpg',
		thumbnail:
			'/img/galleries/2-custom/custom-stairwell-with-custom-cellar-door-outside.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'custom stairwell with custom cellar door outside',
	},
	{
		src:
			'/img/galleries/2-custom/flat-custom-cellar-door-with-extension-1.jpg',
		thumbnail:
			'/img/galleries/2-custom/flat-custom-cellar-door-with-extension-1.jpg',
		thumbnailWidth: 748,
		thumbnailHeight: 561,
		alt: 'flat custom cellar door with extension 1',
	},
	{
		src:
			'/img/galleries/2-custom/flat-custom-cellar-door-with-extension-2.jpg',
		thumbnail:
			'/img/galleries/2-custom/flat-custom-cellar-door-with-extension-2.jpg',
		thumbnailWidth: 748,
		thumbnailHeight: 562,
		alt: 'flat custom cellar door with extension 2',
	},
	{
		src: '/img/galleries/2-custom/flat-gordon-door-blue-on-slope.jpg',
		thumbnail: '/img/galleries/2-custom/flat-gordon-door-blue-on-slope.jpg',
		thumbnailWidth: 692,
		thumbnailHeight: 519,
		alt: 'flat gordon door blue on slope',
	},
	{
		src: '/img/galleries/2-custom/gallery12-black-slant.jpg',
		thumbnail: '/img/galleries/2-custom/gallery12-black-slant.jpg',
		thumbnailWidth: 680,
		thumbnailHeight: 907,
		alt: 'gallery12 black slant',
	},
	{
		src: '/img/galleries/2-custom/grey-door-in-front-of-grey-house.png',
		thumbnail:
			'/img/galleries/2-custom/grey-door-in-front-of-grey-house.png',
		thumbnailWidth: 562,
		thumbnailHeight: 749,
		alt: 'grey door in front of grey house',
	},
	{
		src: '/img/galleries/2-custom/grey-slant-angle.jpg',
		thumbnail: '/img/galleries/2-custom/grey-slant-angle.jpg',
		thumbnailWidth: 694,
		thumbnailHeight: 926,
		alt: 'grey slant angle',
	},
	{
		src: '/img/galleries/2-custom/grey-slant-angle-2.jpg',
		thumbnail: '/img/galleries/2-custom/grey-slant-angle-2.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'grey slant angle 2',
	},
	{
		src: '/img/galleries/2-custom/grey-slant-front.jpg',
		thumbnail: '/img/galleries/2-custom/grey-slant-front.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'grey slant front',
	},
	{
		src: '/img/galleries/2-custom/grey-slant-on-table-angle.jpg',
		thumbnail: '/img/galleries/2-custom/grey-slant-on-table-angle.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'grey slant on table angle',
	},
	{
		src: '/img/galleries/2-custom/grey-slant-on-table-front.jpg',
		thumbnail: '/img/galleries/2-custom/grey-slant-on-table-front.jpg',
		thumbnailWidth: 725,
		thumbnailHeight: 967,
		alt: 'grey slant on table front',
	},
];
export default function CustomDoors() {
	return (
		<div className={layout.container}>
			<Head>
				<title>Custom Waterproof Doors | Stellar Cellar Doors</title>
				<meta
					property={'og:title'}
					content={'Custom Waterproof Doors | Stellar Cellar Doors'}
				/>
			</Head>
			<main className={layout.main}>
				<BackButton />
				<h1>Custom Waterproof Doors</h1>

				<HowToMeasure />

				<p>We make custom doors of all sizes.</p>
				<Gallery images={images} />
				<ContactUs />
			</main>
		</div>
	);
}
