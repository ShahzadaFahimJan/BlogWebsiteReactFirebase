import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import './app.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase-config';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const logUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      // Navigate to the login page after logout
      window.location.href = '/login'; // Redirect using window.location
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        
        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
          <Link to="/createpost">Create Post</Link>
          <button onClick={logUserOut}>Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsAuth={setIsAuth} />}
        />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
