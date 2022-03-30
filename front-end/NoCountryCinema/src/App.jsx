import MoviesContainer from './components/MoviesSection/MoviesContainer'
import "./App.css";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesContainer/>
      <Footer/>
    </div>
  );
}

export default App;
