import { Routes, Route } from 'react-router-dom';
import Home from '../../components/Home';
import Login from '../../components/Login';
import Register from '../../components/Register';
import '../../scss/top.scss';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/register/`} element={<Register />} />
        <Route path={`/login/`} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;