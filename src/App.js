import logo from './logo.svg';
import './App.css';
import reset from './css/reset.css'
import Header from './components/공용/1.header/Header';
import Footer from './components/공용/3.footer/Footer'
import List from './components/공용/4.list/List'
import css from './css/style.scss'
import {BrowserRouter as Router, Routes,Route,LInk, BrowserRouter} from 'react-router-dom';
import Main from './components/Main'
import Popular_spot from './components/popular/Popular_spot';
import Popular_spot_list from './components/공용/4.list/Popular_spot_list';
import ScrollTop from './components/공용/ScrollTop';
function App() {
  return (
    <div className="wrap">
   

     
      
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/store" element={<Popular_spot />} />
        </Routes>
      
    
    </div>
  );
}

export default App;
