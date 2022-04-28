import React, {Component} from 'react';
import context from "./context";

class Provider extends Component {

    state = {
        name: "",
        email: "",
        message: "",
        error: null,
    };

    handleChange = (name, value) => {
        this.setState({[name]: value});
    }

    handleSubmit = event => {
        const {name, email, message} = this.state;
        event.preventDefault();

            fetch(
                "/api/form/result/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiYWRtaW4iOnRydWUsImlhdCI6MTYzMjk5NTc1Mn0.OXVvmhi1YQ4XTm6eNbfWp2ao5rw3ujkYholudN8oeMQ"
                    },
                    body: JSON.stringify({
                        form: "FOR_CLIENT",
                        field: [{
                            field: "NAME",
                            value: name,
                        }, {
                            field: "EMAIL",
                            value: email,
                        }, {
                            field: "MESSAGE",
                            value: message,
                        }]
                    })
                }
            )
                .then(response => response.json())
                .then(response => {
                    alert(JSON.stringify(response))
                    this.setState({
                        name: "",
                        email: "",
                        message: "",
                        error: null,
                    });
                })
        .catch ((error) => {
            alert(`Something went wrong. ${error}`);
        });
    }

    render() {
        const
            {children} = this.props,
            {name, email, message, error} = this.state;

        return (
            <context.Provider value={{
                handleChange: this.handleChange,
                values: {name, email, message},
                error: error,
            }}>
                <form onSubmit={this.handleSubmit}>
                    {children}
                </form>
            </context.Provider>
        );
    }
}

export default Provider;
