import React from 'react';
import GalleryPageTemplate from '../../comps/GalleryPageTemplate';

import pic1 from './../../img/galleries/3-commercial/20180509_082839.jpg';
import pic2 from './../../img/galleries/3-commercial/black-door-1.jpg';
import pic3 from './../../img/galleries/3-commercial/black-door-2.jpg';
import pic4 from './../../img/galleries/3-commercial/black-door-3.jpg';
import pic5 from './../../img/galleries/3-commercial/commercial-black.jpg';
import pic6 from './../../img/galleries/3-commercial/commercial-black-door.jpg';
import pic7 from './../../img/galleries/3-commercial/commercial-black-front.jpg';
import pic8 from './../../img/galleries/3-commercial/commercial-black-side.jpg';

const images = [pic8, pic5, pic6, pic7, pic2, pic3, pic4, pic1];

const Commercial = () => {
	return <GalleryPageTemplate title={'Commercial Doors'} images={images} />;
};

export default Commercial;
