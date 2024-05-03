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
        <a title={githubLink = "" ? "Not available currently." : githubLink} target={"_blank"} href={githubLink}>
          <AiFillGithub className="github" />
        </a>
        <a title={weblink} target={"_blank"} href={weblink}>
          <FiLink className="web" />
        </a>
      </div>
    </>
  ) : (
    <>
      <div className="iconwrapper">
        <a target={"_blank"} href={githubLink}>
          <AiFillGithub className="github" />
        </a>
      </div>
    </>
  );
};

export default ProjectLink;
