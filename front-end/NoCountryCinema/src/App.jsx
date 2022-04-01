import MoviesContainer from './components/MoviesSection/MoviesContainer'
import "./App.css";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import {Carro} from './components/Carousel/Carousel'
import { DropdownSection } from './components/DropdownBoxes/DropdownSection';

function App() {
  return (
    <div className="App">
      <Header />
      <DropdownSection />
      <Carro />
      <MoviesContainer title='PELÍCULAS'/>
      <MoviesContainer title='PRÓXIMOS ESTRENOS'/>
      <Footer/>
    </div>
  );
}

export default App;
