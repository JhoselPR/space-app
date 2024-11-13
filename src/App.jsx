import './App.css';
import Navbar from './components/Navbar.jsx';
import Astros from './components/Astros.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  const links = [
    { href: '/', text: 'home'},
    { href: '/astros', text: 'astros'},
    { href: '/apod', text: 'apod'},
  ]

  return (
    <>
    <Navbar links = {links}/>
    <Routes>
      <Route element={<Astros/>} path="/astros"/>
    </Routes>
    </>
  )
}

export default App;
