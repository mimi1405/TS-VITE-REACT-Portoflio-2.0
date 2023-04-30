import React from "react";
import "./ProjectLink.css";
import { AiFillGithub } from "react-icons/ai";
import { FiLink } from "react-icons/fi";

interface ProjectLinkProps {
  githubLink: string;
  weblink?: string;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ githubLink, weblink }) => {
  return weblink ? (
    <>
      <div className="iconwrapper">
        <a href={githubLink}>
          <AiFillGithub className="github" />
        </a>
        <a href={weblink}>
          <FiLink className="web" />
        </a>
      </div>
    </>
  ) : (
    <>
      <div className="iconwrapper">
        <a href={githubLink}>
          <AiFillGithub className="github" />
        </a>
      </div>
    </>
  );
};

export default ProjectLink;
