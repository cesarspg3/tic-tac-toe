import { BoardState, Players, Results } from '../models/index';

export interface App {
    loading: boolean;
    error: boolean;
}

export interface Game {
    matchId: string;
    boardState: BoardState[];
    result: Results;
    turn?: Players;
}

export interface State {
    app: App;
    game: Game;
}
