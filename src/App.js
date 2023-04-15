import './App.css';
import HeaderComponent from './component/HeaderComponent';
import MainPageComponent from './component/MainPageComponent';
import { Routes, BrowserRouter as Router, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Router>
        <Routes>
          <Route path='/' element={ <MainPageComponent />} />
          {/* <Route path='/gitcard/index.html' element={"/gitcard/index.html"} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
