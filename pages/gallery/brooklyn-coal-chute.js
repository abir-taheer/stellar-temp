import React from 'react';
import GalleryPageTemplate from '../../comps/GalleryPageTemplate';

import pic1 from './../../img/galleries/5-brooklyn-coal-chute/white-door-square.jpg';

const images = [
	pic1,
	'https://via.placeholder.com/600x800',
	'https://via.placeholder.com/600x800',
];

const BrooklynCoalChute = () => {
	return (
		<GalleryPageTemplate
			images={images}
			title={'Brooklyn Coal Chute Doors'}
		/>
	);
};

export default BrooklynCoalChute;
