import React, { Suspense } from 'react';
import './App.scss';
// import logo from './logo.svg';
const Test = React.lazy(() => import('./pages/test'));

function App() {
  return (
    <Suspense fallback={<></>}>
      {/* <div className='App'>
        <header className='header'>
          <img src={logo} className='logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className='link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            Learn React
          </a>
        </header>
      </div> */}
      <Test />
    </Suspense>
  );
}

export default App;
