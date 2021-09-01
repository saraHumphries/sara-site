import "./SiteContainer.css"
import Project from "../components/Project";
import vetGif from '../assets/images/vet_gif.gif';
import testGif from '../assets/images/test_gif.gif';

const SiteContainer = function() {


const vetProject = {
    title: "Vet app",
    date: "June 2021",
    description: "A solo project using Flask/Python and an relational DB to store, update, read, delete data.",
    gitLink: "https://github.com/saraHumphries/vet_admin_app",
};

const PsychometricTestProject = {
    title: "Psychometric test app",
    date: "August 2021",
    description: "Final solo full-stack project. Java (Spring) server-side, React.js client-side.",
    gitLink: "https://github.com/saraHumphries/psychometric_test_app",
};




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
                        <Project project = {PsychometricTestProject} gif = {testGif} ></Project>
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