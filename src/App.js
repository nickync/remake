import './App.css';
import AboutComponent from './component/AboutComponent';
import AuthProvider, { useAuth } from './component/AuthContext';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import MainPageComponent from './component/MainPageComponent';
import { Routes, HashRouter as Router, Route, Navigate } from 'react-router-dom';

function App() {
  const authContext = useAuth()
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <HeaderComponent />
          <Routes>
            <Route path='/' element={ <MainPageComponent />} />
            <Route path='/about' element={ <AboutComponent />} />
          </Routes>
        </Router>
        <FooterComponent />
      </AuthProvider>
    </div>
  );
}

export default App;
