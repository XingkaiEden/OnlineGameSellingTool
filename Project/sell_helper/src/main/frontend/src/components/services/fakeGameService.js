const games = [
  {
    gameName: "公主链接",
    gamePicURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
    servers: ["苹果", "安卓"],
    characters: [
      {
        name: "公主链接",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 3,
      },
      {
        name: "公主链接2",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 2,
      },
      {
        name: "公主链接3ß",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 0,
      },
    ],
  },
  {
    gameName: "山海镜花",
    gamePicURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
    servers: ["苹果", "安卓"],
    characters: [
      {
        name: "公主链接",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 3,
      },
      {
        name: "公主链接2",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 2,
      },
      {
        name: "公主链接3ß",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 0,
      },
    ],
  },
];

export function getGames() {
  return games;
}

export function getGame(gameName) {
  return games.find((game) => game.gameName === gameName);
}

// export function saveGame(game) {
//   let gameInDb = games.find(g => g.gameName === game.gameName) || {};
//   gameInDb.gameName = game.gameName;
//   gameInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
//   gameInDb.numberInStock = movie.numberInStock;
//   gameInDb.dailyRentalRate = movie.dailyRentalRate;

//   if (!movieInDb._id) {
//     movieInDb._id = Date.now().toString();
//     movies.push(movieInDb);
//   }

//   return movieInDb;
// }

// export function deleteMovie(id) {
//   let movieInDb = movies.find(m => m._id === id);
//   movies.splice(movies.indexOf(movieInDb), 1);
//   return movieInDb;
// }
