import React from 'react';

import pic1 from './../../img/galleries/7-protective-screens/cellar door screens.jpg';
import pic2 from './../../img/galleries/7-protective-screens/gallery7-window-screen.jpg';
import pic3 from './../../img/galleries/7-protective-screens/screen door.jpg';
import GalleryPageTemplate from '../../comps/GalleryPageTemplate';

const images = [pic1, pic2, pic3];

const ProtectiveScreens = () => {
	return (
		<GalleryPageTemplate
			images={images}
			title={'Protective Screen Doors'}
		/>
	);
};

export default ProtectiveScreens;
