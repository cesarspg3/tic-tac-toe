const {
    boardState: { MACHINE: MACHINE_BOX, USER: USER_BOX, EMPTY: EMPTY_BOX },
    result: { WIN, LOSE, CONTINUE },
} = require('../constants');

const utils = {
    randomString: function (length) {
        const mask = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
        return result;
    },
    randomTurn: function () {
        return Math.floor(Math.random() * (2 - 0)) + 0;
    },
    randomPosition: function () {
        return Math.floor(Math.random() * (9 - 0)) + 0;
    },
    checkResults: function (boardState) {
        const machinePositions = [];
        const playerPositions = [];

        boardState.forEach((box, i) => {
            if (box === MACHINE_BOX) {
                machinePositions.push(i);
            } else if (box === USER_BOX) {
                playerPositions.push(i);
            }
        });

        const winners = {
            1: [0, 1, 2],
            2: [3, 4, 5],
            3: [6, 7, 8],
            4: [0, 4, 8],
            5: [2, 4, 6],
            6: [0, 3, 6],
            7: [1, 4, 7],
            8: [2, 5, 8],
        };

        let machineWins = false;
        let userWins = false;

        if (machinePositions.length >= 2 && playerPositions.length >= 2) {
            for (let i = 1; i <= Object.keys(winners).length; i++) {
                let isTrue = 0;
                machinePositions.forEach((position) => {
                    if (winners[i].includes(position)) isTrue++;
                });
                if (isTrue === 3) machineWins = true;

                isTrue = 0;
                playerPositions.forEach((position) => {
                    if (winners[i].includes(position)) isTrue++;
                });
                if (isTrue === 3) userWins = true;
            }
        }

        let result = CONTINUE;
        if (machineWins) {
            result = LOSE;
        } else if (userWins) {
            result = WIN;
        }

        return result;
    },
    getBestMovement: function (boardState, result) {
        const machinePositions = [];
        const playerPositions = [];

        boardState.forEach((box, i) => {
            if (box === MACHINE_BOX) {
                machinePositions.push(i);
            } else if (box === USER_BOX) {
                playerPositions.push(i);
            }
        });

        const winners = {
            1: [0, 1, 2],
            2: [3, 4, 5],
            3: [6, 7, 8],
            4: [0, 4, 8],
            5: [2, 4, 6],
            6: [0, 3, 6],
            7: [1, 4, 7],
            8: [2, 5, 8],
        };

        let positionToMove;
        if (machinePositions.length >= 2 || playerPositions.length >= 2) {
            for (let i = 1; i <= Object.keys(winners).length; i++) {
                let tiePosition;
                let winPosition;
                let itHas = 0;
                let itHas2 = 0;
                let machineWins = false;
                winners[i].forEach((winPos) => {
                    const samePosition = playerPositions.find((pos) => pos === winPos);
                    if (samePosition !== undefined) {
                        itHas++;
                    } else if (machinePositions.find((pos) => pos === winPos) === undefined) {
                        tiePosition = winPos;
                    }

                    if (itHas === 2 && tiePosition !== undefined && !machineWins) {
                        positionToMove = tiePosition;
                    }

                    const samePosition2 = machinePositions.find((pos) => pos === winPos);
                    if (samePosition2 !== undefined) {
                        itHas2++;
                    } else if (
                        playerPositions.find((pos) => pos === winPos) === undefined &&
                        playerPositions.find((pos) => pos === winPos) === undefined
                    ) {
                        winPosition = winPos;
                    }

                    if (itHas2 === 2 && winPosition !== undefined) {
                        positionToMove = winPosition;
                        machineWins = true;
                    }
                });
            }
        }
        if (!positionToMove) {
            let flagReadyToMove = true;
            while (flagReadyToMove && result === CONTINUE) {
                const randomNum = utils.randomPosition();
                if (boardState[randomNum] === EMPTY_BOX) {
                    positionToMove = randomNum;
                    flagReadyToMove = false;
                }
            }
        }

        return positionToMove;
    },
};

module.exports = utils;
