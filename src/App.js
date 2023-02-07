import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ContactForm from './components/ContactForm';
import Education from './components/Education';

function App() {
  return (
    <>
    <Header/>   
    <Hero/> 
    <About/>
    <Projects/>
    <Education/>
    {/* <Blog/> */}
    <Contact/>
    <ContactForm/>
    <Footer/>
    <BackToTop/>
    </>
  );
}

export default App;
