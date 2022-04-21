import { BrowserRouter as Router} from 'react-router-dom'
//styles
import "./App.css";
//Components
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import AppRoutes from './Rutas/AppRoutes';





function App() {
  return (
    <div className="App">
      <Router>
        <Header />
<<<<<<< HEAD
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/detalle/:title' element={<MovieDetails />} />
          <Route path='/profile' element={<Profile/>}/>
     

        </Routes>
=======
          <AppRoutes/>
>>>>>>> d4104d44249be56b15530e1f33cc1d3aa0ed7ee9
        <Footer />
      </Router>
    </div>
  );
}

export default App;