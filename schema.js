export const typeDefs = `#graphql 
type Game {
    id: ID!
    title: String!
    platform: [String!]!
    getReview: [Review!]
}
type Review {
    id: ID!
    rating: Int!
    content: String!
    getGames: Game!
    getAuthor: Author!
}
type Author {
    id: ID!
    name: String!
    verified: Boolean!
    getReview: [Review!]
}
type Query {
    getGames: [Game]
    getSingleGame(id: ID!) : Game
    getReview: [Review]
    getSingleReview(id: ID!) : Review
    getAuthor: [Author]
    getSingleAuthor(id: ID) : Author
}
type Mutation {
    deleteGame(id: ID!) : [Game]
    addGame(game: AddGameInput) : Game
    updateGame(id: ID!, edits: EditGameInput) : Game
}
input AddGameInput {
    title: String!
    platform: [String!]!
}
input EditGameInput {
    title: String
    platform: [String!]
}
`;


// ! sign means this field is must required. 