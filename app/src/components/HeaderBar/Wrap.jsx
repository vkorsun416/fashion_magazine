import React, {Component} from 'react';
import css from "./Wrap.module.css";

class Wrap extends Component {
    state = {
        isScrolled: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isScrolled = window.pageYOffset > document.documentElement.clientHeight;

            if (isScrolled !== this.state.isScrolled) {
                this.setState({isScrolled})
            }
        });
    }

    /**
     *
     * Возвращает фон для хедера,
     * если скролл выше высоты экрана добавляем фон
     */
    getClasses() {
        const {isScrolled} = this.state;
        const classes = [css.rgba];

        if (isScrolled) {
            classes.push(css.blur);
        }

        return classes;
    }

    renderWrap() {
        const {children} = this.props;

        return (
            <header>
                <div className={this.getClasses().join(" ")}>
                    <div className={css.container}>
                        <div className={css.header}>
                            {children}
                        </div>
                    </div>
                </div>
            </header>
        )
    }

    render() {
        return (
            this.renderWrap()
        );
    }
}

export default Wrap;
