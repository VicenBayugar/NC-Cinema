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
          <AppRoutes/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;