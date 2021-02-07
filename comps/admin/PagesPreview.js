import { gql, useMutation, useQuery } from '@apollo/client';
import Loading from '../ui/Loading';
import AdminPageCard from './AdminPageCard';
import { cache } from '../apollo/useGraphQLClient';

const QUERY = gql`
	query {
		pages {
			id
			title
			url
			coverPic {
				id
				title
				alt
				resource {
					url(preset: thumbnailSmall)
				}
			}
			order
		}
	}
`;

const ORDER_MUTATION = gql`
	mutation($order: [PageOrderInput!]!) {
		reorderPages(order: $order) {
			id
			order
		}
	}
`;

const PagesPreview = () => {
	const { data, loading, refetch } = useQuery(QUERY);
	const [reorder, { loading: loadingReorder }] = useMutation(ORDER_MUTATION);

	const movePage = async (id, moveUp, ev) => {
		if (loadingReorder) {
			return;
		}

		const orderInputs = data.pages.map((page, index) => ({
			pageId: page.id,
			order: index,
		}));

		const currentPageIndex = orderInputs.findIndex(
			(row) => row.pageId === id
		);

		let offset = moveUp ? -1 : 1;

		const canMove =
			(currentPageIndex !== 0 && moveUp) ||
			(currentPageIndex !== orderInputs.length - 1 && !moveUp);

		if (currentPageIndex !== -1 && canMove) {
			orderInputs[currentPageIndex].order += offset;
			orderInputs[currentPageIndex + offset].order -= offset;

			const payload = await reorder({
				variables: { order: orderInputs },
			});
			await cache.writeQuery({
				query: QUERY,
				data: { pages: payload.data.reorderPages },
				variables: {},
			});
			await refetch();

			const cardHeight = ev.target?.parentElement?.offsetHeight || 280;
			window.scrollBy({
				top: cardHeight * offset,
				behavior: 'smooth',
			});
		}
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<div>
			{data.pages.map((page) => (
				<AdminPageCard
					key={page.id}
					{...page}
					moveUp={(ev) => movePage(page.id, true, ev)}
					moveDown={(ev) => movePage(page.id, false, ev)}
				/>
			))}
		</div>
	);
};

export default PagesPreview;
