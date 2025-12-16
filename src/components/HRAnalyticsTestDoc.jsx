import testdoc from "../assets/pdf/projects/HR_Analytics_SQL_Test_Document.pdf"
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function HRTestDoc() {
  const [numPages, setNumPages] = useState(null);

  return (
    <div className="rounded-xl bg-white w-full max-w-4xl">
    <div className="pdf-wrapper">
    <Document
      file={testdoc}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
    >
      {Array.from(new Array(numPages), (_, i) => (
        <Page key={i} pageNumber={i + 1} />
      ))}
    </Document>
    </div>
    </div>
  );
}




