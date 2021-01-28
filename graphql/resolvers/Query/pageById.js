import Page from "./../../../models/page";

export default (root, {id}) => Page.findById(id);