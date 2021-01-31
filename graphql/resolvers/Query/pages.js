import Page from '../../../models/page';

export default () => Page.find().sort({ order: 1 });
