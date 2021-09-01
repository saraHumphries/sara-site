import "./SiteContainer.css"
import Project from "../components/Project";
import vetGif from '../assets/images/vet_gif.gif';

const SiteContainer = function() {

// const vetImage = require('../assets/images/vet_gif.gif').default;

const vetProject = {
    title: "Vet app",
    date: "June 2021",
    description: "A solo project using Flask/Python and an relational DB to store, update, read, delete data.",
    gitLink: "https://github.com/saraHumphries/vet_admin_app",
    gifImage: {vetGif}
};

// console.log('image', vetProject.gifImage);



    return (
        <div id="site-container">
            <header>
                <nav>
                    <a href='/'>home</a>
                </nav>
                <h1>Sara site</h1>
            </header>
            <main>
                <section id='intro-section'></section>
                <h2>Intro title</h2>
                <p>blurb</p>
                <section id='project-section'>
                    <div id='projects'>
                        <Project project = {vetProject} gif = {vetGif}></Project>
                        
                    </div>
                </section>
            </main>
            <footer>
                <p>footer</p>
            </footer>
        </div>
    );
};

export default SiteContainer;