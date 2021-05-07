import React from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import axios from 'axios';

import gameCss from './boardCss';

import { BoardState, Results, UrlApi } from '../../../models';
import { startLoading, loaded, error } from '../../../redux/appDucks';
import { receiveMachineTurn, sendTurn } from '../../../redux/gameDucks';

const useStyles = createUseStyles(gameCss);

type BoardProps = {
    boardState: BoardState[];
    matchId: string;
    result: Results;
};

const Board: React.FC<BoardProps> = React.memo(({ boardState, matchId, result }) => {
    const classes = useStyles();
    const dispacth = useDispatch();

    const sendMovement = (id: number): void => {
        dispacth(startLoading());
        dispacth(
            sendTurn({ boardState: boardState.map((box, i) => (i === id ? BoardState.USER : box)), matchId, result: Results.CONTINUE }),
        );
        axios
            .post(`${UrlApi}/move`, {
                matchId,
                nextMove: id,
            })
            .then((response) => {
                dispacth(receiveMachineTurn(response.data));
                dispacth(loaded());
            })
            .catch((e) => {
                console.log(e);
                dispacth(error());
            });
    };

    return (
        <div className={classes.container}>
            {boardState.map((box, i) => (
                <div
                    id={`box${i}`}
                    key={i}
                    className={classnames(classes.box, box === BoardState.MACHINE ? classes.machineBox : classes.userBox)}
                    onClick={() => {
                        if (box === BoardState.EMPTY && result === Results.CONTINUE) sendMovement(i);
                    }}
                >
                    {box === BoardState.EMPTY ? '' : box}
                </div>
            ))}
        </div>
    );
});

export default Board;
