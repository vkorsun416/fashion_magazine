import React from 'react';
import css from "./Menu.module.css";
import Wrap from "./Wrap";
import Logo from "./Logo";
import Cross from "./Cross";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import List from "./List";
import items from "./data";
import Footer from "../../components/Footer";

class Menu extends React.Component {

    renderPopup() {
        const {active} = this.props;

        if (!active) {
            return null;
        }

        return (
            <CSSTransition
                timeout={2000}
                classNames={{
                    enter: css.enter,
                    enterActive: css.active,
                    exit: css.exit,
                    exitActive: css.active,
                }}
                key={"in"}
            >
                <div className={css.menu}>
                    <Wrap className={css.header}>
                        <Logo/>

                        <Cross/>
                    </Wrap>

                    <List
                        className={css.list}
                        items={items}
                    />

                    <Footer className={css.footer}/>
                </div>
            </CSSTransition>
        );
    }

    render() {
        return (
            <TransitionGroup component={null}>
                {this.renderPopup()}
            </TransitionGroup>
        );
    }
}

export default Menu;
