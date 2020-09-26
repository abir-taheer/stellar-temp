import React, { useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import { Home, MeetingRoom, Search, Straighten } from '@material-ui/icons';
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

const Navbar = () => {
	const router = useRouter();
	const [open, setOpen] = React.useState(false);
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

					<Link href={'/how-to-measure'}>
						<ListItem button>
							<ListItemIcon>
								<Straighten />
							</ListItemIcon>
							<ListItemText primary={'How To Measure'} />
						</ListItem>
					</Link>

					<ListSubheader disableSticky>Galleries</ListSubheader>
					{galleryItems.map((item, index) => (
						<Link href={item.link} key={index}>
							<a>
								<ListItem button>
									<ListItemIcon>
										<MeetingRoom />
									</ListItemIcon>
									<ListItemText
										primary={item.shortTitle || item.title}
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
