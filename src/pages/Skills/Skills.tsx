import React, { useState } from "react";
import "./Skills.css";
import SkillTagSystem from "../../components/SkillTagSystem/SkillTagSystem";
import Footer from "../../components/Footer/Footer";
import useSkills from "./useSkills/useSkills";
import TauriIcon from "../../assets/img/Skills/tauri.png";
import Slide from "react-awesome-reveal";
import { Select, SelectOption } from "../../components/Select/Select";
import { Skill } from "../../components/Skill/Skill";

const skills: Skill[] = [
  {
    name: "JavaScript",
    categories: ["All", "Web", "Programming"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    categories: ["All", "Web", "Programming"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Java",
    categories: ["All", "Web", "Programming"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "MySQL",
    categories: ["All", "Database", "Relational Database"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "CSS3",
    categories: ["All", "Web"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "HTML5",
    categories: ["All", "Web"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "Tauri.js",
    categories: ["All", "Desktop", "Programming", "GUI-Design"],
    icon: TauriIcon,
  },
  {
    name: "Node.js",
    categories: ["All", "Web", "Programming", "Backend"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "React-Native",
    categories: ["All", "Mobile", "Programming"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "React",
    categories: ["All", "Web", "Frontend", "Programming"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Git",
    categories: ["All", "Versioncontrol"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Spring Boot",
    categories: ["All", "Web", "Programming", "Backend"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  {
    name: "Angular",
    categories: ["All", "Web", "Programming", "Frontend"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
  },
  {
   name: "Solid",
   categories: ["All", "Web", "Programming", "Frontend"],
   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidjs/solidjs-original.svg",
  },
];

const options = [
  { label: "All", value: 1 },
  { label: "Web", value: 2 },
  { label: "Programming", value: 3 },
  { label: "Relational Database", value:4 },
  { label: "Database", value:5 },
  { label: "Mobile", value: 6 },
  { label: "Desktop", value: 7 },
  { label: "Frontend", value: 8 },
  { label: "Backend", value: 9 },
  { label: "Testing", value: 10 },
  { label: "Versioncontrol", value: 11 },
];

const Skills: React.FC = () => {
  const { shuffle } = useSkills();
  const [selectedTags, setSelectedTags] = useState<SelectOption[]>([
    options[0],
  ]);

  return (
    <>
      <div className="expertise-container">
        <div className="title">
          <h1>
            &lt;<span id="title">expertise</span>/&gt;
          </h1>
        </div>
        <div className="expertise">
          <div className="taginput-wrapper">
            <Select
              multiple
              options={options}
              value={selectedTags}
              onChange={(o) => setSelectedTags(o)}
            />
          </div>
          <br />
          <div className="skills">
            <SkillTagSystem tags={selectedTags} skills={shuffle(skills)} />
          </div>
        </div>
      </div>
      <Slide className="fadeprojects" cascade triggerOnce damping={0.9}>
        <p id="quote">
          <span id="quotestyle">
            Learn continually - there's always "one more thing" to learn! <br />
          </span>{" "}
          ~ Steve Jobs
        </p>
      </Slide>
      <Footer />
    </>
  );
};

export default Skills;
