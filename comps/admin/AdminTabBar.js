import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useRouter } from 'next/router';
import { Pages, Palette } from '@material-ui/icons';

const routes = [
	{
		path: '/admin/pages',
		label: 'Pages',
		icon: <Pages />,
	},
	{
		path: '/admin/theme',
		label: 'Theme',
		icon: <Palette />,
	},
];

const AdminTabBar = () => {
	const router = useRouter();
	const [selectedTabIndex] = useState(
		routes.findIndex((route) => router.pathname.startsWith(route.path))
	);

	return (
		<Tabs
			value={selectedTabIndex}
			indicatorColor="primary"
			textColor="primary"
			centered
		>
			{routes.map((route) => (
				<Tab
					key={route.path}
					label={route.label}
					icon={route.icon}
					onClick={() => router.push(route.path)}
				/>
			))}
		</Tabs>
	);
};

export default AdminTabBar;
