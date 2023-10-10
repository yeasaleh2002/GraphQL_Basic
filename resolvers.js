import _db from "./_db.js";

export const resolvers = {
    Query: {
        getGames: () => _db.games,
        getSingleGame: (_, args) => _db.games.find((game) => game.id === args.id),
        getReview: () => _db.reviews,
        getSingleReview: (_, args) => _db.reviews.find((review) => review.id === args.id),
        getAuthor: () => _db.authors,
        getSingleAuthor: (_, args) => _db.authors.find((author) => author.id === args.id)
     },
    Game: {
        getReview: (parent) => _db.reviews.filter((review) => review.game_id === parent.id) // callback function
    },
    Author: {
        getReview(parent) {
            return _db.reviews.filter((author) => author.author_id === parent.id) // js normal function
        }
    },
    Review: {
        getAuthor: (parent) => _db.authors.find((author) => author.id === parent.author_id),
        getGames: (parent) => _db.games.find((game) => game.id === parent.game_id)
    },
    Mutation: {
        deleteGame(_, args){
            _db.games = _db.games.filter((game) => game.id !== args.id)
            return _db.games;
        },
        addGame(_, args){
            let game = {
                ...args.game,
                id: Math.floor(Math.random() * 10000).toString()
            }
            _db.games.push(game);
            return game
        },
        updateGame(_, args) {
            _db.games = _db.games.map((game) => {
                if(game.id === args.id){
                    return {...game, ...args.edits}
                };
             return game;
            });

            return _db.games.find((game) => game.id === args.id)
        }
    }
}