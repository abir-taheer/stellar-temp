import React from 'react';

import pic1 from './../../img/galleries/8-steps-handrails/20181108_.jpg';
import pic2 from './../../img/galleries/8-steps-handrails/20200222_.jpg';
import pic3 from './../../img/galleries/8-steps-handrails/black-arch-tree-railings.jpg';
import pic4 from './../../img/galleries/8-steps-handrails/black-exit-staircase-facing-down.jpg';
import pic5 from './../../img/galleries/8-steps-handrails/black-exit.jpg';
import pic6 from './../../img/galleries/8-steps-handrails/black-railing-on-box.jpg';
import pic7 from './../../img/galleries/8-steps-handrails/custom-stairwell-with-custom-cellar-door- inside.jpg';
import pic8 from './../../img/galleries/8-steps-handrails/rebuilt-cement-stairwell.jpeg';
import pic9 from './../../img/galleries/8-steps-handrails/staircase-black-railing.jpg';
import pic10 from './../../img/galleries/8-steps-handrails/staircase-inside-front.jpg';
import pic11 from './../../img/galleries/8-steps-handrails/staircase-side.jpg';
import GalleryPageTemplate from '../../comps/GalleryPageTemplate';

const images = [
	pic1,
	pic2,
	pic3,
	pic4,
	pic5,
	pic7,
	pic8,
	pic10,
	pic11,
	pic9,
	pic6,
];

const StepsAndHandrails = () => {
	return (
		<GalleryPageTemplate images={images} title={'Steps and Handrails'} />
	);
};

export default StepsAndHandrails;
