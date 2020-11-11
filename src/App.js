import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/pages/Home/Home';
import Mobiles from './components/pages/Home/Navbar/Mobiles/Mobiles';
import Cars from './components/pages/Home/Navbar/Cars/Cars';
import Motorcycles from './components/pages/Home/Navbar/Motorcycles/Motorcycles';
import Houses from './components/pages/Home/Navbar/Houses/Houses';
import TV from './components/pages/Home/Navbar/TV/TV';
import Tablets from './components/pages/Home/Navbar/Tablets/Tablets';
import LandPlots from './components/pages/Home/Navbar/Land & Plots/LandPlots';
import Accessories from './components/pages/Home/Navbar/Mobiles/Accessories/Accessories';

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/mobiles" component={Mobiles} />
        <Route exact path="/cars" component={Cars} />
        <Route exact path="/motor-cycles" component={Motorcycles} />
        <Route exact path="/houses" component={Houses} />
        <Route exact path="/tv" component={TV} />
        <Route exact path="/tablets" component={Tablets} />
        <Route exact path="/landplots" component={LandPlots} />
        <Route exact path="/accessories" component={Accessories} />
      </Router>
    </>
  );
}

export default App;
