import React from 'react';
import layout from '../../styles/Layout.module.css';
import Gallery from '../../comps/gallery/Gallery';
import Head from 'next/head';
import ContactUs from '../../comps/ui/ContactUs';
import BackButton from '../../comps/ui/BackButton';
import MarlonBrando from '../../comps/shared/MarlonBrando';
import HowToMeasure from '../../comps/shared/HowToMeasure';
import Page from '../../models/page';
import Picture from '../../models/picture';
import CloudinaryResource from '../../models/cloudinaryResource';

export async function getStaticProps(context) {
	const { url } = context.params;
	const page = await Page.findByUrl(url);

	if (!page) {
		return {
			notFound: true,
		};
	}

	const pagePictures = await Picture.find({
		_id: { $in: page.pictureIds },
	}).sort({ order: 1 });

	const pictures = await Promise.all(
		pagePictures.map(async (image) => {
			const { id, title, alt, resourceId, order } = image;

			const resource = await CloudinaryResource.idLoader.load(resourceId);
			const { height, width, format, resourceType } = resource;

			return {
				id,
				title,
				alt,
				resourceId,
				order,
				height,
				width,
				format,
				resourceType,
			};
		})
	);

	const {
		title,
		head,
		body,
		includes: { howToMeasure, marlonBrando },
	} = page;

	return {
		props: {
			title,
			head,
			body,
			includes: {
				howToMeasure: Boolean(howToMeasure),
				marlonBrando: Boolean(marlonBrando),
			},
			pictures,
		},
		revalidate: 30,
	};
}

export async function getStaticPaths() {
	const pages = await Page.find();

	return {
		paths: pages.map((page) => ({ params: { url: page.url } })),
		fallback: true,
	};
}

const GalleryPage = ({ title, head, body, includes, pictures }) => {
	return (
		<div className={layout.container}>
			<Head>
				<title>{title}</title>
				<div dangerouslySetInnerHTML={{ __html: head }} />
			</Head>
			<main className={layout.main}>
				<BackButton />

				<h1>{title}</h1>

				{includes.howToMeasure && <HowToMeasure />}

				<div dangerouslySetInnerHTML={{ __html: body }} />

				{includes?.marlonBrando && <MarlonBrando />}

				<Gallery pictures={pictures} />
				<ContactUs />
			</main>
		</div>
	);
};

export default GalleryPage;
