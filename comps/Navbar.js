import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/icons/Menu';
import styles from './../styles/Navbar.module.css';
import { EmojiSymbols, Home, Search, Straighten } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Drawer from '@material-ui/core/Drawer';
import sunLogo from './../img/sun-logo.svg';
import List from '@material-ui/core/List';
import Link from 'next/link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useRouter } from 'next/router';

const Navbar = () => {
	const router = useRouter();

	const [open, setOpen] = React.useState(false);
	const [search, setSearch] = React.useState('');
	const ref = React.createRef();

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
						Stellar Cellar Doors
					</Typography>

					<div className={styles.search}>
						<div className={styles.searchIcon}>
							<Search />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								// root: classes.inputRoot,
								input: styles.input,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
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
					<Link href={'/catalog'}>
						<ListItem button>
							<ListItemIcon>
								<EmojiSymbols />
							</ListItemIcon>
							<ListItemText primary={'Catalog'} />
						</ListItem>
					</Link>
				</List>
			</Drawer>
		</div>
	);
};

export default Navbar;
