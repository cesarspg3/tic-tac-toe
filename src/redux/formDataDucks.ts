import { FormData } from './models';

// consts
const initData: FormData = {
    hint: '',
    password: '',
    repeatPassword: '',
    correctData: false,
};

// types
const SET_FROM_DATA = 'SET_FROM_DATA';

// reducer
export default function progressBarReducer(state: FormData = initData, action: any) {
    switch (action.type) {
        case SET_FROM_DATA:
            return action.formData;
        default:
            return state;
    }
}

// actions
export const setFormData = (formData: FormData) => async (dispatch: any) => {
    dispatch({ type: SET_FROM_DATA, formData });
};
