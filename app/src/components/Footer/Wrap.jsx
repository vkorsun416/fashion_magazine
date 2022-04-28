import React, { Component } from "react";
import css from "./Wrap.module.css";
import { DARK } from "../../layout/themes";

class Wrap extends Component {
  renderWrap() {
    const { children, theme, copyright } = this.props;

    return (
      <div className={theme === DARK ? css.black : ""}>
        <div className={css.container}>
          <div className={css.item + " " + (theme === DARK ? css.white : "")}>
            {copyright}
          </div>
          {children}
        </div>
      </div>
    );
  }

  render() {
    return this.renderWrap();
  }
}

export default Wrap;
