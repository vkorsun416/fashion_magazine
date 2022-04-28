import React, {Component} from 'react';
import HeaderBar from "../components/HeaderBar";
import Footer from "../components/Footer";
import MenuBurger from "../popups/MenuBurger";
import Wrap from "./Wrap";
import Transition from "./Transition";

class Layout extends Component {
    render() {
        const {
            children,
            header,
            footer,
            page
        } = this.props;

        return (
            <Wrap>
                <HeaderBar theme={header}/>

                <Transition page={page}>
                    {children}
                </Transition>

                <Footer theme={footer}/>

                <MenuBurger/>
            </Wrap>
        );
    }
}

export default Layout;
