const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  """
  A Post refers to available attributes for a Post
  """
  type Vuelo {
    _id: ID!
    data: String!
    origin: String!
    destination: String!
    price: Float!
    availability: Int!
  }
  type Vuelos{
    detail: [Vuelo]
    page: Int
  }
  type RootQuery {
    vuelos(priceMin:Int!, priceMax:Int!, page:Int, limit: Int): Vuelos
    vuelo(_id: String!): Vuelo!
  }
  schema {
    query: RootQuery
  }
`);