import './App.css';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Projects from './pages/Projects';
import Research from './pages/Research';
import Education from './pages/Education';
import Socials from './pages/Socials';
import Navigation from './components/structure/navigation/Navigation';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/research",
    element: <Research />
  },
  {
    path: "/education",
    element: <Education />
  },
  {
    path: "/socials",
    element: <Socials />
  },
])

function App() {
  return (
    <div className="App">
      <Navigation/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
