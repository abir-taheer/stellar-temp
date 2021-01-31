import Picture from '../../../models/picture';

export default (root, {id}) => Picture.findById(id);