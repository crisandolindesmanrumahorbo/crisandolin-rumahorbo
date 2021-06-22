import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import DashboardContainer from './container/DashboardContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './asset/Untitled design.png';
import constant from './constant';

const {
  MAIL_TO_LINK,
  GITHUB_LINK
} = constant;

function App() {
  return (
    <>
      <Navbar className="navbar" fixed="top">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="logo d-inline-block align-top"
          />
          <p className="logo-name">Crisandolin Rumahorbo</p>

        </Navbar.Brand>
        <Navbar.Brand href={GITHUB_LINK} target="_blank">
          <p className="project">Project</p>
        </Navbar.Brand>

        <Navbar.Brand href={MAIL_TO_LINK} target="_blank">
          <p className="contact">Contact</p>
        </Navbar.Brand>
      </Navbar>

      <Switch>
        <Route exact path="/" component={DashboardContainer} />
        <Route exact path="/home" component={DashboardContainer} />
        <Route exact path="/portofolio/" component={DashboardContainer} />
      </Switch>
    </>
  );
}

export default App;
