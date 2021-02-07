import { gql, useMutation } from '@apollo/client';
import Button from '@material-ui/core/Button';
import layout from '../../../styles/Layout.module.css';
import { useRouter } from 'next/router';

const SUBMIT_MUTATION = gql`
	mutation(
		$title: String!
		$shortTitle: String!
		$url: String!
		$head: String!
		$body: String!
		$includes: IncludesInput!
		$coverPic: PictureInput
	) {
		createPage(
			title: $title
			shortTitle: $shortTitle
			url: $url
			head: $head
			body: $body
			includes: $includes
			coverPic: $coverPic
		) {
			id
		}
	}
`;

const PageCreateSubmitButton = ({
	title,
	shortTitle,
	url,
	head,
	body,
	includes,
	coverPic,
}) => {
	const router = useRouter();

	const [submit, { loading, error }] = useMutation(SUBMIT_MUTATION, {
		variables: {
			title,
			shortTitle,
			url,
			head,
			body: JSON.stringify(body.getCurrentContent()),
			includes,
			coverPic,
		},
	});

	const onSubmit = () => {
		submit()
			.then(async ({ data }) => {
				await router.push('/admin/pages/' + data.createPage.id);
			})
			.catch(() => {});
	};

	return (
		<div>
			{error && (
				<p style={{ color: 'red', margin: '1rem' }}>{error.message}</p>
			)}
			<Button
				variant={'contained'}
				color={'secondary'}
				className={layout.formInput}
				disabled={loading}
				onClick={onSubmit}
			>
				Create Page
			</Button>
		</div>
	);
};

export default PageCreateSubmitButton;
