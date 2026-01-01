import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Routes, Route } from "react-router";
import BlogsPage from "./pages/BlogsPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import NotFound from "./pages/NotFound.jsx";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Blogs" element={<BlogsPage />} />
      <Route path="/Experience" element={<ExperiencePage />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);