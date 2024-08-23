import './App.css'
import Hero from './sections/Hero/Hero.jsx'
import Nav from './sections/Navigation Bar/Nav.jsx'
import About from './sections/About Me/About.jsx'
import Contact from './sections/Contact/Contact.jsx'
import Footer from './sections/Footer/Footer.jsx'
import Resume from './sections/Resume/Resume.jsx'


function App() {
  
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>
    </>

  )
}

export default App;
