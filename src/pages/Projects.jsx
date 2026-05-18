import projects from "../data/projects";
import { Link } from "react-router-dom";

function Projects() {
  return (

    <>

      <section id="center">
        <div className="top-content">
          <h2>Chcesz ze mną współpracować?</h2>
          <a href="mailto:michalmatwijow@gmail.com">Napisz</a> lub  <a href="tel:+48510846440">zadzwoń</a>
        </div>
      </section>
      <div
        id="works"
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-8 py-12"
      >
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projekt/${project.slug}`}
          >
            <div className="card">
              <img
                src={project.images?.[0]}
                alt={project.title}
              />


              <div className="overlay">
                <h2>{project.title}</h2>
                <p>Zobacz projekt</p>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Projects;