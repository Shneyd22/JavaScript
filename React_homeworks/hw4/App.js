import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import HomePage from './components.js/HomePage';
import AboutPage from './components.js/AboutPage';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path='/HomePage.jsx' element={<HomePage />} />
            <Route path='/AboutPage.jsx' element={<AboutPage />} />
            <Route path='*' element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
