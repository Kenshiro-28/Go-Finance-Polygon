import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import { version } from './version';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './components/Home';
import Farm from './components/Farm';
import ReiPool from './components/ReiPool';
import Ryu from './components/Ryu';
import About from './components/About';

import './go_finance.css';

window.APP_VERSION = version;

const Notfound = () => <div><br/><p/><h1>Invalid URL</h1><br/><p/></div>

const routing = (
    <Router>
        <div className="row navigation_bar">

           <div className="col-sm">
			   <NavLink to="/" exact="true">家 Home</NavLink>
		   </div>

		   <div className="col-sm">
			   <NavLink to="/farm" exact="true">合 Gō Farm</NavLink>
		   </div>

           <div className="col-sm">
               <NavLink to="/rei" exact="true">霊 Rei Pool</NavLink>
		   </div>

		   <div className="col-sm">
			   <NavLink to="/ryu" exact="true">竜 Ryū NFT</NavLink>
		   </div>

		   <div className="col-sm">
			   <NavLink to="/about" exact="true">情報 About</NavLink>
		   </div>

	    </div>
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/farm" element={<Farm/>} />
                <Route path="/rei" element={<ReiPool/>} />
                <Route path="/ryu" element={<Ryu/>} />
                <Route path="/about" element={<About/>} />
                <Route path="*" element={<Notfound/>} />
            </Routes>
        </div>
    </Router>
)

createRoot(document.getElementById('root')).render(routing)
