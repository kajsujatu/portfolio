import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find(
    item => item.slug === slug
  );

  if (!project) {
    return <h1>Projekt nie istnieje</h1>;
  }

  const currentIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  const nextProject =
    projects[(currentIndex + 1) % projects.length];

  return (
    <div className="project-page">

      <section className="grid grid-cols-[30%_70%] gap-10 items-start max-md:grid-cols-1 px-6">
        <h2 className="m-0">{project.title}</h2>

        <div className="text-left">


          <div
            dangerouslySetInnerHTML={{
              __html: project.content?.text || "",
            }}
          />
          <p className="m-0">
            {project.content?.link && (
              <p className="mt-2">
                Link do strony: <a
                  href={project.content.link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>{project.content.link.label}</b>
                </a>
              </p>
            )}
          </p>
        </div>
      </section>

      <section className="project-grid">
        {project.images?.slice(1).map((img, index) => {
          const description = project.description?.[index + 1];

          return (
            <div key={index} className="flex flex-col gap-2">
              <img
                src={img}
                alt={`${project.title} ${index + 2}`}
              />

              {description && (
                <p className="text-sm opacity-70">
                  {description}
                </p>
              )}
            </div>
          );
        })}
      </section>

      <section className="next-project">
        <Link to={`/projekt/${nextProject.slug}`}>
          <span><b>Następny projekt:</b> {nextProject.title}</span>
        </Link>
      </section>

    </div>
  );
}

export default ProjectDetail;