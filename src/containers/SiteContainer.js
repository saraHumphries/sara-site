import "./SiteContainer.css"
import Project from "../components/Project";
import vetGif from '../assets/images/vet_gif.gif';
import testGif from '../assets/images/test_gif.gif';
import coronaGif from '../assets/images/coronavirus_gif.gif';
import educationGif from '../assets/images/education_gif.gif';

const SiteContainer = function() {


const vetProject = {
    title: "Vet app",
    date: "June 2021",
    description: "A solo project using Flask/Python and an relational DB to store, update, read, delete data.",
    gitLink: "https://github.com/saraHumphries/vet_admin_app",
};

const psychometricTestProject = {
    title: "Psychometric test app",
    date: "June 2021",
    description: "Final solo full-stack project. Java (Spring) server-side, React.js client-side.",
    gitLink: "https://github.com/saraHumphries/psychometric_test_app",
};

const coronavirusProject = {
    title: "Corona virus data tracking app",
    date: " 2021",
    description: "A small JavaScript project using a .gov API to show the most recent covid 19 data.",
    gitLink: "https://github.com/saraHumphries/corona_virus_tracker",
};

const educationProject = {
    title: "Educational spelling app",
    date: "July 2021",
    description: "CodeClan - Week 9 - Group Project - App created using React, MongoDB and multiple APIs",
    gitLink: "https://github.com/ttinning/education_station",
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
                        <Project project = {coronavirusProject} gif={coronaGif}></Project>
                        <Project project = {educationProject} gif = {educationGif}></Project>
                        <Project project = {psychometricTestProject} gif = {testGif} ></Project>
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