import { Accolade, PlayerAccolade } from "../Accolade";

export const PlayerAccolades: Array<PlayerAccolade> = [
  {
    id: "qb",
    title: "Top Quarter Back Performance",
    description: "",
    payout: 10,
    player: {
      firstName: "Unknown",
      lastName: "Subject",
      points: 0,
      team: "UK"
    },
    team: {
      name: "Unknown",
      user: {
        firstName: "Unknown",
        lastName: "Subject"
      }
    },
    week: 1
  }, {
    id: "rb",
    title: "Top Running Back Performance",
    description: "",
    payout: 10,
    player: {
      firstName: "Unknown",
      lastName: "Subject",
      points: 0,
      team: "UK"
    },
    team: {
      name: "Unknown",
      user: {
        firstName: "Unknown",
        lastName: "Subject"
      }
    },
    week: 1
  }, {
    id: "wrte",
    title: "Top Receiver (WR or TE) Performance",
    description: "",
    payout: 10,
    player: {
      firstName: "Unknown",
      lastName: "Subject",
      points: 0,
      team: "UK"
    },
    team: {
      name: "Unknown",
      user: {
        firstName: "Unknown",
        lastName: "Subject"
      }
    },
    week: 1
  }
];

export const TeamAccolades: Array<Accolade> = [
  {
    id: "oddball",
    title: "Oddball",
    description: "",
    payout: 50,
    team: {
      name: "Mooney Knight",
      user: {
        firstName: "Allison",
        lastName: "Kosinski"
      }
    },
    week: 1
  },
  {
    id: "team",
    title: "Top Scoring Team",
    description: "",
    payout: 25,
    team: {
      name: "Unknown",
      user: {
        firstName: "Unknown",
        lastName: "Subject"
      }
    },
    week: 1
  }
];