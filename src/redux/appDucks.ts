import { App } from './models';
import { Breakpoints } from '../models/index';

// consts
const initData: App = {
    loading: false,
    error: false,
    device: Breakpoints.DESKTOP,
};

// types
const START_LOADING = 'START_LOADING';
const LOADED = 'LOADED';
const ERROR = 'ERROR';
const SET_DEVICE = 'SET_DEVICE';

// reducer
export default function appReducer(state: App = initData, action: any) {
    switch (action.type) {
        case START_LOADING:
            return { ...state, loading: true, error: false };
        case LOADED:
            return { ...state, loading: false };
        case ERROR:
            return { ...state, loading: false, error: true };
        case SET_DEVICE:
            return { ...state, device: action.device };
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

export const setDevice = (device: Breakpoints) => async (dispatch: any) => {
    dispatch({ type: SET_DEVICE, device });
};
