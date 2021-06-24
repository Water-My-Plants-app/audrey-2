import React, { useEffect } from "react";
import {Route} from "react-router-dom";
import styled from "styled-components";
import Nav from './components/Nav'
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile"
import PrivateRoute from "./components/PrivateRoute";
import EditPlant from "./pages/EditPlant";

import { connect } from 'react-redux';
import { getPlants } from './actions';

const Content = styled.div`
  margin-top: 150px;
  @media (min-width: 700px) {
    margin-top: 100px;
  }
`;

function App(props) {
  const { plants, getPlants } = props;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getPlants();
    }
  },[getPlants])
  
    return (
        <div className="App">
            <Nav/>
            <Content>
                <Route exact path="/" component={Welcome}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/profile" component={UserProfile}/>

                <PrivateRoute path="/home" component={() => <Home plants={plants.data} />}/>
                <PrivateRoute path="/plants/:id" component={EditPlant} />
                <PrivateRoute path="/plants" component={() => <EditPlant plants={plants.data} />} exact/>

            </Content>
        </div>
    );
}

const mapStateToProps = (state) => {
  return {
    plants: state.plants
  }
}

export default connect(mapStateToProps,{getPlants}) (App);