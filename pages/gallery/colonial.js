import React from 'react';

import pic1 from './../../img/galleries/10-colonial/blue-door-part-shadow.jpg';
import pic2 from './../../img/galleries/10-colonial/green-door-in-front-of-window.jpg';
import pic3 from './../../img/galleries/10-colonial/green-door-in-front-of-window.jpg';
import pic4 from './../../img/galleries/10-colonial/light-green-door.jpg';
import pic5 from './../../img/galleries/10-colonial/red-door-even-lighting.jpg';
import pic6 from './../../img/galleries/10-colonial/red-door-in-shade.jpg';
import pic7 from './../../img/galleries/10-colonial/small-dark-red-door.jpg';
import GalleryPageTemplate from '../../comps/GalleryPageTemplate';

const images = [pic1, pic2, pic3, pic4, pic5, pic7, pic6];

const Colonial = () => {
	return <GalleryPageTemplate images={images} title={'Colonial Doors'} />;
};

export default Colonial;
