import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
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
          <Route path='/details' element={<MovieDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;