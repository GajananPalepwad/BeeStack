import React, { useEffect, useState } from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { getProjects } from "../api/projects.api";

/* ICONS POOL */
const projectIcons = [
  "/images/forward.png",
  "/images/team.png",
  "/images/heart.png",
  "/images/fingerprint.png",
  "/images/secure.png",
];

/* STABLE ICON PICKER */
const getProjectIcon = (id) => {
  return projectIcons[id % projectIcons.length];
};

const Products = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data.projects || []);
      } catch (err) {
        console.error("Failed to load projects", err);
        setProjects([]);
      }
    }
    fetchProjects();
  }, []);

  return (
    <>
      <Navbar />

      <div className="headingWork pl-28">OUR WORK</div>

      <div className="container">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <ul>
            <li className="unhighlighted font-bold">
              <Link to="/our-work">The Concept</Link>
            </li>
            <li className="unhighlighted font-bold">
              <Link to="/our-work/technique">Technique</Link>
            </li>
            <li className="unhighlighted font-bold">
              <Link to="/our-work/technology">Technology</Link>
            </li>
            <li className="highlighted font-bold">
              <Link to="/our-work/products">Tech we've built</Link>
            </li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <main className="main-content HT">
          <p className="tagline">
            <b>We build impactful products that scale globally.</b>
          </p>

          <h1>Tech We’ve Built</h1>

          <div className="section">
            <p>
              BeeStack is a product engineering company that helps clients
              deliver high-volume, high-impact products used by millions.
            </p>
            <p>Here are some of the projects we’ve successfully executed.</p>
          </div>

          {/* PROJECTS */}
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <h2 className="section-title">
                  {project.title}
                  <img
                    src={getProjectIcon(project.id)}
                    alt="project icon"
                    className="icon"
                  />
                </h2>

                <p className="duration">{project.duration}</p>

                <p>{project.description.slice(0, 140)}...</p>

                <p
                  className="read-more"
                  onClick={() => setSelectedProject(project)}
                >
                  Read more…
                </p>
              </div>
            ))}
          </div>

          <div className="section disclaimer">
            <p>
              <b>Disclaimer:</b> Customer and product names, trademarks, and logos
              used on this website are intellectual property of their respective
              owners.
            </p>
          </div>
        </main>
      </div>

      <Footer />

      {/* MODAL */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal premium-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            {selectedProject.image && (
              <div className="modal-image-wrapper">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="modal-image"
                />
              </div>
            )}

            <div className="modal-content">
              <h2 className="modal-title">
                {selectedProject.title}
              </h2>

              <p className="modal-duration">
                {selectedProject.duration}
              </p>

              <p className="modal-description">
                {selectedProject.description}
              </p>

              {selectedProject.technologies?.length > 0 && (
                <>
                  <h4 className="tech-heading">Technologies Used</h4>
                  <ul className="tech-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
