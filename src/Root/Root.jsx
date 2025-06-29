import { useEffect } from "react";
import AboutMe from "../Components/AboutMe";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Aos from "aos";
import "aos/dist/aos.css";

const Root = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="">
      <NavBar></NavBar>
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer></Footer>
    </div>
  );
};

export default Root;
