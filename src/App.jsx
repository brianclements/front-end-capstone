import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Reservations from './pages/Reservations';
import ConfirmedBooking from './pages/ConfirmedBooking';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/reservations" element={<Reservations/>}></Route>
        <Route path="/reservations/success" element={<ConfirmedBooking/>}></Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
