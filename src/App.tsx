import React from 'react';
import './App.scss';
import { createUseStyles } from 'react-jss';
import colors from './styles/colors-palette';

import { Provider } from 'react-redux';
import generateStore from './redux/store';
import RouterComponent from './router';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const useStyles = createUseStyles({
    falseContainerApp: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    falseHeader: {
        width: '100%',
        height: 80,
        backgroundColor: colors.grey,
    },
    falseBody: {
        width: '100%',
        height: 'calc(100vh - 80px)',
        backgroundColor: colors.grey2,
    },
});

const App: React.FC = () => {
    const classes = useStyles();
    const store = generateStore();

    return (
        <Provider store={store}>
            <div className={classes.falseContainerApp}>
                <div className={classes.falseHeader}></div>
                <div className={classes.falseBody}></div>
            </div>
            <Router history={createBrowserHistory()}>
                <RouterComponent />
            </Router>
        </Provider>
    );
};

export default App;
