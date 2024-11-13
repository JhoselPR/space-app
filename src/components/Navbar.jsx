import './Navbar.css'
import { Link } from 'react-router-dom';

function NavButton(props){
    return (
        <Link className='nav-btn' to={props.href}>
        {props.text}
        </Link>
    )
}

function Navbar({links}){//Pascal
    console.log(links);
    const title ='space-app';

    // const headerStyles = {
    //     fontSize: '2.5rem',
    //     margin: '2px',
    //     background: '-webkit-linear-gradient(#024caa, #ec8305)',
    //     WebkitBackgroundClip: 'text',
    //     WebkitTextFillColor: 'transparent',
    // }

    return (
        <nav>
        <div>
            <h1>{title}</h1>
        </div>
        {
            links.map((link, idx) => (
                <NavButton href={link.href} text={link.text} key={idx}/>
            ))
        }
        </nav>
    )
}

export default Navbar;