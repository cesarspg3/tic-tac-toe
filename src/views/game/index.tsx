import React, { useEffect, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import gameCss from './gameCss';

import { State } from '../../redux/models';
import { Players, UrlApi } from '../../models';
import { startLoading, loaded, error } from '../../redux/appDucks';
import { initGame } from '../../redux/gameDucks';

import Loading from '../../components/Loading';
import Board from './Board';
import Header from './Header/index';

const useStyles = createUseStyles(gameCss);

const Game: React.FC = React.memo(() => {
    const { loading } = useSelector((state: State) => state.app);
    const { matchId, turn, result, boardState } = useSelector((state: State) => state.game);
    const classes = useStyles();
    const dispacth = useDispatch();

    const initGameFn = useCallback(() => {
        dispacth(startLoading());
        setTimeout(() => {
            axios
                .post(`${UrlApi}/initGame`)
                .then((response) => {
                    dispacth(loaded());
                    dispacth(initGame(response.data));
                })
                .catch((e) => {
                    console.log(e);
                    dispacth(error());
                });
        }, 500);
    }, [dispacth]);

    useEffect(() => {
        if (matchId === '') {
            initGameFn();
        }
    }, [matchId, initGameFn]);

    return (
        <div className={classes.container}>
            {loading && <Loading />}
            <Header result={result} turn={turn || Players.USER} />
            <Board boardState={boardState} matchId={matchId} result={result} />
            <div onClick={initGameFn} className={classes.restartBtm}>
                Vuleve a Jugar
            </div>
        </div>
    );
});

export default Game;
