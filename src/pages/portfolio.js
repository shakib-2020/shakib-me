import React, { useEffect, useState } from "react";
import Project from "../components/Project";

function Portfolio() {
  const [projects, setProject] = useState([]);

  const getProjects = () => {
    fetch("json/projects.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => setProject(data.projects));
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div id="portfolio" className="">
      <section className="p-3">
        <h4 className="font-weight-bold text-primary-default display-inline">
          Some Of My Recent Projects
        </h4>
        {projects.map((data) => (
          <Project projectData={data} />
        ))}
      </section>
    </div>
  );
}

export default Portfolio;
