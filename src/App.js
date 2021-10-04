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
import Navbar from './component/Navbar/Navbar';
import Services from './component/Services/Services';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div>
      
     <Router>
       <Navbar/>
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
        <Route exact path="/services">
          <Services></Services>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
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
