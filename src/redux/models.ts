import { Breakpoints } from '../models/index';

export interface App {
    loading: boolean;
    error: boolean;
    device: Breakpoints;
}

export interface ProgressBar {
    numOfBalls: number;
    focusedBall: number;
}

export interface FormData {
    hint: string;
    password: string;
    repeatPassword: string;
    correctData: boolean;
}

export interface State {
    app: App;
    progressBar: ProgressBar;
    formData: FormData;
}
