import React, { createRef, useEffect } from 'react';
import layout from '../../styles/Layout.module.css';
import Lightbox, { triggerLightbox } from './Lightbox';
import $ from 'jquery';
import 'justifiedGallery';
import cloudinary from '../../utils/cloudinary/core';

const Gallery = ({ pictures, rowHeight = 250 }) => {
	const galleryRef = createRef();

	useEffect(() => {
		if (galleryRef.current) {
			$(galleryRef.current).justifiedGallery({
				rowHeight,
				margins: 4,
				captions: false,
				lastRow: "center"
			});
		}
	});

	return (
		<div className={layout.gallery}>
			<Lightbox />

			<div ref={galleryRef}>
				{pictures?.map((picture) => (
					<a
						key={picture.id}
						onClick={() =>
							triggerLightbox(cloudinary.url(picture.resourceId))
						}
						className={layout.galleryImage}
					>
						<img
							width={picture.width / (picture.height / 250)}
							height={250}
							data-resource-id={picture.resourceId}
							alt={picture.alt}
							src={cloudinary.url(picture.resourceId, {
								quality: 'auto',
								height: 250,
							})}
						/>
					</a>
				))}
			</div>
		</div>
	);
};

export default Gallery;
