import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../redux/models';
import okImg from '../../assets/img/ok.png';
import errorImg from '../../assets/img/error.png';
import { Redirect, useHistory } from 'react-router';
import { setFormData } from '../../redux/formDataDucks';
import Locales from '../../locale';
import feedbackCss from './feedbackCss';

const useStyles = createUseStyles(feedbackCss);

const Feedback: React.FC = () => {
    const { error, device } = useSelector((state: State) => state.app);
    const classes = useStyles({ device });
    const history = useHistory();
    const dispacth = useDispatch();

    useEffect(() => {
        return () => {
            dispacth(setFormData({ password: '', repeatPassword: '', hint: '', correctData: false }));
        };
    }, [dispacth]);

    const { correctData } = useSelector((state: State) => state.formData);

    const handleClick = () => {
        history.push('/step1');
    };
    return !correctData ? (
        <Redirect to="/step1" />
    ) : (
        <>
            <div className={classes.info}>
                <img src={error ? errorImg : okImg} alt="feedback" className={classes.img} />
                <div>
                    <h2>{error ? Locales.feedback.errorTitle : Locales.feedback.successTitle}</h2>
                    <span>{error ? Locales.feedback.errorMsg : Locales.feedback.successMsg}</span>
                </div>
            </div>
            <div className={classes.btnCont}>
                <span onClick={handleClick}>{error ? Locales.feedback.errorBtn : Locales.feedback.successBtn}</span>
            </div>
        </>
    );
};

export default Feedback;
