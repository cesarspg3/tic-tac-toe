import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import InfoBox from '../../components/InfoBox/index';
import headImg from '../../assets/img/head.png';
import safeBoxImg from '../../assets/img/safeBox.png';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../redux/models';
import { setFocusBallNumber } from '../../redux/progressBarDucks';
import Locales from '../../locale';
import step1Css from './step1Css';

const useStyles = createUseStyles(step1Css);

const Step1: React.FC = () => {
    const { focusedBall } = useSelector((state: State) => state.progressBar);
    const { device } = useSelector((state: State) => state.app);
    const classes = useStyles({ device });
    const dispacth = useDispatch();
    const [checkActive, setCheckActive] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (focusedBall !== 1) dispacth(setFocusBallNumber(1));
    });

    const handleNext = () => {
        if (!checkActive) {
            setError(Locales.step1.errorCheck);
        }
    };

    const handleCheck = () => {
        if (!checkActive) {
            setError('');
        }
        setCheckActive(!checkActive);
    };

    return (
        <InfoBox navigate={checkActive} handleNext={handleNext}>
            <h1 className={classes.title}>{Locales.step1.title}</h1>
            <div className={classes.lineTitle}></div>

            <div className={classes.imgAndDescCont}>
                <div>
                    <img src={headImg} alt={'headImg'} />
                    <div>{Locales.step1.descImg1}</div>
                </div>
                <div>
                    <img src={safeBoxImg} alt={'safeBoxImg'} />
                    <div>{Locales.step1.descImg2}</div>
                </div>
            </div>

            <h3 className={classes.titles}>{Locales.step1.title2}</h3>
            <div>{Locales.step1.desc1}</div>

            <h3 className={classes.titles}>{Locales.step1.title3}</h3>
            <div>{Locales.step1.desc2}</div>

            <div className={classes.check} onClick={handleCheck}>
                <input type="checkbox" checked={checkActive} onChange={handleCheck} />
                {Locales.step1.check}
            </div>
            <div className={classes.error}>{error}</div>
        </InfoBox>
    );
};

export default Step1;
