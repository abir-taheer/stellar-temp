import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const AdminPageCard = ({ id, coverPic, url, title, moveUp, order, moveDown }) => {
	return (
		<Card style={{ padding: '1rem', margin: '1rem' }}>
			{order !== 0 && (
				<IconButton onClick={moveUp}>
					<ArrowUpward />
				</IconButton>
			)}
			<IconButton onClick={moveDown}>
				<ArrowDownward />
			</IconButton>
			<span style={{ color: 'grey', margin: '0 10px' }}>
				Change Order
			</span>
			<Grid container>
				<Grid xs={5}>
					<div
						style={{
							height: '200px',
							verticalAlign: 'center',
							textAlign: 'center',
							padding: '1rem',
						}}
					>
						<img
							src={coverPic?.resource?.url}
							style={{
								maxHeight: '100%',
								maxWidth: '100%',
								objectFit: 'contain',
								borderRadius: '10px',
							}}
							alt={coverPic?.alt}
						/>
					</div>
				</Grid>
				<Grid xs={7}>
					<h3>{title}</h3>
					<Link href={'/admin/pages/' + id}>
						<Button variant={'outlined'} color={'primary'}>
							Edit
						</Button>
					</Link>
				</Grid>
			</Grid>
		</Card>
	);
};

export default AdminPageCard;
