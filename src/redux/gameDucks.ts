import { Game } from './models';
import { BoardState, Players, Results } from '../models/index';

// consts
const initData: Game = {
    matchId: '',
    boardState: [
        BoardState.EMPTY,
        BoardState.EMPTY,
        BoardState.EMPTY,
        BoardState.EMPTY,
        BoardState.EMPTY,
        BoardState.EMPTY,
        BoardState.EMPTY,
        BoardState.EMPTY,
        BoardState.EMPTY,
    ],
    turn: Players.USER,
    result: Results.CONTINUE,
};

// types
enum GameTypes {
    INIT_GAME = 'INIT_GAME',
    SEND_TURN = 'SEND_TURN',
    RECEIVE_MACHINE_TURN = 'RECEIVE_MACHINE_TURN',
}

// reducer
export default function appReducer(state: Game = initData, action: { game: Game; type: GameTypes }) {
    switch (action.type) {
        case GameTypes.INIT_GAME:
            return { ...state, matchId: action.game.matchId, boardState: action.game.boardState, result: action.game.result };
        case GameTypes.SEND_TURN:
            return {
                ...state,
                boardState: action.game.matchId === state.matchId ? action.game.boardState : state.boardState,
                turn: Players.MACHINE,
                result: action.game.result,
            };
        case GameTypes.RECEIVE_MACHINE_TURN:
            return {
                ...state,
                boardState: action.game.matchId === state.matchId ? action.game.boardState : state.boardState,
                turn: Players.USER,
                result: action.game.result,
            };
        default:
            return state;
    }
}

export const initGame = (game: Game) => async (dispatch: any) => {
    dispatch({ type: GameTypes.INIT_GAME, game });
};

export const sendTurn = (game: Game) => async (dispatch: any) => {
    dispatch({ type: GameTypes.SEND_TURN, game });
};

export const receiveMachineTurn = (game: Game) => async (dispatch: any) => {
    dispatch({ type: GameTypes.RECEIVE_MACHINE_TURN, game });
};
