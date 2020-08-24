import React from 'react';
import GalleryPageTemplate from '../../comps/GalleryPageTemplate';
import pic1 from './../../img/galleries/4-quad/img_7516.jpg';
import pic2 from './../../img/galleries/4-quad/img_7518.jpg';
import pic3 from './../../img/galleries/4-quad/img_7520.jpg';
import pic4 from './../../img/galleries/4-quad/img_7522.jpg';

const images = [pic1, pic2, pic3, pic4];

const Quad = () => {
	return <GalleryPageTemplate title={'Quad Doors'} images={images} />;
};

export default Quad;
