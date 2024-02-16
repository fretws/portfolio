import './App.css';
import Home from './pages/Home';
import Navigation from './components/structure/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
    </div>
  );
}

export default App;
