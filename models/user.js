import mongoose from './mongoose';
import findOneLoaderFactory from '../utils/dataloaders/findOneLoaderFactory';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	passwordCrypt: String,
	adminPrivileges: Boolean,
	emailVerified: Boolean,
	subscription: Boolean,
	createdAt: Date,
});

UserSchema.statics.idLoader = findOneLoaderFactory('User');

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
