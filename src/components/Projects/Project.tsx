import React from "react";
import "./Project.css";
import ProjectLink from "../ProjectLink/ProjectLink";

interface ProjectProps {
  title: string;
  languages: Array<string>;
  images?: Array<string>;
  githubLink: string;
  weblink?: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  languages,
  images,
  description,
  githubLink,
  weblink,
}) => {
  return (
    <>
      <div className="modal"></div>
      <div className="project-card">
        <div className="project-information">
          <p className="project-title-tags">
            &lt;<span className="project-title">{title}</span>/&gt;
          </p>
          <div className="project-description-container">
            <p className="project-description">{description}</p>
            <div className="project-technologies">
              {languages.map((value, key) => {
                return (
                  <>
                    <div className="project-language-wrapper" key={key}>
                      <p className="project-language">{value}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="project-linkings-wrapper">
            <ProjectLink githubLink={githubLink} weblink={weblink} />
          </div>
        </div>
        {images ? (
          <div className="imageContainer">
            {images.map((value, key) => {
              return (
                <>
                  <div className="project-img-wrapper" key={key}>
                    <img
                      className="project-img"
                      src={value}
                      alt="project-image"
                    />
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Project;
