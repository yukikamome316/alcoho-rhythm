import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Register from './register/Register';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/signup">Signup</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/Register">Register</Link>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
