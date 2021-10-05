import { Accolade, PlayerAccolade } from "../Accolade";

export const PlayerAccolades: Array<PlayerAccolade> = [
  {
    id: "qb",
    title: "Top Quarter Back Performance",
    description: "",
    imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3917315.png&w=350&h=254",
    payout: 10,
    player: {
      firstName: "Kyler",
      lastName: "Murray",
      points: 42.1,
      team: "ARI"
    },
    team: {
      name: "Trash Pandas",
      user: {
        firstName: "Mitch ",
        lastName: "Magyar"
      }
    },
    week: 2
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
    imageUrl: "https://scontent-msp1-1.xx.fbcdn.net/v/t1.18169-9/c56.0.362.362a/263741_10150232853006749_7470933_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=da31f3&_nc_ohc=Ct1blpPv1dwAX8ZiEf3&_nc_ht=scontent-msp1-1.xx&oh=5109f6f8214fe1619e45d8583bb0a904&oe=616DB3D4",
    payout: 50,
    team: {
      name: "A.J. Dillmonger",
      user: {
        firstName: "Danny",
        lastName: "Rajchel"
      }
    },
    week: 2
  },
  {
    id: "team",
    title: "Top Scoring Team",
    description: "Matchup: AJ Dillmonger",
    imageUrl: "https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/c0.79.720.720a/s552x414/59921617_10217394593790551_4218093587629342720_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=da31f3&_nc_ohc=DWU5MkW_k_8AX_90lRt&_nc_ht=scontent-msp1-1.xx&oh=85fb4766a48ba2ff8452b2b54132ff47&oe=61709100",
    payout: 25,
    team: {
      name: "James the Conqueror: 195.65 fpts",
      user: {
        firstName: "Brett",
        lastName: "Farquhar"
      }
    },
    week: 1
  }
];