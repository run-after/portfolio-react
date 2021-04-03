import './styles/App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;