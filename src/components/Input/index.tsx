import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import inputCss from './inputCss';

const useStyles = createUseStyles(inputCss);

type InputProps = {
    title: string;
    placeHolder: string;
    onChange: Function;
};

const Input: React.FC<InputProps> = ({ title, placeHolder, onChange }) => {
    const classes = useStyles();
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState('');

    return (
        <div className={classes.inputContainer}>
            <span className={classes.title}>{title}</span>
            <input
                type="text"
                maxLength={60}
                className={classes.input}
                placeholder={placeHolder}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    if (onChange) onChange(e.target.value);
                }}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
            <div className={classes.length}>{`${value.length}/60`}</div>
            {focus && <hr className={classes.focusLine}></hr>}
        </div>
    );
};

export default Input;
