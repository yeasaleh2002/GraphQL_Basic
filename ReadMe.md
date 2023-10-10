# get all query
query GamesQuery{
  getGames {
    id
    title
    platform
  }
}

# get Single query
1.  getSingleReview
query ReviewQuery($id: ID!){
  getSingleReview(id: $id){
    rating,
    content
  }
}

2. getSingleGame
query SingleGameQuery($id: ID!){
  getSingleGame(id: $id) {
    id
    title
    platform
  }
}

3. getSingleAuthor
query SingleAuthorQuery($getSingleAuthorId: ID!){
  getSingleAuthor(id: $getSingleAuthorId) {
    id
    name
    verified
  }
}

4. Related Api
query ReviewQuery($id: ID!){
  getSingleReview(id: $id){
    id,
    rating,
    content,
    getAuthor {
      id
      name
      verified
    }
    getGames {
      id
      title
      platform
    }
  }
}

5. 
query ReviewQuery($id: ID!){
  getSingleAuthor(id: $id) {
    id
    name
    verified
    getReview {
      id
      content
      rating
      getGames {
        id
        title
        platform
      }
    }
  }
}

# Mutation

# Add Mutation
mutation AddMutation($game: AddGameInput!){
  addGame(game: $game){
    id,
    title,
    platform
  }
}

# Delete Mutation
mutation DeleteMutation($deleteGameId: ID!){
  deleteGame(id: $deleteGameId) {
    id
    title
    platform
  }
}


# update Mutation
mutation UpdateMutation($edits: EditGameInput,  $id: ID!){
  updateGame(id: $id, edits: $edits) {
    title
    platform
  }
}

