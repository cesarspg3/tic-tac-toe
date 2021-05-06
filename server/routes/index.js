const express = require('express');
const app = express();

const {
    boardState: { EMPTY: EMPTY_BOX, MACHINE: MACHINE_BOX, USER: USER_BOX },
    players: { MACHINE: MACHINE, USER },
    result: { TIE, CONTINUE },
} = require('../constants');
const utils = require('../utils');

const games = [];

app.post('/initGame', (req, res) => {
    const boardState = [EMPTY_BOX, EMPTY_BOX, EMPTY_BOX, EMPTY_BOX, EMPTY_BOX, EMPTY_BOX, EMPTY_BOX, EMPTY_BOX, EMPTY_BOX];
    const turn = utils.randomTurn() === 0 ? MACHINE : USER;
    const matchId = utils.randomString(32);

    if (turn === MACHINE) boardState[utils.randomPosition()] = MACHINE_BOX;

    games.push({
        matchId,
        boardState,
    });

    res.send({
        matchId,
        boardState,
        result: CONTINUE,
    });
});

app.post('/move', (req, res) => {
    const matchId = req.body.matchId;
    const nextMove = req.body.nextMove;
    const idGame = games.map((game) => game.matchId).indexOf(matchId);

    if (idGame !== -1) {
        games[idGame].boardState = games[idGame].boardState.map((box, i) => (i === nextMove && box === EMPTY_BOX ? (box = USER_BOX) : box));
        if (games[idGame].boardState.filter((box) => box === EMPTY_BOX).length > 0) {
            let result = utils.checkResults(games[idGame].boardState);
            games[idGame].boardState[utils.getBestMovement(games[idGame].boardState, result)] = MACHINE_BOX;
            result =
                games[idGame].boardState.filter((box) => box === EMPTY_BOX).length === 0
                    ? TIE
                    : utils.checkResults(games[idGame].boardState);

            res.send({
                matchId,
                boardState: games[idGame].boardState,
                result,
            });
        } else {
            const result = utils.checkResults(games[idGame].boardState);
            res.send({
                matchId,
                boardState: games[idGame].boardState,
                result: result === CONTINUE ? TIE : result,
            });
        }
    } else {
        res.send({
            error: true,
            message: 'game not found',
        });
    }
});

module.exports = app;
