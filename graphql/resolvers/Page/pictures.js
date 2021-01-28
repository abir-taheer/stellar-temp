import Picture from '../../../models/picture';

export default page => Picture.idLoader.loadMany(page.pictureIds);