import './Home.css';

const Home = () => {
    return (
        <div className='home-content'>
            <h1 class='home-title'>Welcome to space-app!</h1>
            <p className="home-text">
            Discover a fascinating image of the cosmos every day and find out in real-time which astronauts are currently in space. The universe is closer than you think! 🚀✨</p>
            <img src="src\assets\rb_8894.png" alt="astronaut drawing" className='home-img' />
        </div>
    )
}

export default Home