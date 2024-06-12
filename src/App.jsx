import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/heroSection/Hero'
import Testimony from './components/testimony/Testimony'
import Solution from './components/solution/Solution'
import Mission from './components/mission/Mission'
import Personal from './components/personal/Personal'
import Need from './components/need/Need'
import Footer from './components/footer/Footer'
import Download from './components/download/Download'
import Contact from './components/contact/Contact'


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Testimony/>
      <Solution/>
      <Mission/>
      <Personal/>
      <Need/>
      <Contact/>
      <Download/>
      <Footer/>
    </>
  )
}

export default App
