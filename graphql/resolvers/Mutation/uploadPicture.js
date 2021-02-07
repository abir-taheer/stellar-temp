import Picture from '../../../models/picture';

export default async function uploadPicture(root, { picture }, { adminRequired }) {
	adminRequired();
	return await Picture.createFromUpload(picture);
}
