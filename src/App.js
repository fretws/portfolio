import './App.css';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Portfolio from './pages/Portfolio';
// import Research from './pages/Research';
import Education from './pages/Education';
// import Contact from './pages/Contact';
import Navigation from './components/structure/navigation/Navigation';
import Footer from './components/structure/footer/Footer'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from 'react-bootstrap/Container';

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
    path: "/portfolio",
    element: <Portfolio />
  },
  // {
  //   path: "/research",
  //   element: <Research />
  // },
  {
    path: "/education",
    element: <Education />
  },
  // {
  //   path: "/contact",
  //   element: <Contact />
  // },
])

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Container className='container-page-width'>
        <RouterProvider router={router} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
