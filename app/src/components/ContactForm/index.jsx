import React, {Component} from 'react';
import Input from "./Input";
import Submit from "./Submit";
import FormWrap from "./FormWrap";
import Provider from "./Provider";

class ContactForm extends Component {
    render() {
        return (
            <Provider>
                <FormWrap>
                    <Input
                        name={"name"}
                        number="(1)"
                        title="Name"
                        type="text"
                    />
                    <Input
                        name={"email"}
                        number="(2)"
                        title="Email"
                        type="email"
                    />
                    <Input
                        name={"message"}
                        number="(3)"
                        title="Message"
                        type="text"
                    />
                    <Submit/>
                </FormWrap>
            </Provider>
        );
    }
}

export default ContactForm;
