import { motion } from "framer-motion";
import PMViz from "../components/PMViz.jsx";
// import PMDashboard from "../assets/images/projects/PM_dashboard.png";
import Breadcrumbs from "../components/Breadcrumbs.jsx";


export default function PMDashboard() {
  return (
    <section className="px-10 md:px-16 pt-6">
      {/* Breadcrumbs */}
      <div
        className="text-2xl font-bold mb-10"
      >
        <Breadcrumbs />
      </div>

      {/* Page Title */}
      <div className="text-2xl font-semibold mb-10">
        Project: PM Dashboard Reporting
      </div>

      {/* Description */}
    <div className="flex flex-col mb-8 mx-0 md:mx-12 lg:mx-36">
    {/* Summary */}
     <div className="font-semibold text-stone-700 mt-4">
       <p className="text-xl font-bold text-black">Summary</p>
       <p className="my-2">I designed this interactive Project Management Dashboard using Tableau to visualize essential project metrics, including project types, volume, progress status, budget utilization, and KPIs. This dashboard enables clear, efficient progress communication by turning raw data into intuitive visual insights for faster informed decision-making.</p>
     </div>
    
    {/* Goal */}
     <div className="font-semibold text-stone-700 mt-10">
       <p className="text-xl font-bold text-black">Goal</p>
       <p className="my-2">The goal of this dashboard is to support project reporting and decision-making by:</p>
        <ul className="list-disc ml-5">
            <li>Providing an at-a-glance overview of allprojects</li>
            <li>Highlighting latest progress, budget utilization, and KPIs</li>
            <li>Allowing stakeholders to interact with data through filters, drill-downs, and dynamic views</li>
            <li>Streamlining progress updates across teams with a single, centralized reporting tool</li>
        </ul>
     </div>

    {/* Tech Stack */}
     <div className="font-semibold text-stone-700 mt-10">
       <p className="text-xl font-bold text-black">Tech Stack</p>
        <ul className="list-disc ml-5 my-2">
            <li><span className="tag font-bold">Tableau</span>: Data modeling, dashboard design, visualization</li>
            <li><span className="tag font-bold">CSV Data</span>: Raw project data consolidation</li>
            <li><span className="tag font-bold">JavaScript + React</span>: Embedding the dashboard into the web application</li>
        </ul>
     </div>

    </div> 
      
      {/* Viz */}
    <div>
        <PMViz />
    </div>

    </section>
  );
}
