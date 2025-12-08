import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Layout from "./layouts/Layout";
import Projects from "./pages/Projects";
import PMDashboard from "./pages/PMDashboard";


createRoot(document.getElementById('root')).render(
    <StrictMode>
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/PM-dashboard-reporting" element={<PMDashboard />} />
          <Route path="*" element={<div style={{ padding: 40 }}>404 — Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)