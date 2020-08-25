import Navbar from './Navbar';
import layout from '../styles/Layout.module.css';
import BackButton from './BackButton';
import Gallery from './Gallery';
import React from 'react';
import ContactUsCard from './ContactUsCard';

const GalleryPageTemplate = ({ images, title, tagline }) => {
	return (
		<>
			<div className={layout.container}>
				<main className={layout.main}>
					<BackButton />

					<h1>{title}</h1>
					<p>{tagline}</p>
					<p>Click on any of the photos to view them up close</p>
					<Gallery images={images} />
					<br />
					<ContactUsCard />
				</main>
			</div>
		</>
	);
};

export default GalleryPageTemplate;
