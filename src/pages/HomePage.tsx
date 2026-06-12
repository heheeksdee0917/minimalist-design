import { Link } from "react-router-dom";
import { getFeaturedProjects } from "../lib/projects";
import ImagePlaceholder from "../components/ImagePlaceholder";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects(4);

  return (
    <main>
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-display-large max-sm:text-display-mobile text-text-primary mb-6">
            minimalist design
          </h1>
          <p className="text-base text-muted tracking-heading">
            Design + Space Planner
          </p>
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group relative block"
            >
              <ImagePlaceholder
                aspectRatio={project.aspectRatio}
                alt={project.name}
                src={project.image}
              />
              <div className="absolute inset-0 hover-overlay flex items-end p-4">
                <div>
                  <h3 className="text-base text-text-primary font-normal mb-0.5">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted">{project.location}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="text-sm text-muted hover:text-text-primary transition-colors duration-200"
          >
            View all work
          </Link>
        </div>
      </section>
    </main>
  );
}
