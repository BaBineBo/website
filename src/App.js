import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Import constants
import Footer from "./constants/footer/Footer";
import Header from "./constants/header/Header";

// Import pages
import Main from "./pages/main/Main";
import BigName from "./pages/main/BigName";

function App() {
  return (
    <Router>
      <div style={{ background: "#B6C197" }}>
        <BigName />
        {<Header />}
        <div className="center-content full-width container">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Redirect to="/404"></Redirect>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
