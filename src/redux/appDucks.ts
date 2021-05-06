import { App } from './models';

// consts
const initData: App = {
    loading: false,
    error: false,
};

// types
const START_LOADING = 'START_LOADING';
const LOADED = 'LOADED';
const ERROR = 'ERROR';

// reducer
export default function appReducer(state: App = initData, action: any) {
    switch (action.type) {
        case START_LOADING:
            return { ...state, loading: true, error: false };
        case LOADED:
            return { ...state, loading: false };
        case ERROR:
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
}

// actions
export const startLoading = () => async (dispatch: any) => {
    dispatch({ type: START_LOADING });
};

export const loaded = () => async (dispatch: any) => {
    dispatch({ type: LOADED });
};

export const error = () => async (dispatch: any) => {
    dispatch({ type: ERROR });
};
