import React from 'react';  
import ReactDOM from 'react-dom';  
import {HashRouter as Router, Route, NavLink, Routes} from 'react-router-dom'   
import 'bootstrap/dist/css/bootstrap.css'

import Home from './components/Home';
import Farm from './components/Farm';
import ReiPool from './components/ReiPool';
import Ryu from './components/Ryu';
import About from './components/About';

import './go_finance.css';  

const Notfound = () => <div><br/><p/><h1>Invalid URL</h1><br/><p/></div>

const routing = (  
    <Router>  
        <div className="row navigation_bar">
        
           <div className="col-sm">
			   <NavLink to="/" exact>家 Home</NavLink>  
		   </div>
			 
		   <div className="col-sm">
			   <NavLink to="/farm" exact>合 Gō Farm</NavLink>  
		   </div>
		   
   		   <div className="col-sm">
			   <NavLink to="/rei" exact>霊 Rei Pool</NavLink>  
		   </div>
		   
		   <div className="col-sm">
			   <NavLink to="/ryu" exact>竜 Ryū NFT</NavLink>  
		   </div>		   
		   
		   <div className="col-sm">
			   <NavLink to="/about" exact>情報 About</NavLink>  
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

ReactDOM.render(routing, document.getElementById('root'));
