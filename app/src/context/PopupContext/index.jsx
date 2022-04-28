import React, {Component} from 'react';
import context from "./context";

class PopupContext extends Component {
    state = {
        menuActive: false,
    }

    openMenu = () => {
        this.setState({
            menuActive: true,
        });
    }

    closeMenu = () => {
        this.setState({
            menuActive: false,
        });
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

export default PopupContext;
