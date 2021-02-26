import Navbar from "../_components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../_pages/IncognitoPages/Home";
import Login from "../_pages/IncognitoPages/Login";
import Register from "../_pages/IncognitoPages/Register";
import RegisterSuccess from "../_pages/IncognitoPages/helperPages/RegisterSuccess";
import FinalProyect from "../_pages/IncognitoPages/FinalProyect";
import ProposedProject from "../_pages/IncognitoPages/ProposedProject";

import HomeAdmin from "../_pages/AdminPages/HomeAdmin";

import HomeTeacher from "../_pages/TeacherPages/HomeTeacher";

import HomeStudent from "../_pages/StudentPages/HomeStudent";
import ProposedProjectsStudent from "../_pages/StudentPages/ProposedProjectsStudent";
import FinalProjectStudent from "../_pages/StudentPages/FinalProjectStudent";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/registerSuccess" component={RegisterSuccess} />
          <Route path="/proposedProject" component={ProposedProject} />
          <Route path="/finalProyect" component={FinalProyect} />

          <Route path="/homeAdmin" component={HomeAdmin} />

          <Route path="/homeTeacher" component={HomeTeacher} />

          <Route path="/homeStudent" component={HomeStudent} />
          <Route
            path="/proposedProjectsStudent"
            component={ProposedProjectsStudent}
          />
          <Route
            path="/finalProjectStudent"
            component={FinalProjectStudent}
          ></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
