import GalleryPageTemplate from '../../comps/GalleryPageTemplate';
import React from 'react';
import pic1 from './../../img/galleries/2-custom/20150918_134947.jpg';
import pic2 from './../../img/galleries/2-custom/20181018_.jpg';
import pic3 from './../../img/galleries/2-custom/brown-door-angle.jpg';
import pic4 from '../../img/galleries/2-custom/brown-door-front.jpg';
import pic5 from '../../img/galleries/2-custom/brown-door-open.jpg';
import pic6 from '../../img/galleries/2-custom/category 2.jpg';
import pic7 from './../../img/galleries/2-custom/flat-custom-cellar-door-with-extension-1.jpg';
import pic8 from './../../img/galleries/2-custom/flat-custom-cellar-door-with-extension-2.jpg';
import pic9 from '../../img/galleries/2-custom/flat-gordon-door-blue-on-slope.jpg';
import pic10 from '../../img/galleries/2-custom/gallery12-black-slant.jpg';
import pic11 from '../../img/galleries/2-custom/grey-door-in-front-of-grey-house.png';
import pic12 from './../../img/galleries/2-custom/grey-slant-angle.jpg';
import pic13 from './../../img/galleries/2-custom/grey-slant-angle-2.jpg';
import pic14 from './../../img/galleries/2-custom/grey-slant-front.jpg';
import pic15 from './../../img/galleries/2-custom/grey-slant-on-table-angle.jpg';
import pic16 from './../../img/galleries/2-custom/grey-slant-on-table-front.jpg';

const images = [
	pic2,
	pic3,
	pic4,
	pic5,
	pic8,
	pic9,
	pic10,
	pic11,
	pic12,
	pic13,
	pic1,
	pic6,
	pic14,
	pic15,
	pic16,
	pic7,
];

export default function CustomDoors() {
	return (
		<GalleryPageTemplate
			title={'Custom doors'}
			tagline={'We make custom doors of all sizes.'}
			images={images}
		/>
	);
}
