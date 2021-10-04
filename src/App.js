import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ButtonGroup,Button} from 'react-bootstrap';
import Home from './component/Home/Home';
import About from './component/About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div>
     <Router>
     <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
     </Router>
     
    </div>
  );
}

export default App;
