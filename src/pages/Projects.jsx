import { Link } from "react-router-dom";
import PMReport from "../assets/images/projects/PM_report.png";
import HRReport from "../assets/images/projects/HR_report.png";
import Breadcrumbs from "../components/Breadcrumbs.jsx";

const projects = [
    {
    title: "HR Analytics Dashboard",
    description:
      "This Tableau dashboard visualizes key HR metrics such as employee attrition, satisfaction, and demographics. It enables HR teams to track workforce trends, identify areas of high turnover, and make data-driven decisions for talent management.",
    image: HRReport,
    tech: ["Tableau", "Dashboard Design", "Project Management", "QA Testing", "SQL", "PostgreSQL", "Functional Validation", "Data Validation"],
    link: "/projects/HR-dashboard"
  },
  {
    title: "PM Dashboard Reporting",
    description:
      "Built an interactive Tableau dashboard that transforms raw project data into a clear, actionable decision-making tool, delivering rapid situational insights and facilitating team discussion and decision quality.",
    image: PMReport,
    tech: ["Tableau", "Dashboard Design", "Project Management"],
    link: "/projects/PM-dashboard"
  },
];

export default function Projects() {
  return (
    <section className="px-10 md:px-16 pt-6">
      {/* Breadcrumbs */}
      <div className="text-2xl font-bold mb-10">
        <Breadcrumbs />
      </div>

      {/* Page Title */}
      <div className="text-2xl font-semibold mb-10">
        Data Analytics and Visualization 
      </div>
      
      {/* Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
      {projects.map((project, i) => (
        <Link key={i} to={project.link}>
        <div
          key={i}
          className="project-card w-full h-auto object-cover overflow-hidden scale-100 hover:scale-101 transition-transform duration-300 rounded-xl"
        >
     
          <div
            className="project-image bg-cover bg-center"
            style={{ backgroundImage: `url('${project.image}')`,
            height: 260 }}
          />

          <h3>{project.title}</h3>

          <p className="text-stone-600">{project.description}</p>

          <div className="project-tech">
            {project.tech.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>
        </div>
        </Link>
      ))}
      </div>


    </section>
  );
}
