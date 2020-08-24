import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import layout from './../styles/Layout.module.css';

const BackButton = ({
	text,
	link,
	color = 'primary',
	variant = 'outlined',
}) => {
	return (
		<div className={layout.backButtonContainer}>
			<Link href={link}>
				<Button color={color} variant={variant}>
					{text}
				</Button>
			</Link>
		</div>
	);
};

export default BackButton;
