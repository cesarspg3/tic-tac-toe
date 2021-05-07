import React from 'react';
import { createUseStyles } from 'react-jss';

import gameCss from './headerCss';

import { Results } from '../../../models';
import { Players } from '../../../models/index';

const useStyles = createUseStyles(gameCss);

type HeaderProps = {
    turn: Players;
    result: Results;
};

const getResultTxt = (result: Results): string => {
    let resultText = '';

    switch (result) {
        case Results.LOSE:
            resultText = '¡HAS PERDIDO!';
            break;
        case Results.WIN:
            resultText = '¡HAS GANADO!';
            break;
        case Results.TIE:
            resultText = '¡HAS EMPATADO!';
            break;
        default:
            resultText = '¡VUELVE A JUGAR!';
    }

    return resultText;
};

const Header: React.FC<HeaderProps> = React.memo(({ result, turn }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {result === Results.CONTINUE ? (
                <div id="turn">{turn === Players.MACHINE ? 'Espera a tu turno...' : 'Es tu turno'}</div>
            ) : (
                <div id="result">{getResultTxt(result)}</div>
            )}
        </div>
    );
});

export default Header;
