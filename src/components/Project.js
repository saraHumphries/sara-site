
const Project = function({project, gif}) {
    return (
        <div className='project'>
            <h2>{project.title}</h2>
            <img src={gif} alt='Vet app gif demo'></img>
            <p>{project.description}</p>
            <a href={project.gitLink}>Link to GitHub repo</a>
        </div>
    );
};

export default Project;