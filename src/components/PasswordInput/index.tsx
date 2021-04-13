import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import eyeImg from '../../assets/img/Eye.png';
import passwordInputCss from './passwordInputCss';

const useStyles = createUseStyles(passwordInputCss);

type PasswordInputtProps = {
    title: string;
    placeHolder: string;
    onChange: Function;
};

const PasswordInput: React.FC<PasswordInputtProps> = ({ title, placeHolder, onChange }) => {
    const classes = useStyles();
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={classes.inputContainer}>
            <span className={classes.title}>{title}</span>
            <input
                type={showPassword ? 'text' : 'password'}
                className={classnames(classes.input, value.length === 0 && classes.smallSize, showPassword && classes.smallSize)}
                placeholder={placeHolder}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    if (onChange) onChange(e.target.value);
                }}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
            <img
                src={eyeImg}
                alt="eye"
                className={classnames(classes.eye, showPassword && classes.showPassword)}
                onClick={() => setShowPassword(!showPassword)}
            />
            {focus && <hr className={classes.focusLine}></hr>}
        </div>
    );
};

export default PasswordInput;
