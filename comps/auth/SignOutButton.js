import Button from '@material-ui/core/Button';

const SignOutButton = () => {
	const signOut = () => {
		window.localStorage.clear();
		window.location.reload();
	};

	return (
		<Button color={"primary"} variant={"outlined"} onClick={signOut} >Sign Out</Button>
	);
};

export default SignOutButton;