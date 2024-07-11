import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import About from "./components/About";


const App = () => {
  useEffect(() => {
    Aos.init();

  }, [])

  return (
    <>
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <div className="container">

        <Home />
        <About></About>
        <Experience />
        <Skills />
        <Projects />
        <Contact />
       
      </div>
      
    </div>
    <footer className="footer footer-center bg-white text-base-content mt-5 p-4">
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Ruhul Amin</p>
          </aside>
        </footer>
    </>
  );
};

export default App;
