import React, { useEffect, useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import {
	ExpandLess,
	ExpandMore,
	Home,
	MeetingRoom, Pages,
	Straighten
} from '@material-ui/icons';
import Drawer from '@material-ui/core/Drawer';

import sunLogo from '../../img/sun-logo.svg';
import styles from '../../styles/Navbar.module.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import Link from 'next/link';
import { useRouter } from 'next/router';

import galleryItems from '../gallery/galleryItems';
import SearchBar from './SearchBar';
import { gql, useQuery } from '@apollo/client';
import { Collapse } from '@material-ui/core';

const PAGES_QUERY = gql`
	query {
		pages {
			id
			url
			title
			order
			pictures {
				id
			}
		}
	}
`;

const Navbar = () => {
	const router = useRouter();
	const [open, setOpen] = React.useState(false);
	const { data, loading, error } = useQuery(PAGES_QUERY);
	const [galleryOpen, setGalleryOpen] = useState(false);
	const [galleryPages, setGalleryPages] = useState([]);
	const [otherPages, setOtherPages] = useState([]);

	useEffect(() => {
		if (data?.pages) {
			const newGalleryPages = [];
			const newOtherPages = [];

			data.pages.forEach((page) => {
				if (page?.pictures?.length) {
					newGalleryPages.push(page);
				} else {
					newOtherPages.push(page);
				}
			});

			if(! galleryOpen){
				setGalleryOpen(true);
			}

			setGalleryPages(newGalleryPages);
			setOtherPages(newOtherPages);
		}
	}, [data, setGalleryPages, setOtherPages]);

	useEffect(() => {
		const handleRouteChange = () => {
			setOpen(false);
		};

		router.events.on('routeChangeStart', handleRouteChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method:
		return () => {
			router.events.off('routeChangeStart', handleRouteChange);
		};
	}, []);

	return (
		<div>
			<AppBar position="static" className={styles.navbar}>
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={() => setOpen(!open)}
					>
						<Menu />
					</IconButton>
					<Typography variant="h6" className={styles.title}>
						<Link href={'/'}>Stellar Cellar Doors</Link>
					</Typography>

					<SearchBar />
				</Toolbar>
			</AppBar>

			<Drawer
				className={styles.drawer}
				open={open}
				onClose={() => setOpen(false)}
			>
				<div className={styles.drawerContent}>
					<div className={styles.drawerHeading}>
						<img
							src={sunLogo}
							alt={'Sun covered by a cloud'}
							className={styles.logo}
						/>

						<h1>Stellar Cellar Doors</h1>
					</div>
				</div>
				<List>
					<Link href={'/'}>
						<ListItem button>
							<ListItemIcon>
								<Home />
							</ListItemIcon>
							<ListItemText primary={'Home'} />
						</ListItem>
					</Link>

					<ListItem
						button
						onClick={() => setGalleryOpen(!galleryOpen)}
					>
						<ListItemIcon>
							<MeetingRoom />
						</ListItemIcon>
						<ListItemText primary="Galleries" />
						{galleryOpen ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={galleryOpen} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							{galleryPages.map((item, index) => (
								<Link href={'/' + item.url} key={index}>
									<a>
										<ListItem button>
											<ListItemText
												style={{
													width: 230,
													maxWidth: '55vw',
													paddingLeft: "1.5rem",
												}}
												primary={item.title}
											/>
										</ListItem>
									</a>
								</Link>
							))}
						</List>
					</Collapse>
					{otherPages.map((item, index) => (
					<Link href={'/' + item.url} key={index}>
						<a>
							<ListItem button>
								<ListItemIcon>
									<Pages />
								</ListItemIcon>
								<ListItemText
									style={{
										width: 230,
										maxWidth: '55vw',
									}}
									primary={item.title}
								/>
							</ListItem>
						</a>
					</Link>
					))}
				</List>
			</Drawer>
		</div>
	);
};

export default Navbar;
