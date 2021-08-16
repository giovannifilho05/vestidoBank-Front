import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from './components/Header';
import Home from "./pages/Home";
import ManageEmployees from "./pages/ManageEmployees";
import RegistrarionEmployees from "./pages/RegistrationEmployees";
import ExclusionEmployees from "./pages/ExclusionEmployees";
import ViewEmployees from "./pages/ViewEmployees";
import UpdateEmployees from "./pages/UpdateEmployees";

const Routes = () => {
   return(
       <BrowserRouter>
            <Header />
            <Route component = { Home }  path="/" exact />
            <Route component = { ManageEmployees }  path="/manageEmployees" exact />
            <Route component = { RegistrarionEmployees }  path="/manageEmployees/registrarionEmployees" exact />
            <Route component = { ExclusionEmployees }  path="/manageEmployees/exclusionEmployees" exact />
            <Route component = { ViewEmployees }  path="/manageEmployees/viewEmployees" exact />
            <Route component = { UpdateEmployees }  path="/manageEmployees/updateEmployees" exact />
       </BrowserRouter>
   )    
}

export default Routes;