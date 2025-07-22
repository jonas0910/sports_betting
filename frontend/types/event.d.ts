interface Team {
    id: number;
    name: string;
    logo: string;
}


export interface Event {
    id: number;
    date: string;
    result: string | null;
    status: string;
    place: string;
    team1: Team;
    team2: Team;
}