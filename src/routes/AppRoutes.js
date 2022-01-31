import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Team from "../Components/Team";
import BackCoverPage from "../Components/BackCoverPage";
import CoorporateStory from "../Components/CoorporateStory";
import Test from "../Components/test";
import Information from "../Components/Information";

export default function AppRoute(){
    return (
           <Router>
      <Route component={Team} path="/team"/>
            <Route component={BackCoverPage} path="/backcoverpage"/>
            <Route component={CoorporateStory} path="/coorporateStory"/>
            <Route component={Test} path="/test"/>
            <Route component={Information} path="/information"/> 
        </Router>
        // <Information/>
       
    )
}