import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import Users from './pages/users/users';
import { JulianContextProvider } from './context/julianContext';

function App() {
  return (
    <>
      <JulianContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </JulianContextProvider>
    </>
  );
}

export default App;
