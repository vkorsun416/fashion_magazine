import React from 'react';
import css from "./Transition.module.css";
import {CSSTransition, TransitionGroup} from "react-transition-group";


function onExited() {
    window.scrollTo(0, 0);
}

function Transition(props) {
    const {children, page} = props;

    return (
        <div className={css.layout}>
            <TransitionGroup component={null}>
                <CSSTransition
                    timeout={{
                        enter: 1000,
                        exit: 500
                    }}
                    classNames={{
                        enter: css.enter,
                        enterActive: css.active,
                        exit: css.exit,
                        exitActive: css.active,
                    }}
                    key={page}
                    onExited={onExited}
                >
                    {children}
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default Transition;
