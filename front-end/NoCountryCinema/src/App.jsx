import MoviesContainer from './components/MoviesSection/MoviesContainer';
import './App.css';
import { Carro } from './components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Carro />
      <MoviesContainer title="PELÍCULAS" />
      <MoviesContainer title="PRÓXIMOS ESTRENOS" />
    </div>
  );
}

export default App;
