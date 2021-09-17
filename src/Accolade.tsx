interface Player {
  firstName: string;
  lastName: string;
  points: number;
  team: string; // NFL Team (Ex: GB)
}

interface Team {
  name: string;
  points?: number;
  user: User;
}

interface User {
  firstName: string;
  lastName: string;
}

export interface Accolade {
  id: string;
  description: string;
  imageUrl: string;
  payout: number;
  team: Team;
  title: string;
  week: number;
}

export interface PlayerAccolade extends Accolade {
  player: Player;
}