import {v2 as cloudinary} from "cloudinary";

const uploadPicStream = (picture, publicId) =>
	new Promise((resolve, reject) => {
		const uploadStream = cloudinary.uploader.upload_stream(
			{ public_id: publicId },
			function (err, image) {
				err ? reject(err) : resolve(image);
			}
		);

		picture.createReadStream().pipe(uploadStream);
	});

export default uploadPicStream;