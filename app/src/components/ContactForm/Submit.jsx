import React from 'react';
import SubmitWrap from "./SubmitWrap";
import css from "./Submit.module.css";

function Submit() {

    return (
        <SubmitWrap>
            <button
                className={css.button}>
                Submit
            </button>
        </SubmitWrap>
    );
}

export default Submit;
