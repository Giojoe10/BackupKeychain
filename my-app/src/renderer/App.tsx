import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import Home from './pages/Home';
import Header from './Components/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
