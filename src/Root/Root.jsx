import AboutMe from "../Components/AboutMe";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const Root = () => {
    return (
       
            <div className='bg-background min-h-screen max-w-[2500px] mx-auto '>
            <NavBar></NavBar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
      
        
    );
};

export default Root;