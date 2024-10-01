import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "./components/css/styles.css";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'


function App() {

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root>
    <div className="App">
      <header>
      <Navbar/>
      </header>
      <main>
      <Home/>
      <Projects/>
      </main>
    </div>
    </ReactLenis>
  );
}

export default App;
