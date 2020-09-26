import React from "react";
import "./assets/css/common.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./views/Admin/Admin";
import Employees from "./views/Employee/Employees";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Assingment from "./views/Assignment/Assignment";
import EmployeeAssingment from "./views/Assignment/EmployeeAssignment";
import Review from "./views/Reviews/Review";
import EmployeeContexttProvider from "./contexts/EmployeeContext";

function App() {
  return (
    <Router>
      <EmployeeContexttProvider>
        <div id="page-container">
          <div id="content-wrap">
            <Switch>
              <Route exact path="/" component={Admin} />
              <Route exact path="/employees" component={Employees} />
              <Route exact path="/assingment" component={Assingment} />
              <Route
                exact
                path="/employee/assingment"
                component={EmployeeAssingment}
              />
              <Route exact path="/reviews" component={Review} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </EmployeeContexttProvider>
    </Router>
  );
}

export default App;
