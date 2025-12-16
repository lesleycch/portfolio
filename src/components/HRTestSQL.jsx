import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function HRTestSQL() {

  return (
    <div className="">
   <SyntaxHighlighter
            language="sql"
            customStyle={{
              margin: 0,
              padding: "2rem",
              height: "100%",
              borderRadius: "20px",
              background: "#f6f7fe",
              backdropFilter: "blur(10px)",
              marginBottom: 50,
            }}
            style={base16AteliersulphurpoolLight}
          >
            {`
-- Employee Count:
SELECT SUM(employee_count) AS employee_Count FROM hrdata

-- Attrition Count:
SELECT COUNT(attrition) FROM hrdata WHERE attrition='Yes';

-- Attrition Rate:
SELECT ROUND (((SELECT COUNT(attrition) FROM hrdata WHERE attrition='Yes')/SUM(employee_count)) * 100,2) FROM hrdata;

-- Active Employee:
SELECT (SELECT SUM(employee_count) FROM hrdata) - COUNT(attrition) AS active_employee FROM hrdata
WHERE attrition='Yes';

-- Average Age:
SELECT ROUND(AVG(age),0) FROM hrdata;

-- Attrition by Gender
SELECT gender, COUNT(attrition) AS attrition_count FROM hrdata
WHERE attrition='Yes'
GROUP BY gender
ORDER BY COUNT(attrition) DESC;

-- Department-wise Attrition:
SELECT department, COUNT(attrition), ROUND((CAST (COUNT(attrition) AS numeric) / 
(SELECT COUNT(attrition) FROM hrdata WHERE attrition= 'Yes')) * 100, 2) AS pct FROM hrdata
WHERE attrition='Yes'
GROUP BY department 
ORDER BY COUNT(attrition) DESC;

-- Number of Employee by Age Group
SELECT age, SUM(employee_count) AS employee_count FROM hrdata
GROUP BY age
ORDER BY age;

-- Education Field wise Attrition:
SELECT education_field, COUNT(attrition) AS attrition_count FROM hrdata
WHERE attrition='Yes'
GROUP BY education_field
ORDER BY count(attrition) DESC;

-- Attrition Rate by Gender for different Age Group
SELECT age_band, gender, COUNT(attrition) AS attrition, 
ROUND((cast(count(attrition) AS numeric) / (SELECT COUNT(attrition) FROM hrdata where attrition = 'Yes')) * 100,2) AS pct
FROM hrdata
WHERE attrition = 'Yes'
GROUP BY age_band, gender
ORDER BY age_band, gender DESC;

-- Job Satisfaction Rating
CREATE EXTENSION IF NOT EXISTS tablefunc;

SELECT *
FROM crosstab(
  'SELECT job_role, job_satisfaction, SUM(employee_count)
   FROM hrdata
   GROUP BY job_role, job_satisfaction
   ORDER BY job_role, job_satisfaction'
	) AS ct(job_role varchar(50), one numeric, two numeric, three numeric, four numeric)
ORDER BY job_role;
            `}
            </SyntaxHighlighter>
    </div>
  );
}




