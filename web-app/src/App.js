import React from "react";
import "./assets/css/common.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/admin/Login/Admin";
import Employees from "./views/admin/Employee/Employees";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Assingment from "./views/admin/Assignment/Assignment";
import EmployeeAssingment from "./views/employee/EmployeeAssignment";
import Review from "./views/admin/Review/Review";
import EmployeeContexttProvider from "./contexts/EmployeeContext";

function App() {
  return (
    <Router>
      <EmployeeContexttProvider>
        <div id="page-container">
          <div id="content-wrap">
            <Switch>
              <Route exact path="/" component={EmployeeAssingment} />
              <Route exact path="/about" component={About} />
              <Route exact path="/admin" component={Login} />
              <Route exact path="/admin/employees" component={Employees} />
              <Route exact path="/admin/assingment" component={Assingment} />
              <Route exact path="/admin/reviews" component={Review} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </EmployeeContexttProvider>
    </Router>
  );
}

export default App;
