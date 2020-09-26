import React from 'react';
import styles from '../../styles/Navbar.module.css';
import { Search } from '@material-ui/icons';
import InputBase from '@material-ui/core/InputBase';
import { List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import galleryItems from '../gallery/galleryItems';
import { useRouter } from 'next/router';

const SearchBar = () => {
	const router = useRouter();
	const [search, setSearch] = React.useState('');
	const [isFocused, setIsFocused] = React.useState(false);

	const containerRef = React.createRef();

	const results = [];

	React.useEffect(() => {
		const listener = (ev) => {
			if (
				!ev?.path?.some(
					(e) => e?.children === containerRef?.current?.children
				)
			) {
				setIsFocused(false);
			}
		};

		window.addEventListener('click', listener);

		return () => {
			window.removeEventListener('click', listener);
		};
	});

	if (isFocused && search) {
		galleryItems.forEach((item) => {
			if (
				results.length < 3 &&
				(item.title.toLowerCase().includes(search.toLowerCase()) ||
					item?.keywords?.some(
						(word) => word.toLowerCase() === search.toLowerCase()
					))
			) {
				results.push(item);
			}
		});
	}

	return (
		<div className={styles.search} ref={containerRef}>
			<div className={styles.searchIcon}>
				<Search />
			</div>
			<InputBase
				placeholder="Search…"
				classes={{
					// root: classes.inputRoot,
					input: styles.input,
				}}
				inputProps={{
					'aria-label': 'search',
					onFocus: () => setIsFocused(true),
					onChange: (ev) => setSearch(ev.target.value),
					value: search,
				}}
			/>
			{Boolean(search) && isFocused && (
				<List
					style={{
						position: 'absolute',
						top: 34,
						background: 'white',
						color: 'black',
						borderRadius: 5,
						width: '100%',
						padding: '0 0.5rem',
						border: '1px solid rgba(0, 0, 0, 0.1)',
					}}
				>
					{results.map((result) => (
						<ListItem
							button
							onClick={() => {
								router
									.push(result.link)
									.then(() => setIsFocused(false));
							}}
						>
							<div>
								<p>{result.title}</p>
							</div>
						</ListItem>
					))}
					{!results.length && (
						<ListItem>
							<div>
								<p>No Results Found...</p>
							</div>
						</ListItem>
					)}
				</List>
			)}
		</div>
	);
};

export default SearchBar;
