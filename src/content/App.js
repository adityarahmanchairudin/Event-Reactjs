import React, { Component,Fragment } from 'react';
import '../style/styles.css';
import Home from './Home/Home';
import Form from './event/event';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

class App extends Component {
  render() {
    return (
     <Router>
       <div className="wraaper">
         <div className="header">
           <div className="navbar">
             <div className="logo">
               <img className="imgfluid" src={require('../images/logo/babastudio-logo.png')} alt=""/>
             </div>

             <div className="menu">
               <ul>
                 <Link to="/" className="li">Home</Link>
                 <Link to="/" className="li">BLogs</Link>
                 <Link to="/" className="li">Galery</Link>
                 <Link to="/form" className="li">kontak</Link>
                 <Link to="/event" className="li">Simple event</Link>
               </ul>
             </div>
           </div>
         </div>

         <Fragment>
           {/* Home */}
           <Route path="/" exact component={Home} />

           <Route path="/form"  component={Form} />

         </Fragment>

       </div>
     </Router>
    );
  }
}

export default App;