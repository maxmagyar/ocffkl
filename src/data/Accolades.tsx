import { Accolade, PlayerAccolade } from "../Accolade";

export const PlayerAccolades: Array<PlayerAccolade> = [
  {
    id: "qb",
    title: "Top Quarter Back Performance",
    description: "",
    imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4038941.png",
    payout: 10,
    player: {
      firstName: "Justin",
      lastName: "Herbert",
      points: 49.80,
      team: "LAC"
    },
    team: {
      name: "James the Conqueror",
      user: {
        firstName: "Brett",
        lastName: "Farquhar"
      }
    },
    week: 5
  }, {
    id: "rb",
    title: "Top Running Back Performance",
    description: "",
    imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3043078.png&w=350&h=254",
    payout: 10,
    player: {
      firstName: "Derrick",
      lastName: "Henry",
      points: 50.7,
      team: "TEN"
    },
    team: {
      name: "J.A.R.V.I.S. Landry",
      user: {
        firstName: "Max",
        lastName: "Magyar"
      }
    },
    week: 2
  }, {
    id: "wrte",
    title: "Top Receiver (WR or TE) Performance",
    description: "",
    imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3116406.png&w=350&h=254",
    payout: 10,
    player: {
      firstName: "Tyreek",
      lastName: "Hill",
      points: 50.60,
      team: "KCC"
    },
    team: {
      name: "T'ChaLamar",
      user: {
        firstName: "Tyler",
        lastName: "Magyar"
      }
    },
    week: 4
  }
];

export const TeamAccolades: Array<Accolade> = [
  {
    id: "oddball",
    title: "Oddball",
    description: "",
    imageUrl: "https://scontent-msp1-1.xx.fbcdn.net/v/t1.18169-9/23172928_10209470817758874_6229097329209118275_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=LNphXQ9KdxgAX8q6EsJ&_nc_ht=scontent-msp1-1.xx&oh=46185a69acc81c5d28b147ee4a3e81d9&oe=618B810E",
    payout: 50,
    team: {
      name: "Agent Carter",
      user: {
        firstName: "Casey",
        lastName: "Magyar"
      }
    },
    week: 5
  },
  {
    id: "team",
    title: "Top Scoring Team",
    description: "Matchup: AJ Dillmonger",
    imageUrl: "https://scontent-msp1-1.xx.fbcdn.net/v/t1.18169-9/17991972_10208037811534614_5746311345188518253_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=o1ssIDwnOB8AX_b6quW&_nc_ht=scontent-msp1-1.xx&oh=a6a0b044795219c5fc83c0d4667c2592&oe=618B9171",
    payout: 25,
    team: {
      name: "The Infinity Jones: 214.10 fpts",
      user: {
        firstName: "Paul",
        lastName: "Magyar"
      }
    },
    week: 5
  }
];