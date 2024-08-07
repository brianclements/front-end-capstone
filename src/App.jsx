import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Reservations from './components/Reservations';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/reservations" element={<Reservations/>}></Route>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
