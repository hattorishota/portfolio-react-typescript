import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';

const Header = () => {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/register/`} element={<Register />} />
        <Route path={`/login/`} element={<Login />} />
      </Routes>
    </>
  );
};

export default Header;