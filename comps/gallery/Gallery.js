import React from 'react';
import layout from '../../styles/Layout.module.css';
import MasonryGallery from 'react-grid-gallery';
import { useMediaQuery } from '@material-ui/core';

const Gallery = ({ images }) => {
	const isMobile = useMediaQuery('(max-width: 1024px)');

	return (
		<div className={layout.gallery}>
			<MasonryGallery
				backdropClosesModal
				images={images}
				rowHeight={isMobile ? undefined : 350}
				margin={5}
				enableImageSelection={false}
			/>
		</div>
	);
};

export default Gallery;
