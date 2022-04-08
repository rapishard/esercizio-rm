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
        
          <div className="col-12">
          <div className="row">
          <div className="col-5">
                <Characters/>
                </div>
                <div className="col-7">
                  <div className="row">
                    <div className="col">
                  <User/>
                </div>
                <div className="row">
                  <p></p>
                </div>
                <div className="row">
                <div className="col">
                <Provider store={store}>
                <div className="App">
                  <Sidebar />
                  <Favourites />

                  <p></p>
                </div>
                </Provider>

                  </div>
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
