import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


// Import constants
import Footer from './constants/footer/Footer';
import Header from './constants/header/Header';


// Import pages
import Main from './pages/main/Main';
import BigName from './pages/main/BigName';

function App() {

  return (
    

   <Router>
      <div>
          <BigName/>
         {// <Header/>
         }
        <div className="center-content full-width">
          <Switch>
            <Route exact path ="/"><Main/></Route>
            <Route exact path ="/a"></Route>
            <Route exact path ="/404">lol error</Route>
            <Redirect to ="/404"></Redirect>
          </Switch>
        </div>

        <Footer/>
    </div>

   </Router>
   

  );
}

export default App;
