import { ProgressBar } from './models';

// consts
const initData: ProgressBar = {
    numOfBalls: 3,
    focusedBall: 1,
};

// types
const INCREASE_FOCUS_BALL_NUMBER = 'INCREASE_FOCUS_BALL_NUMBER';
const SET_FOCUS_BALL_NUMBER = 'SET_FOCUS_BALL_NUMBER';

// reducer
export default function progressBarReducer(state: ProgressBar = initData, action: any) {
    switch (action.type) {
        case INCREASE_FOCUS_BALL_NUMBER:
            const focusedBall = state.focusedBall + 1;
            return { ...state, focusedBall };
        case SET_FOCUS_BALL_NUMBER:
            return { ...state, focusedBall: action.number ? action.number : 1 };
        default:
            return state;
    }
}

// actions
export const increaseFocusBallNumber = () => async (dispatch: any) => {
    dispatch({ type: INCREASE_FOCUS_BALL_NUMBER });
};

export const setFocusBallNumber = (number: number) => async (dispatch: any) => {
    dispatch({ type: SET_FOCUS_BALL_NUMBER, number });
};
