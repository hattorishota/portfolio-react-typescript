import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';

const route = () => {
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

export default route;