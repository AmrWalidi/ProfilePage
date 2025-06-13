import NavBar from "./Components/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact/>
      <Footer/>
    </>
  );
}
