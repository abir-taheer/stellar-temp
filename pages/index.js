import Head from 'next/head';
import layout from './../styles/Layout.module.css';
import React from 'react';

import Locations from '../comps/home/Locations';
import LandingCards from '../comps/home/landing/LandingCards';
import GalleryGrid from '../comps/home/gallery-grid/GalleryGrid';
import Page from '../models/page';
import Picture from '../models/picture';

export async function getStaticProps() {
	const pages = await Page.find().sort({order: 1});

	const data = await Promise.all(
		pages.map(async (page) => {
			const pic = page.coverPicId
				? await Picture.idLoader.load(page.coverPicId)
				: null;
			let coverPic = null;
			if (pic) {
				coverPic = {
					id: pic.id,
					title: pic.title,
					alt: pic.alt,
					resourceId: pic.resourceId,
				};
			}

			return {
				id: page.id,
				title: page.title,
				url: page.url,
				coverPic,
			};
		})
	);

	return {
		props: {
			pages: data,
		},
		revalidate: 5,
	};
}

export default function Home({ pages }) {
	return (
		<>
			<Head>
				<title>Home | Stellar Cellar Doors</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={layout.container}>
				<main className={layout.main}>
					<LandingCards />
					<GalleryGrid pages={pages} />
					<Locations />
				</main>
			</div>
		</>
	);
}
