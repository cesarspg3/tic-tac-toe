export enum BoardState {
    USER = 'x',
    MACHINE = 'o',
    EMPTY = '-',
}

export enum Players {
    USER = 'User',
    MACHINE = 'Machine',
    NONE = 'None',
}

export enum Results {
    WIN = 'win',
    LOSE = 'lose',
    TIE = 'tie',
    CONTINUE = 'continue',
}

export const UrlApi = 'http://localhost:3001';
