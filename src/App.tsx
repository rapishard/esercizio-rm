import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import User from './components/User';
import { Favourites } from './components/Favourites';
import { Provider } from 'react-redux';
import Sidebar from './sidebar/Sidebar';
import store from './store';
import Characters from './components/Characters';


/* import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />); */

function App() {
  return (
    <>
    

<div className="container">
        <div className="row">
                <div className="col-7">
                <Characters/>
                </div>
                
                <div className="col-5">
                  <div className="row">
                    <div className="col">
                  <User/>
                </div>
                <div className="row">
                <div className="col">
                <Provider store={store}>
    <div className="App">
      <Sidebar />
      <Favourites />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </Provider>
                  </div>
                </div>
                </div>
                
                </div> 
        </div>
</div>
   </>
  );
}

export default App;
