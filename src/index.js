import React from 'react';  
import ReactDOM from 'react-dom';  
import {HashRouter as Router, Route, NavLink, Switch} from 'react-router-dom'   
import 'bootstrap/dist/css/bootstrap.css'

import Home from './components/Home';
import Farm from './components/Farm';
import Vault from './components/Vault';
import About from './components/About';

import './go_finance.css';  

const Notfound = () => <div><br/><p/><h1>Invalid URL</h1><br/><p/></div>

const routing = (  
    <Router>  
        <div className="row navigation_bar">
        
           <div className="col-sm-3">
			   <NavLink to="/" exact>家 Home</NavLink>  
		   </div>
			 
		   <div className="col-sm-3">
			   <NavLink to="/farm" exact>合 Gō Farm</NavLink>  
		   </div>
		   
		   <div className="col-sm-3">
			   <NavLink to="/vault" exact>金庫 Vault</NavLink>  
		   </div>
		   
		   <div className="col-sm-3">
			   <NavLink to="/about" exact>情報 About</NavLink>  
		   </div>

	    </div>
        <div>  
            <Switch>  
                <Route exact path="/" component={Home} />  
                <Route exact path="/farm" component={Farm} />
                <Route exact path="/vault" component={Vault} />    
                <Route exact path="/about" component={About} />  
                <Route component={Notfound} />  
            </Switch>  
        </div>  
    </Router> 
)  

ReactDOM.render(routing, document.getElementById('root'));
