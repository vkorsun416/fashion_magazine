import React, {Component} from 'react';
import context from "./context";

class ScrollContext extends Component {
    state = {
        index: false,
        about: false,

    }

    indexScroll = () => {
        const scrollHeight = window.pageYOffset > document.documentElement.clientHeight;

        if (scrollHeight !== this.state.index) {
            this.setState({
                index: scrollHeight
            });
        }
    }

    aboutScroll = () => {
        const scrollHeight = window.pageYOffset > 200;

        if (scrollHeight !== this.state.about) {
            this.setState({
                about: scrollHeight
            });
        }
    }

    getClasses = (css) => {
        const {isScrolled} = this.state;
        const classes = [css.rgba];

        if (isScrolled) {
            classes.push(css.blur);
        }

        return classes;
    }

    render() {
        const
            {children} = this.props,
            {menuActive} = this.state;

        return (
            <context.Provider value={{
                menuActive: menuActive,
                openMenu: this.openMenu,
                closeMenu: this.closeMenu,
            }}>
                {children}
            </context.Provider>
        );
    }
}

export default ScrollContext;
