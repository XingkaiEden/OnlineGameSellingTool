export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
];

export function getGenres() {
  return genres.filter((g) => g);
}

const accounts = [
  {
    gameName: "公主链接",
    characters: [
      {
        name: "公主链接",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 0,
      },
      {
        name: "公主链接2",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 0,
      },
      {
        name: "公主链接3ß",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 0,
      },
    ],

    server: "苹果",
    _id: 124124,
  },
  {
    gameName: "公主链接",
    characters: [
      {
        name: "公主链接",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 0,
      },
      {
        name: "公主链接2",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 0,
      },
      {
        name: "公主链接3ß",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 0,
      },
    ],

    server: "苹果",
    _id: 444444,
  },
  {
    gameName: "公主链接",
    characters: [
      {
        name: "公主链接",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 0,
      },
      {
        name: "公主链接2",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 0,
      },
      {
        name: "公主链接3ß",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 0,
      },
    ],

    server: "苹果",
    _id: 55555,
  },
  {
    gameName: "山海镜花",
    characters: [
      {
        name: "公主链接",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 0,
      },
      {
        name: "公主链接2",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 0,
      },
      {
        name: "公主链接3ß",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 0,
      },
    ],

    server: "苹果",
    _id: 55555,
  },
  {
    gameName: "山海镜花",
    characters: [
      {
        name: "公主链接",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 0,
      },
      {
        name: "公主链接2",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 0,
      },
      {
        name: "公主链接3ß",
        picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        lvl: 0,
      },
    ],

    server: "苹果",
    _id: 55555,
  },
];

export function getAccounts(gameName, server, characters) {
  let selectedAccounts = accounts.filter(isInclude);

  function isInclude(a) {
    return (
      a.gameName === gameName &&
      a.server === server &&
      characters.some((character) =>
        a.characters.some((c) => c.name === character.name)
      )
    );
  }

  return selectedAccounts;
}
