import {Route, Switch} from "react-router-dom";
import './App.css';
import Layout from "./layout";
import IndexPage from "./pages/IndexPage";
import AboutProjects from "./pages/AboutProjects";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import ClientsPage from "./pages/ClientsPage";
import ProjectInfo from "./pages/ProjectInfo";
import Wrap from "./Wrap";

function App() {
    return (
        <Wrap>
            <Switch>
                <Route
                    exact
                    strict
                    path={"/"}
                >
                    <Layout
                        header={"DARK"}
                        footer={"LIGHT"}
                        page={"index"}
                    >
                        <IndexPage/>
                    </Layout>
                </Route>

                <Route
                    exact
                    strict
                    path={"/about/"}
                >
                    <Layout
                        header={"LIGHT"}
                        footer={"LIGHT"}
                        page={"about"}
                    >
                        <AboutProjects/>
                    </Layout>
                </Route>

                <Route
                    exact
                    strict
                    path="/contact/"
                >
                    <Layout
                        header={"LIGHT"}
                        footer={"LIGHT"}
                        page={"contact"}
                    >
                        <ContactPage/>
                    </Layout>
                </Route>

                <Route
                    exact
                    strict
                    path="/project/"
                >
                    <Layout
                        header={"DARK"}
                        footer={"LIGHT"}
                        page={"project"}
                    >
                        <ProjectsPage/>
                    </Layout>
                </Route>

                <Route
                    exact
                    strict
                    path={"/client/"}
                >
                    <Layout
                        header={"DARK"}
                        footer={"DARK"}
                        page={"client"}
                    >
                        <ClientsPage/>
                    </Layout>
                </Route>

                <Route
                    exact
                    strict
                    path={"/project/:projectID/"}
                    render={({match: {params}}) => (
                        <Layout
                            header={"DARK"}
                            footer={"DARK"}
                            page={`${params.projectID}`}
                        >
                            <ProjectInfo
                                id={params.projectID}
                            />
                        </Layout>
                    )}
                />
            </Switch>
        </Wrap>
    );
}

export default App;
