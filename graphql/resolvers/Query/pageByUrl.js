import Page from '../../../models/page';

export default (root, { url }) => Page.findOne({ url });
