import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import './style/App.css';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/login' component={LoginScreen}/>
      </Router>
    </div>
  );
};

export default App;
