import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/footer';
import Signup from './components/Signup';
import Login from './components/login';
import Loan from './components/loan';
import Myloan from './components/Myloan'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home  key="home" />} />
          <Route exact path='/login' element={<Login key="login" />} />
          <Route exact path='/signup' element={<Signup key="signup"/>} />
          <Route exact path='/loan' element={<Loan key="loan" />} />
          <Route exact path='/myloan' element={<Myloan key="myloan"/>} />



        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
