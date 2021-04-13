import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import InfoBox from '../../components/InfoBox/index';
import PasswordInput from '../../components/PasswordInput';
import Input from '../../components/Input';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../redux/models';
import { setFocusBallNumber } from '../../redux/progressBarDucks';
import { setFormData } from '../../redux/formDataDucks';
import Locales from '../../locale';
import { regexPassword } from '../../regExp';
import step2Css from './step2Css';

const useStyles = createUseStyles(step2Css);

const Step2: React.FC = () => {
    const { device } = useSelector((state: State) => state.app);
    const classes = useStyles({ device });
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [hint, setHint] = useState('');
    const [error, setError] = useState('');

    const { focusedBall } = useSelector((state: State) => state.progressBar);

    const dispacth = useDispatch();

    useEffect(() => {
        if (focusedBall !== 2) dispacth(setFocusBallNumber(2));
    });

    const navigate = password !== '' && repeatPassword !== '' && error === '';

    const handleNext = () => {
        let error = '';

        if (!regexPassword.test(password)) {
            error = Locales.step2.errorPasswordType;
        } else if (password !== repeatPassword) {
            error = Locales.step2.errorPasswordsNotSame;
        }

        if (error !== '') setError(error);
        dispacth(setFormData({ password, repeatPassword, hint, correctData: navigate }));
    };

    const passwordActions = (value: string) => {
        setPassword(value);

        if (!regexPassword.test(value)) {
            setError(Locales.step2.errorPasswordType);
        } else {
            if (error !== '') setError('');
        }
    };
    const repeatPasswordActions = (value: string) => {
        setRepeatPassword(value);
        if (value !== password) {
            setError(Locales.step2.errorPasswordsNotSame);
        } else {
            if (error !== '') setError('');
        }
    };

    return (
        <InfoBox navigate={navigate} handleNext={handleNext}>
            <h1 className={classes.title}>{Locales.step2.title}</h1>
            <div className={classes.lineTitle}></div>

            <div className={classes.info}>
                {Locales.step2.desc1} <br />
                {Locales.step2.desc2}
            </div>

            <div className={classes.passWordsCont}>
                <PasswordInput title={Locales.step2.pass1Title} placeHolder={Locales.step2.pass1Placeholder} onChange={passwordActions} />
                <PasswordInput
                    title={Locales.step2.pass2Title}
                    placeHolder={Locales.step2.pass2Placeholder}
                    onChange={repeatPasswordActions}
                />
            </div>
            <div className={classes.error}>{error}</div>
            <div className={classes.info}>{Locales.step2.desc3}</div>
            <Input title={Locales.step2.hintTitle} placeHolder={Locales.step2.hintPlaceholder} onChange={setHint} />
        </InfoBox>
    );
};

export default Step2;
