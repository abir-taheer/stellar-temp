import React from 'react';
import GalleryPageTemplate from '../../comps/GalleryPageTemplate';

import pic1 from './../../img/galleries/6-aluminum/pg-6-powder-coated-flood-proof-aluminum-door.jpg';
import pic2 from './../../img/galleries/6-aluminum/white-angled.jpg';
import pic3 from './../../img/galleries/6-aluminum/white-in-front.jpg';
import pic4 from './../../img/galleries/6-aluminum/white-piston.jpg';
import pic5 from './../../img/galleries/6-aluminum/white-puston-2.jpg';

const images = [pic1, pic2, pic3, pic4, pic5];

const Aluminum = () => {
	return <GalleryPageTemplate title={'Aluminum Doors'} images={images} />;
};

export default Aluminum;
