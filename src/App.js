import {
  Route,
  Routes,
} from 'react-router-dom';
import NavBar from './components/Navbar';

import './App.css';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="inner">
          <Routes>
            <Route path="/categories" element={<Categories />} />
            <Route path="/" element={<Books />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
