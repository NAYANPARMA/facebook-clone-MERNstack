import React from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed'
import Widget from './Widget/Widget';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widget/>
      </div>
    </div>
  );
}

export default App;