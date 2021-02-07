import React from 'react';
import Grid from '@material-ui/core/Grid';
import layout from '../../../styles/Layout.module.css';
import GalleryGridItem from './GalleryGridItem';

const GalleryGrid = ({ pages }) => {
	return (
		<div>
			<h2>Galleries</h2>
			<Grid
				container
				spacing={2}
				justify={'center'}
				className={layout.bottomMargin}
			>
				{pages?.map((item, index) => (
					<GalleryGridItem key={index} {...item} />
				))}
			</Grid>
		</div>
	);
};

export default GalleryGrid;
