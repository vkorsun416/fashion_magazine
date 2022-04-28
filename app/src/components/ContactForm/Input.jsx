import React from 'react';
import InputWrap from "./InputWrap";
import css from './Input.module.css';
import context from "./context";

function Input(props) {
    const {name, number, title, type} = props;
    const {handleChange, values} = React.useContext(context);

    const onChange = React.useCallback(event => {
        handleChange(name, event.target.value);
    }, [name, handleChange]);

    return (
        <InputWrap>


            <input
                className={css.input}
                value={values[name]}
                name={name}
                onChange={onChange}
                required
                type={type}
            />
            <label className={css.label}>
                <span className={css.number}>
                    {number}
                </span>

            {title}

        </label>
        </InputWrap>
    );
}

export default Input;
