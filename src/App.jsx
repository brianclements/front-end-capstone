import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Reservations from './pages/Reservations';
import Footer from './components/Footer';
import ConfirmedBooking from './pages/ConfirmedBooking';
import './App.css';

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/reservations" element={<Reservations/>}></Route>
          <Route path="/reservations/success" element={<ConfirmedBooking/>}></Route>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
