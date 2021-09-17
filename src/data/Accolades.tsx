import { Accolade, PlayerAccolade } from "../Accolade";

export const PlayerAccolades: Array<PlayerAccolade> = [
  {
    id: "qb",
    title: "Top Quarter Back Performance",
    description: "",
    imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3139477.png",
    payout: 10,
    player: {
      firstName: "Patrick",
      lastName: "Mahomes II",
      points: 38.65,
      team: "KC"
    },
    team: {
      name: "Mooney Knight",
      user: {
        firstName: "Jordan",
        lastName: "Backes"
      }
    },
    week: 1
  }, {
    id: "rb",
    title: "Top Running Back Performance",
    description: "",
    imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3117251.png",
    payout: 10,
    player: {
      firstName: "Christian",
      lastName: "McCaffrey",
      points: 28.7,
      team: "CAR"
    },
    team: {
      name: "James the Conqueror",
      user: {
        firstName: "Brett",
        lastName: "Farquhar"
      }
    },
    week: 1
  }, {
    id: "wrte",
    title: "Top Receiver (WR or TE) Performance",
    description: "",
    imageUrl: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2976499.png",
    payout: 10,
    player: {
      firstName: "Amari",
      lastName: "Cooper",
      points: 40.9,
      team: "DAL"
    },
    team: {
      name: "T'ChaLamar",
      user: {
        firstName: "Tyler",
        lastName: "Magyar"
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
    imageUrl: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/145092012_3869476673147156_2006371949438883827_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xfI0WfejNpEAX_PbrVC&_nc_oc=AQkBzfEilIlX6eFeZR39lxrsqISCwHIE0avfknZYJf_5NFEOW4xzni23sgdAuUTwoMsmmSXr35dMpAgdFrJch-tI&_nc_ht=scontent-ort2-1.xx&oh=e90a20a7b9de3ec3646fad91d125fbfc&oe=6168F6F5",
    payout: 50,
    team: {
      name: "James the Conqueror",
      user: {
        firstName: "Brett",
        lastName: "Farquhar"
      }
    },
    week: 1
  },
  {
    id: "team",
    title: "Top Scoring Team",
    description: "",
    imageUrl: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/145092012_3869476673147156_2006371949438883827_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xfI0WfejNpEAX_PbrVC&_nc_oc=AQkBzfEilIlX6eFeZR39lxrsqISCwHIE0avfknZYJf_5NFEOW4xzni23sgdAuUTwoMsmmSXr35dMpAgdFrJch-tI&_nc_ht=scontent-ort2-1.xx&oh=e90a20a7b9de3ec3646fad91d125fbfc&oe=6168F6F5",
    payout: 25,
    team: {
      name: "James the Conqueror",
      user: {
        firstName: "Brett",
        lastName: "Farquhar"
      }
    },
    week: 1
  }
];