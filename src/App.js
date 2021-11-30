import { Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import RegistrationPage from './pages/Registration';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/registration" exact element={<RegistrationPage />} />
        <Route path="/home" exact element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
