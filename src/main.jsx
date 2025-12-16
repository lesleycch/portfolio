import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Layout from "./layouts/Layout";
import Projects from "./pages/Projects";
import PMReport from "./pages/PMReport";
import HRReport from "./pages/HRReport";
import About from "./pages/About.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/PM-dashboard" element={<PMReport />} />
           <Route path="projects/HR-dashboard" element={<HRReport />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<div style={{ padding: 40 }}>404 — Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)