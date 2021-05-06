import React from 'react';
import { createUseStyles } from 'react-jss';

import Game from './views/game/index';

import { Provider } from 'react-redux';
import generateStore from './redux/store';
import colors from './styles/colors-palette';

const useStyles = createUseStyles({
    app: {
        width: '100%',
        height: '100vh',
        backgroundColor: colors.background,
    },
});

const App: React.FC = () => {
    const classes = useStyles();
    const store = generateStore();

    return (
        <Provider store={store}>
            <div className={classes.app}>
                <Game />
            </div>
        </Provider>
    );
};

export default App;
