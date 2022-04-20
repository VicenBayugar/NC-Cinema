import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile/Profile';
import MovieDetails from './pages/MovieDetail/MovieDetails';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import {Login} from './pages/LoginPage/Login'




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/detalle/:title' element={<MovieDetails />} />
          <Route path='/profile' element={<Profile/>}/>
     

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;