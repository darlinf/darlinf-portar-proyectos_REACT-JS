import Navbar from "../_components/navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "../_pages/IncognitoPages/Home";
import Login from "../_pages/IncognitoPages/Login";
import Register from "../_pages/IncognitoPages/Register";
import RegisterSuccess from "../_pages/IncognitoPages/helperPages/RegisterSuccess";
import FinalProyect from "../_pages/IncognitoPages/FinalProyect";
import ProposedProject from "../_pages/IncognitoPages/ProposedProject";

import HomeAdmin from "../_pages/AdminPages/HomeAdmin";
import ManageTeacherAdmin from "../_pages/AdminPages/ManageTeacherAdmin";
import RegisterTeacher from "../_pages/AdminPages/RegisterTeacher";

import HomeTeacher from "../_pages/TeacherPages/HomeTeacher";
import ManagementProposedProjects from "../_pages/TeacherPages/ManagementProposedProjects";
import ManageFinalProjectsTeacher from "../_pages/TeacherPages/ManageFinalProjectsTeacher";
import ManageStudentsTeacher from "../_pages/TeacherPages/ManageStudentsTeacher";
import RateChaptersTeacher from "../_pages/TeacherPages/RateChaptersTeacher";

import HomeStudent from "../_pages/StudentPages/HomeStudent";
import ProposedProjectsStudent from "../_pages/StudentPages/ProposedProjectsStudent";
import FinalProjectStudent from "../_pages/StudentPages/FinalProjectStudent";
import ProjectChapterStudent from "../_pages/StudentPages/ProjectChapterStudent";
import ProposedProjectsShowStudent from "../_pages/StudentPages/ProposedProjectsShowStudent";
import ProjectChapterShowStudent from "../_pages/StudentPages/ProjectChapterShowStudent";

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
          <Route path="/manageTeacherAdmin" component={ManageTeacherAdmin} />
          <Route path="/registerTeacher" component={RegisterTeacher} />

          <Route path="/homeTeacher" component={HomeTeacher} />
          <Route
            path="/managementProposedProjects"
            component={ManagementProposedProjects}
          ></Route>
          <Route
            path="/manageFinalProjectsTeacher"
            component={ManageFinalProjectsTeacher}
          ></Route>
          <Route
            path="/manageStudentsTeacher"
            component={ManageStudentsTeacher}
          ></Route>
          <Route
            path="/rateChaptersTeacher"
            component={RateChaptersTeacher}
          ></Route>

          <Route path="/homeStudent" component={HomeStudent} />
          <Route
            path="/proposedProjectsStudent"
            component={ProposedProjectsStudent}
          />
          <Route
            path="/ProposedProjectsShowStudent"
            component={ProposedProjectsShowStudent}
          />
          <Route
            path="/finalProjectStudent/:id"
            component={FinalProjectStudent}
          ></Route>
          <Route
            path="/projectChapterStudent"
            component={ProjectChapterStudent}
          ></Route>
          <Route
            path="/projectChapterShowStudent"
            component={ProjectChapterShowStudent}
          ></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
