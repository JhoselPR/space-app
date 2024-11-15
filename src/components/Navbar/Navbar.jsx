import './Navbar.css'
import { Link } from 'react-router-dom';

function NavButton(props) {
    return (
        <Link className='nav-btn' to={props.href}>
            {props.text}
        </Link>
    )
}

function Navbar({ links }) {
    console.log(links);
    const title = 'space-app';

    return (
        <header className='header'>
            <Link className='title' to="/">space-app</Link>
            <nav className="navbar">
                {
                    links.map((link, idx) => (
                        <NavButton href={link.href} text={link.text} key={idx} />
                    ))
                }
            </nav>
        </header>
    )
}

export default Navbar;