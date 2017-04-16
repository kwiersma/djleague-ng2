export class FantasyTeam {

    id: number;
    name: string;
    owner: string;
    draftorder: number;

    constructor() {

    }
}

export class Player {

    id: number;
    firstname: string;
    lastname: string;
    pick: number;
    points: number;
    position: string;
    rank: number;
    round: number;
    team: string;
    url: string;
    fantasyteam: string;
    owner: string;
    fantasyteam_id: string;
    picktime: string;
    avgpick: number;
    byeweek: number;

    constructor () {

    }

}
