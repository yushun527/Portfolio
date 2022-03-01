import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Aboutme from './Components/Aboutme';
import Contact from './Components/Contact';
import Home from './Components/Home/Home';
import Header from './Header';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Aboutme" component={Aboutme} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
