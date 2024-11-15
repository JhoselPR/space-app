import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Astros from './components/Astros/Astros.jsx';
import Apod from './components/Apod/Apod.jsx';
import { Routes, Route } from 'react-router-dom';
import Starfield from 'react-starfield';
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

function App() {
  const links = [
    { href: '/home', text: 'home'},
    { href: '/about', text: 'about'},
    { href: '/astros', text: 'astros'},
    { href: '/apod', text: 'apod'}
  ]

  return (
    <>
    <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
    <Navbar links = {links}/>
    <Routes>
      <Route element={<Astros/>} path="/astros"/>
      <Route element={<Home/>} path="/home"/>
      <Route element={<About/>} path="/about"/>
      <Route element={<Apod/>} path="/apod"/>
    </Routes>
    </>
  )
}

export default App;
