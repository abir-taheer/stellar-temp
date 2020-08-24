import React from 'react';
import GalleryPageTemplate from '../../comps/GalleryPageTemplate';

import pic1 from './../../img/galleries/9-gate/default.jpg';
import pic2 from './../../img/galleries/9-gate/pic-for-12-custom-gate-doors.jpg';
import pic3 from './../../img/galleries/9-gate/pic12-gate-door-with-transom.jpg';

const images = [pic1, pic2, pic3];

const Gate = () => {
	return <GalleryPageTemplate images={images} title={'Gate Doors'} />;
};

export default Gate;
