import Project from "./Project";
import projectsData from "../data/projects";

export default function ScrollPortfolio() {
  return (
    <section id="works" className="px-8 py-12">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {projectsData.map((project) => (
          <Project key={project.id} {...project} />
        ))}

      </div>

    </section>
  );
}