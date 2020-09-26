import React from 'react';
import layout from '../../styles/Layout.module.css';
import MasonryGallery from 'react-grid-gallery';
import { useMediaQuery } from '@material-ui/core';

const Gallery = ({ images }) => {
	const isMobile = useMediaQuery('(max-width: 1024px)');

	const innerHeight =
		typeof window !== 'undefined' ? window?.innerHeight : 1000;

	return (
		<div className={layout.gallery}>
			<MasonryGallery
				backdropClosesModal
				images={images}
				rowHeight={isMobile ? 300 : innerHeight / 2.5}
				margin={10}
				enableImageSelection={false}
			/>
		</div>
	);
};

export default Gallery;
