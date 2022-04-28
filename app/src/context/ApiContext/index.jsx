import React, {Component} from 'react';
import context from "./context";
import withApi from "./withApi";
import getStaticPath from "../../service/getStaticPath";

class ApiContext extends Component {
    state = {
        client: null,
        project: null,
        info: null,
        service: null,
        onMain: null,
    };

    getClients = () => {
        const {client} = this.state;

        if (client !== null) {
            return;
        }

        return fetch(getStaticPath("/api/client/content/"))
            .then(res => res.json())
            .then(client => this.setState({client}))
    }

    getProjects = () => {
        const {project} = this.state;

        if (project !== null) {
            return;
        }

        return fetch(getStaticPath("/api/project/content/"))
            .then(res => res.json())
            .then(project => this.setState({project}))
    }

    getProjectInfo = (id) => {

        return fetch(getStaticPath(`/api/project/content/?filter=field_slug-in-${id}`))
            .then(res => res.json())
            .then(info => {
                this.setState({info})
            })
    }

    getServices = () => {
        const {service} = this.state;

        if (service !== null) {
            return;
        }

        return fetch(getStaticPath("/api/service/content/"))
            .then(res => res.json())
            .then(service => this.setState({service}))
    }

    getOnMain = () => {
        const {onMain} = this.state;

        if (onMain !== null) {
            return;
        }

        return fetch(getStaticPath("/api/project/content/?filter=status-in-ON_MAIN"))
            .then(res => res.json())
            .then(onMain => this.setState({onMain}))
    }

    render() {
        const {children} = this.props;
        const {client, project, info, service, onMain} = this.state;

        return (
            <context.Provider value={{
                client: client ?? [],
                getClient: this.getClients,
                project: project ?? [],
                getProject: this.getProjects,
                info: info ?? [],
                getInfo: this.getProjectInfo,
                service: service ?? [],
                getService: this.getServices,
                onMain: onMain ?? [],
                getOnMain: this.getOnMain,
            }}>
                {children}
            </context.Provider>
        );
    }
}

export {withApi};

export default ApiContext;
