import './App.css';
import AboutComponent from './component/AboutComponent';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import MainPageComponent from './component/MainPageComponent';
import { Routes, HashRouter as Router, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={ <MainPageComponent />} />
          <Route path='/about' element={ <AboutComponent />} />
        </Routes>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
