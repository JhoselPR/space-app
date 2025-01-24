import './About.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Astronaut from '../../assets/2130.jpg';

const About = () => {
    return (
        <div className='about'>
            <div className='about-content'>
                <h1 className="about-title">About</h1>
                <h4>Hi!👋,</h4>
                <p className='about-text'>I'm Jhosel, the developer behind space-app. I'm passionate about creating innovative, functional solutions with Fullstack experience. Always focused on continuous learning, I aim to improve and contribute to impactful projects. Ready for the next challenge!</p>

                <a href="https://github.com/JhoselPR" target='_blank'><GitHubIcon className='icon' sx={{ fontSize: 40 }} /></a>
                <a href="https://www.linkedin.com/in/jhosel" target='_blank'><LinkedInIcon className='icon' sx={{ fontSize: 40 }} /></a>
                <a href="mailto: felix.jhosel@gmail.com"><EmailIcon className='icon' sx={{ fontSize: 40 }} /></a>
            </div>
            <div className="about-img">
                <img src={Astronaut} alt="astronaut drawing" />
            </div>
        </div>
    )
}

export default About