
import {Link} from 'react-router-dom';
import './style.css';

const Home = () => {
    return (
        <div className="Home">
            <div className="Title">
                <h1>
                    <p>HELLO...</p>
                    <p>I am SAI HARNADH</p> 
                    <p>| Web Developer | Front End Developer |</p>
                </h1>
                <Link to="/about">
                    <button>More About Me</button>
                </Link>
            </div>
            <div className="Person">
                <img src="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png" alt="my_profile"/>
            </div>
            
        </div>
    );
};

export default Home;
