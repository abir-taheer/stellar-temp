import { Cloudinary } from 'cloudinary-core';

const cloudName = process.env.CLOUD_NAME || 'hcagzlldz';
const cloudinary = new Cloudinary({ cloud_name: cloudName, secure: true });

export default cloudinary;
