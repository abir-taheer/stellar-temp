import React from 'react';
import gordonWithExtension from './../../img/galleries/1-sloped-flat/cd3-gordon-door-18-extension-after.jpeg';
import cover from './../../img/galleries/1-sloped-flat/cover-gallery-1.jpeg';
import flatNoSides from './../../img/galleries/1-sloped-flat/flat-slope-no-sides.jpeg';
import rustoleumRed from './../../img/galleries/1-sloped-flat/gordon-model-cdsl-rustoleum-red.jpeg';
import battleshipGrey from './../../img/galleries/1-sloped-flat/gordon-rustoleum-battleship-grey.jpeg';
import withHeader from './../../img/galleries/1-sloped-flat/with-header-rustoleum-black.jpeg';
import GalleryPageTemplate from '../../comps/GalleryPageTemplate';

const images = [
	cover,
	battleshipGrey,
	withHeader,
	rustoleumRed,
	flatNoSides,
	gordonWithExtension,
];
export default function SlopedFlat() {
	return (
		<GalleryPageTemplate
			images={images}
			title={'Sloped Or Flat Cellar Doors'}
			tagline={'All stock sizes available for immediate installation'}
		/>
	);
}
