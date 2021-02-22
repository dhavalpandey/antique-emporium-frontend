import './App.scss';
import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
const Signup = React.lazy(() => import('./components/Signup/Signup'));
const Upload = React.lazy(() => import('./components/Upload/Upload'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Shop = React.lazy(() => import('./components/Shop/Shop'));
const Pay = React.lazy(() => import('./components/Pay/Pay'));
const View = React.lazy(() => import('./components/View/View'));

// import NavBar from './components/NavBar/Navbar';

const App = () => {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/pay" component={Pay} />
        <Route exact path="/:id" name="id" component={View}/>
        </Suspense>
        </Switch>
    </Router>
    </div>
  );
}
export default App;
