import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { State } from '../../redux/models';
import classnames from 'classnames';
import progressBarCss from './progressBarCss';

const useStyles = createUseStyles(progressBarCss);

const ProgressBar: React.FC = () => {
    const classes = useStyles();

    const progessBalls: JSX.Element[] = [];
    const { focusedBall, numOfBalls } = useSelector((state: State) => state.progressBar);

    const numOfSteps = numOfBalls;

    for (let i = 1; i <= numOfSteps; i++) {
        const getBackground = () => {
            if (i < focusedBall) {
                return classes.anteriorStep;
            } else if (i === focusedBall) {
                return classes.focusedBall;
            }
        };
        progessBalls.push(
            <div key={`${i}ball`} className={classnames(classes.ball, getBackground())}>
                {i}
            </div>,
        );
        if (i === focusedBall) progessBalls.push(<div key={`${i}triangle`} className={classes.triangle}></div>);
        if (i !== numOfSteps)
            progessBalls.push(<div key={`${i}line`} className={classnames(classes.line, i < focusedBall && classes.anteriorStep)} />);
    }

    return <div className={classes.container}>{progessBalls}</div>;
};

export default ProgressBar;
