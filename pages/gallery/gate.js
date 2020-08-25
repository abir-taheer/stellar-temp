import React from 'react';
import GalleryPageTemplate from '../../comps/GalleryPageTemplate';

import pic1 from './../../img/galleries/9-gate/default.jpg';
import pic2 from './../../img/galleries/9-gate/pic-for-12-custom-gate-doors.jpg';
import pic3 from './../../img/galleries/9-gate/pic12-gate-door-with-transom.jpg';
import pic4 from './../../img/galleries/9-gate/1.jpg';
import pic5 from './../../img/galleries/9-gate/2.jpg';
import pic6 from './../../img/galleries/9-gate/3.jpg';
import pic7 from './../../img/galleries/9-gate/4.jpg';
import pic8 from './../../img/galleries/9-gate/5.jpg';
import pic9 from './../../img/galleries/9-gate/6.jpg';

const images = [pic1, pic2, pic3, pic7, pic8, pic9, pic4, pic5, pic6];

const Gate = () => {
	return (
		<GalleryPageTemplate
			images={images}
			tagline={`Our gate doors are custom made and affordable. Protect your home with elegance. Choose from our wide selection or custom design your own door.`}
			title={'Gate Doors'}
		/>
	);
};

export default Gate;
