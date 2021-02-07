import Grid from '@material-ui/core/Grid';
import GalleryGridCard from './GalleryGridCard';
import cloudinary from '../../../utils/cloudinary/core';

export default function GalleryGridItem({ coverPic, title, url }) {
	return (
		<Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
			<GalleryGridCard img={cloudinary.url(coverPic?.resourceId)} title={title} link={"/gallery/" + url} />
		</Grid>
	);
}
