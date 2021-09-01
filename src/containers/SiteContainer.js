import "./SiteContainer.css"
import Project from "../components/Project";

const SiteContainer = function() {
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
                        <Project></Project>
                        <Project></Project>
                        <Project></Project>
                        <Project></Project>
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