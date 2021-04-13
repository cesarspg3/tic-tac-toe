import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Step1 from '../views/Step1';
import Step2 from '../views/step2';
import Step3 from '../views/Feedback';
import '../App.scss';
import { createUseStyles } from 'react-jss';
import colors from '../styles/colors-palette';
import { useDispatch, useSelector } from 'react-redux';
import { Breakpoints } from '../models/index';
import { setDevice } from '../redux/appDucks';
import { State } from '../redux/models';

const { MOBILE, DESKTOP } = Breakpoints;

const useStyles = createUseStyles(() => ({
    appContainer: ({ device }: { device: Breakpoints }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > div': {
            position: 'absolute',
            top: 0,
            width: device === DESKTOP ? 900 : 375,
            margin: 16,
            boxShadow: `0 1px 15px 1px ${colors.blackTransparent}`,
        },
    }),
}));

const getScreenBreakpoint = (screenWidth: number): Breakpoints => {
    let breakpoint: Breakpoints;

    if (screenWidth <= 375) {
        breakpoint = MOBILE;
    } else if (screenWidth < 900) {
        breakpoint = MOBILE;
    } else {
        breakpoint = DESKTOP;
    }

    return breakpoint;
};

const RouterComponent: React.FC = () => {
    const { device } = useSelector((state: State) => state.app);
    const classes = useStyles({ device });
    const dispacth = useDispatch();

    useEffect(() => {
        window.addEventListener('resize', () => {
            dispacth(setDevice(getScreenBreakpoint(window.innerWidth)));
        });
        dispacth(setDevice(getScreenBreakpoint(window.innerWidth)));
    }, [dispacth]);

    return (
        <div className={classes.appContainer}>
            <div>
                <Route exact path="/" component={Step1} />
                <Route path="/step1" component={Step1} />
                <Route path="/step2" component={Step2} />
                <Route path="/Feedback" component={Step3} />
            </div>
        </div>
    );
};

export default RouterComponent;
