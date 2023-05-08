import React, { Component } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;


// Pages
const Login = React.lazy(() => import('./pages/Login'));

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading()}>
          <Routes>
              <Route path="/" name="Home" element={<Login/>} />
            </Routes>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
