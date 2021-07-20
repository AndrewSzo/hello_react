import React from 'react';
import './index.css';
import ListWrapper from './components/ListWrapper/ListWrapper';
import MyComponent from './components/ListWrapper/MyComponent/MyComponent';


const App = () => (
  <div className="wrapper">
    <MyComponent />
    <ListWrapper />
  </div>
);

export default App;
