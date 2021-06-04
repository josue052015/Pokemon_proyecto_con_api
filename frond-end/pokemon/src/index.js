import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route  } from "react-router-dom";
import routes from './utils/route-config';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
      <Switch>
        {routes.map(route => 
            <Route key={route.path} path={route.path} 
            exact={route.exact}><route.component/>
            </Route>)     
        }
      </Switch>
      </div>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
