import './App.scss';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

//Components
const Signup = React.lazy(() => import('./components/Signup/Signup'));
const Upload = React.lazy(() => import('./components/Upload/Upload'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Shop = React.lazy(() => import('./components/Shop/Shop'));
const Pay = React.lazy(() => import('./components/Pay/Pay'));
const View = React.lazy(() => import('./components/View/View'));
// const error404 = React.lazy(() => import('./components/404/404'));

const App = () => {
  return (
    <>
    <div className="app">
    <Router>
      <Switch>
        <Suspense fallback={
        <>
        <div className="load">Loading...</div><CircularProgress className="load"/>
        </>}>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/" component={Shop} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/pay" component={Pay} />
        <Route exact path="/:id" name="id" component={View}/>
        </Suspense>
        </Switch>
    </Router>
    </div>
    </>
  );
}

export default App;