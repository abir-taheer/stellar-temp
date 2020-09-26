import Grid from '@material-ui/core/Grid';
import GalleryGridCard from './GalleryGridCard';
import React from 'react';

export default function GalleryGridItem({ img, title, link }) {
	return (
		<Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
			<GalleryGridCard img={img} title={title} link={link} />
		</Grid>
	);
}
