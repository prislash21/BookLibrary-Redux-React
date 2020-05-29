import React from 'react';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import Splash from './components/layout/Splash';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import BookDetails from './components/Books/BookDetails';
import Booklist from './components/Books/Booklist';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  return (
    <BrowserRouter>
      <animated.div className='App' style={fade}>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Splash} />
          <Route exact path='/dash' component={Dashboard} />
          <Route exact path='/bookdetails/:id' component={BookDetails} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/booklist' component={Booklist} />
        </Switch>
      </animated.div>
    </BrowserRouter>
  );
}

export default App;
