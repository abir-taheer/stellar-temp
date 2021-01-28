import { gql } from "apollo-server-micro";

export default gql`
  type Query {
    pageById(id: ObjectId!): Page
    pageByUrl(url: String!): Page
  
  }
`;
