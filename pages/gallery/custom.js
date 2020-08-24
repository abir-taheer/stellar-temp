import GalleryPageTemplate from '../../comps/GalleryPageTemplate';
import React from 'react';
import pic1 from './../../img/galleries/2-custom/20150918_134947.jpg';

export default function CustomDoors() {
	return (
		<GalleryPageTemplate
			title={'Custom doors'}
			tagline={'We make custom doors of all sizes.'}
			images={[pic1]}
		/>
	);
}
