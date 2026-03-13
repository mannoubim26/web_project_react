import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ROUTES } from './constants';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import Meal from './screens/Meal/Meal';
import Exercises from './screens/Exercises/Exercises';
import Progress from './screens/Progress/Progress';
import Profile from './screens/Profile/Profile';
import SignUp from './screens/SignUp/SignUp';
import AboutCoach from './screens/AboutCoach/AboutCoach';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.MEALS} element={<Meal />} />
          <Route path={ROUTES.EXERCISES} element={<Exercises />} />
          <Route path={ROUTES.PROGRESS} element={<Progress />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          <Route path={ROUTES.ABOUT} element={<AboutCoach />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
