import MoviesContainer from './components/MoviesSection/MoviesContainer'
import "./App.css";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import {Carro} from './components/Carousel/Carousel'
import MoviesMain from './components/MoviesSection/MoviesMain';

function App() {
  return (
    <div className="App">
      <Carro />
      <MoviesMain />
      <MoviesContainer title='PRÓXIMOS ESTRENOS'/>
      <Footer/>
    </div>
  );
}

export default App;
