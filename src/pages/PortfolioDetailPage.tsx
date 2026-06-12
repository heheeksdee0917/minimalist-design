import { useParams, Link, Navigate } from "react-router-dom";
import { getProjectById } from "../lib/projects";
import ImagePlaceholder from "../components/ImagePlaceholder";

export default function PortfolioDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <main className="max-w-content mx-auto">
      <Link
        to="/portfolio"
        className="absolute top-6 left-6 nav-link z-50"
      >
        Back to Work
      </Link>

      <ImagePlaceholder
        aspectRatio="16/9"
        alt={project.name}
        src={project.image}
        className="w-full"
      />

      <section className="px-6 pt-12 pb-20">
        <h1 className="text-section-heading max-sm:text-section-heading-mobile text-text-primary mb-4">
          {project.name}
        </h1>

        <div className="flex items-center gap-4 mb-6">
          <p className="text-sm text-muted tracking-heading">
            {project.location}
          </p>
          <span className="text-muted">×</span>
          <p className="text-sm text-muted tracking-heading">{project.year}</p>
        </div>

        <span className="section-label">{project.type}</span>

        <div className="grid grid-cols-2 gap-2 mt-12">
          <ImagePlaceholder
            aspectRatio="4/3"
            alt={`${project.name} detail 1`}
            src={project.image}
          />
          <ImagePlaceholder
            aspectRatio="4/3"
            alt={`${project.name} detail 2`}
            src={project.image}
          />
          <ImagePlaceholder
            aspectRatio="4/3"
            alt={`${project.name} detail 3`}
            src={project.image}
          />
          <ImagePlaceholder
            aspectRatio="4/3"
            alt={`${project.name} detail 4`}
            src={project.image}
          />
        </div>
      </section>
    </main>
  );
}
