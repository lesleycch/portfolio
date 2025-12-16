import HRViz from "../components/HRViz.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import HR_pj_step1_1 from "../assets/images/projects/HR-pj-step1-1.png";
import HR_pj_step1_2 from "../assets/images/projects/HR-pj-step1-2.png";
import HRTestDoc from "../components/HRAnalyticsTestDoc.jsx";
import HRTestSQL from "../components/HRTestSQL";


export default function HRReport() {
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
        Project: HR Analytics Dashboard
      </div>

      {/* Description */}
    <div className="flex flex-col mb-8 mx-0 md:mx-12 lg:mx-36">
    {/* Summary */}
     <div className="font-semibold text-stone-700 mt-4">
       <p className="text-xl font-bold text-black"> Problem Statement  </p>
       <p className="my-2">The HR department lacked a clear and consolidated way to monitor key workforce metrics such as employee count, attrition rate, and demographic breakdowns. Without reliable KPIs, it was difficult to assess workforce stability, identify turnover trends, and plan for recruitment or retention efforts effectively.</p>
     </div>
    
    {/* Chart Purpose */}
     <div className="text-stone-700 font-semibold mt-10">
       <p className="text-xl font-bold text-black">Chart Purpose</p>
       <p className="my-2">To address these issues, I built an interactive Tableau dashboard that visualizes essential HR KPIs:</p>
        <ul className="list-disc ml-5">
            <li><span className="tag font-bold">Attrition by Gender / Age / Department / Education Field:</span> Reveals demographic patterns behind attrition. Identifies areas or groups with higher turnover, supporting targeted retention strategies. </li>
            <li><span className="tag font-bold">Employee Count and Age Distribution:</span> Provides visibility into workforce composition and resource planning. </li>
            <li><span className="tag font-bold">Job Satisfaction Ratings:</span> Highlights engagement trends for leadership to act on. </li>
        </ul>
     </div>

    {/* QA */}
     <div className="text-stone-700 font-semibold mt-10">
       <p className="text-xl font-bold text-black">Quality Assurance (QA) Testing</p>
       <p className="text-lg font-bold text-sky-900 mt-4 mb-2">Objectives:</p>
        <ul className="list-disc ml-5">
            <li><span className="font-bold tag">Functional Validation:</span> Verify that each feature functions according to the requirements, including all filters and action filters in the dashboard </li>
            <li><span className="font-bold tag">Data Validation:</span> Check data accuracy and quality by matching values displayed in the Tableau report with results from SQL queries </li>
            <li><span className="font-bold tag">Test Documentation:</span> Create a test document that includes screenshots and SQL queries used to validate the reports </li>
        </ul>
      <p className="mt-6 mb-2"><span className="text-lg font-bold text-sky-900">Steps:</span> </p>
      <ol className="list-decimal ml-5">
            <li> Created an HR database in PostgreSQL </li>
            <div className="grid grid-cols-1 gap-4 mt-6 mb-12">
                <img
                src={HR_pj_step1_1}
                alt="Created an HR database"
                className="w-260 h-auto object-cover rounded-xl" />
                <img
                src={HR_pj_step1_2}
                alt="Created an HR database"
                className="w-260 h-auto object-cover rounded-xl" />
            </div>
            <li className="mb-2"> Wrote and executed SQL queries to validate data accuracy and consistency  </li>
            <HRTestSQL />
            <li className="mb-4"> Developed a QA test document to evaluate the Tableau HR Analytics Dashboard, ensuring all features and data met functional and integrity standards </li>
            <HRTestDoc/>
        </ol>

     </div>

    {/* Tech Stack */}
     <div className="text-stone-700 font-semibold mt-16">
       <p className="text-xl font-bold text-black">Tech Stack</p>
        <ul className="list-disc ml-5 mt-2">
            <li><span className="tag font-bold">Tableau</span>: Data modeling, dashboard design, and data visualization</li>
            <li><span className="tag font-bold">CSV Data</span>: Raw HR data consolidatio and preprocessing</li>
            <li><span className="tag font-bold">PostgresSQL</span>: Served as the relational database to store and manage cleaned HR data for analysis </li>
            <li><span className="tag font-bold">SQL</span>: Used for querying, data validation, and cross-checking Tableau visualizations against source data </li>
            <li><span className="tag font-bold">JavaScript + React</span>: Integrated and embedded the Tableau dashboard into a responsive web application for presentation</li>
        </ul>
     </div>

    </div> 
      
      {/* Viz */}
    <div>
        <HRViz />
    </div>

    </section>
  );
}
