import { useState } from "react";
import { Link } from "react-router-dom";
import { getProjectsByType, type ProjectType } from "../lib/projects";
import ImagePlaceholder from "../components/ImagePlaceholder";

const filterOptions: Array<ProjectType | "All"> = [
  "All",
  "Residential",
  "Commercial",
  "Mixed-Use",
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectType | "All">("All");
  const filteredProjects = getProjectsByType(activeFilter);

  return (
    <main className="max-w-content mx-auto px-6 pt-20 max-sm:pt-16">
      <h1 className="text-display-medium max-sm:text-page-title-mobile text-text-primary mb-16 max-sm:mb-12">
        Work
      </h1>

      <nav className="mb-10" aria-label="Project filters">
        <ul className="flex gap-6 max-sm:gap-4">
          {filterOptions.map((filter) => (
            <li key={filter}>
              <button
                onClick={() => setActiveFilter(filter)}
                className={`uppercase text-muted hover:text-text-primary transition-colors duration-200 ${
                  activeFilter === filter
                    ? "font-semibold text-text-primary underline underline-offset-4"
                    : ""
                }`}
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  fontWeight: activeFilter === filter ? 600 : 400,
                }}
              >
                {filter === "Mixed-Use" ? "MIXED-USE" : filter.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid grid-cols-3 gap-2 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {filteredProjects.map((project) => (
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
                <h2 className="text-base text-text-primary font-normal mb-0.5">
                  {project.name}
                </h2>
                <p className="text-sm text-muted">{project.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
