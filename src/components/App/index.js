import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import Signup from '../Signup';
import ErrorPage from '../ErrorPage';
import ForgetPassword from '../ForgetPassword';
import '../../App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          
          <Route path='/' element = {<Landing />} />
          <Route path='/welcome' element = {<Welcome />} />
          <Route path='/login' element = {<Login />} />
          <Route path='signup' element = {<Signup />} />
          <Route path='forgetpassword'  element = {<ForgetPassword />} />
          <Route path='*'  element = {<ErrorPage />} />
          
        </Routes>
        
          
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;