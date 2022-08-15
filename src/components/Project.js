import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Project = ({ projectData }) => {
  const { name, image, description, features, github, live } = projectData;

  return (
    <>
      <div className="project-area">
        <section className="project-image">
          <img src={image} alt="project_image" />
        </section>
        <section className="project-others">
          <section className="project_info">
            <h4>{name}</h4>
            <p>{description}</p>
          </section>
          <section className="project_feature">
            <h5>Features</h5>
            <ul>
              {features.map((value) => (
                <li>
                  <Stack direction="row">
                    <ArrowRightIcon style={{ color: "#00aa71" }} />
                    <Typography variant="body1">{value}</Typography>
                  </Stack>
                </li>
              ))}
            </ul>
          </section>
          <section className="link_section">
            <a href={live} target="_blank" rel="noreferrer">
              <section className="link">
                <LaunchIcon />
                <Typography variant="body1">Live</Typography>
              </section>
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <section className="link">
                <GitHubIcon />
                <Typography variant="body1">GitHub</Typography>
              </section>
            </a>
          </section>
        </section>
      </div>
    </>
  );
};
export default Project;
