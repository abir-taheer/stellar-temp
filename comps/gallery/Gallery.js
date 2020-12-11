import React, { createRef, useEffect } from 'react';
import layout from '../../styles/Layout.module.css';
import Lightbox, { triggerLightbox } from './lightbox';
import $ from 'jquery';
import 'justifiedGallery';

const Gallery = ({ images }) => {
	const galleryRef = createRef();

	useEffect(() => {
		if (galleryRef.current) {
			$(galleryRef.current).justifiedGallery({
				rowHeight: 200,
				margins: 4,
				captions: false,
			});
		}
	});

	return (
		<div className={layout.gallery}>
			<Lightbox />

			<div ref={galleryRef}>
				{images.map((image) => (
					<a
						key={image.src}
						onClick={() => triggerLightbox(image.src)}
						className={layout.galleryImage}
					>
						<img alt={image.alt} src={image.src} />
					</a>
				))}
			</div>
		</div>
	);
};

export default Gallery;
