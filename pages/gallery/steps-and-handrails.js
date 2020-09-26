import React from 'react';
import layout from '../../styles/Layout.module.css';
import Gallery from '../../comps/gallery/Gallery';
import Head from 'next/head';
import ContactUs from '../../comps/ui/ContactUs';
import BackButton from '../../comps/ui/BackButton';
import MarlonBrando from '../../comps/shared/MarlonBrando';

const images = [
	{
		src: '/img/galleries/8-steps-handrails/20181108-.jpg',
		thumbnail: '/img/galleries/8-steps-handrails/20181108-.jpg',
		thumbnailWidth: 1000,
		thumbnailHeight: 750,
		alt: '20181108 ',
	},
	{
		src: '/img/galleries/8-steps-handrails/20200222-.jpg',
		thumbnail: '/img/galleries/8-steps-handrails/20200222-.jpg',
		thumbnailWidth: 1000,
		thumbnailHeight: 750,
		alt: '20200222 ',
	},
	{
		src: '/img/galleries/8-steps-handrails/black-arch-tree-railings.jpg',
		thumbnail:
			'/img/galleries/8-steps-handrails/black-arch-tree-railings.jpg',
		thumbnailWidth: 1000,
		thumbnailHeight: 750,
		alt: 'black arch tree railings',
	},
	{
		src: '/img/galleries/8-steps-handrails/black-exit.jpg',
		thumbnail: '/img/galleries/8-steps-handrails/black-exit.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'black exit',
	},
	{
		src:
			'/img/galleries/8-steps-handrails/black-exit-staircase-facing-down.jpg',
		thumbnail:
			'/img/galleries/8-steps-handrails/black-exit-staircase-facing-down.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'black exit staircase facing down',
	},
	{
		src: '/img/galleries/8-steps-handrails/black-railing-on-box.jpg',
		thumbnail: '/img/galleries/8-steps-handrails/black-railing-on-box.jpg',
		thumbnailWidth: 1000,
		thumbnailHeight: 750,
		alt: 'black railing on box',
	},
	{
		src:
			'/img/galleries/8-steps-handrails/custom-stairwell-with-custom-cellar-door--inside.jpg',
		thumbnail:
			'/img/galleries/8-steps-handrails/custom-stairwell-with-custom-cellar-door--inside.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'custom stairwell with custom cellar door  inside',
	},
	{
		src: '/img/galleries/8-steps-handrails/rebuilt-cement-stairwell.jpg',
		thumbnail:
			'/img/galleries/8-steps-handrails/rebuilt-cement-stairwell.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'rebuilt cement stairwell',
	},
	{
		src: '/img/galleries/8-steps-handrails/staircase-black-railing.jpg',
		thumbnail:
			'/img/galleries/8-steps-handrails/staircase-black-railing.jpg',
		thumbnailWidth: 1000,
		thumbnailHeight: 750,
		alt: 'staircase black railing',
	},
	{
		src: '/img/galleries/8-steps-handrails/staircase-inside-front.jpg',
		thumbnail:
			'/img/galleries/8-steps-handrails/staircase-inside-front.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'staircase inside front',
	},
	{
		src: '/img/galleries/8-steps-handrails/staircase-side.jpg',
		thumbnail: '/img/galleries/8-steps-handrails/staircase-side.jpg',
		thumbnailWidth: 750,
		thumbnailHeight: 1000,
		alt: 'staircase side',
	},
];

const StepsAndHandrails = () => {
	return (
		<div className={layout.container}>
			<Head>
				<title>Steps and Handrails | Stellar Cellar Doors</title>
				<meta
					property={'og:title'}
					content={'Steps and Handrails | Stellar Cellar Doors'}
				/>
			</Head>
			<main className={layout.main}>
				<BackButton />
				<h1>Steps and Handrails</h1>
				<p>We also make Treeguards, Fire Escapes, Welding Repairs</p>
				<MarlonBrando />
				<Gallery images={images} />
				<ContactUs />
			</main>
		</div>
	);
};

export default StepsAndHandrails;
