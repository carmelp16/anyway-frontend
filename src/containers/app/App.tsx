import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import { Home } from "../home";
import { NavBar } from "../navbar";
import "./App.css";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <NavBar />
        <Content>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
