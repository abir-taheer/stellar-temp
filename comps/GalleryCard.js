import React from 'react';
import layout from '../styles/Layout.module.css';
import Link from 'next/link';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const GalleryCard = ({ img, title, link, subtitle }) => {
	return (
		<Card className={layout.card}>
			<Link href={link}>
				<CardActionArea>
					<CardMedia
						className={layout.cardMedia}
						image={img}
						title={title}
					/>
					<CardContent>
						<h3>{title}</h3>
						<p>{subtitle}</p>
					</CardContent>
				</CardActionArea>
			</Link>
			<CardActions>
				<Link href={link}>
					<Button size="small" color="primary">
						View More
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default GalleryCard;
