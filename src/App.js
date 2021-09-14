import RsForm from './Components/RsForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Data from './Components/Data';
import Navbar from './Components/Navbar';
import FetchData from './Components/FetchData';
import Footers from './Components/Footers';

function App() {
  return (
    <>
     <Router>
      <div className="maindiv">
        <Navbar />
        <div className="container">
          <div className="sidecorner">
            <Switch>
              <Route path="/" exact><RsForm /></Route>
              
              <Route path="/FetchData" exact><FetchData /></Route>

          </Switch>
          </div>
        </div>
        <Footers />
      </div>
    </Router>
    </>
  );
}

export default App;
