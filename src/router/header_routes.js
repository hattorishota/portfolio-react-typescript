import { Routes, Route } from 'react-router-dom';
import Home from '../component/Home';
import Login from '../component/Login';
import Register from '../component/Register';

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