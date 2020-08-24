import React from 'react';
import Grid from '@material-ui/core/Grid';
import layout from '../styles/Layout.module.css';
import gallery from './../styles/Gallery.module.css';
import Lightbox from 'react-image-lightbox';

const Gallery = ({ images }) => {
	const [imageIndex, setImageIndex] = React.useState(0);
	const [dialogOpen, setDialogOpen] = React.useState(false);

	return (
		<>
			{dialogOpen && (
				<Lightbox
					mainSrc={images[imageIndex]}
					nextSrc={images[(imageIndex + 1) % images.length]}
					prevSrc={
						images[(imageIndex + images.length - 1) % images.length]
					}
					onCloseRequest={() => setDialogOpen(false)}
					onMovePrevRequest={() =>
						setImageIndex(
							(imageIndex + images.length - 1) % images.length
						)
					}
					onMoveNextRequest={() =>
						setImageIndex((imageIndex + 1) % images.length)
					}
				/>
			)}
			<Grid container spacing={3}>
				{images.map((img, index) => (
					<Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={index}>
						<img
							onClick={() => {
								setImageIndex(index);
								setDialogOpen(true);
							}}
							src={img}
							className={layout.imageFit + ' ' + gallery.image}
							alt={'Door'}
						/>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default Gallery;
