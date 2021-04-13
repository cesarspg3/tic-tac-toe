import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../redux/models';
import classnames from 'classnames';
import { startLoading, loaded, error } from '../../redux/appDucks';
import { increaseFocusBallNumber } from '../../redux/progressBarDucks';
import { useHistory } from 'react-router';
import { submitForm } from '../../services/api';
import footerCss from './footerCss';

const useStyles = createUseStyles(footerCss);

type FooterProps = {
    onClick?: Function;
    navigate?: boolean;
};

const Footer: React.FC<FooterProps> = ({ onClick, navigate = true }) => {
    const classes = useStyles();
    const dispacth = useDispatch();
    const { focusedBall } = useSelector((state: State) => state.progressBar);
    const history = useHistory();

    const handleClickNext = () => {
        if (onClick) onClick();
        if (navigate) {
            dispacth(startLoading());
            switch (focusedBall) {
                case 1:
                    dispacth(startLoading());
                    setTimeout(() => {
                        dispacth(loaded());
                        dispacth(increaseFocusBallNumber());
                        history.push('/step2');
                    }, 500);
                    break;
                case 2:
                    const random = Math.floor(Math.random() * 99 + 1);
                    submitForm(random > 50 ? 'pruebaKO123' : '')
                        .then(() => {
                            dispacth(loaded());
                            history.push('/Feedback');
                        })
                        .catch(() => {
                            dispacth(loaded());
                            dispacth(error());
                            history.push('/Feedback');
                        });
                    break;
            }
        }
    };

    const handleClickCancel = () => {};

    return (
        <div className={classes.container}>
            <div>
                <div className={classnames(classes.button, classes.cancelButton)} onClick={handleClickCancel}>
                    Cancelar
                </div>
            </div>
            <div>
                <div className={classnames(classes.button, classes.nextButton)} onClick={handleClickNext}>
                    Siguiente
                </div>
            </div>
        </div>
    );
};

export default Footer;
