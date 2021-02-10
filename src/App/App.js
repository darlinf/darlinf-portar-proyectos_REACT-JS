import Navbar from '../_components/navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../_pages/IncognitoPages/Home";
import Login from "../_pages/IncognitoPages/Login";
import Register from "../_pages/IncognitoPages/Register";


function App() {
  return (
    <Router>
      <Navbar/>
      <main className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
