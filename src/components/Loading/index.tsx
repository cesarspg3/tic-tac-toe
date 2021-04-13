import React from 'react';
import { createUseStyles } from 'react-jss';
import colors from '../../styles/colors-palette';
import spinner from '../../assets/img/spinner.gif';

const useStyles = createUseStyles({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lightBlackTransparent,
    },
});

const Loading: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img src={spinner} alt="spinner" />
        </div>
    );
};

export default Loading;
