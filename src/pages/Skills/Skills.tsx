import React, { useState } from "react";
import "./Skills.css";
import SkillTagSystem from "../../components/SkillTagSystem/SkillTagSystem";
import Footer from "../../components/Footer/Footer";
import useSkills from "./useSkills/useSkills";
import TauriIcon from "../../assets/img/Skills/Tauri.png";
import Rust from "../../assets/img/Skills/Rust.png";
import Scrum from "../../assets/img/Skills/Scrum.png";
import Iperka from "../../assets/img/Skills/Iperka.png";
import Cypress from "../../assets/img/Skills/Cypress.jpg";
import UML from "../../assets/img/Skills/uml.png";
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
  { name: "Rust", categories: ["All", "Programming"], icon: Rust },
  {
    name: "C#",
    categories: ["All", "Web", "Programming"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
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
    name: "Firebase",
    categories: ["All", "Database", "NoSQL-Database"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
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
    name: "WPF",
    categories: ["All", "Desktop", "Programming", "GUI-Design"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
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
  { name: "UML", categories: ["All", "Architecture"], icon: UML },
  {
    name: "SCRUM",
    categories: ["All", "Projectmanagement", "Agile"],
    icon: Scrum,
  },
  {
    name: "IPERKA",
    categories: ["All", "Projectmanagement", "Waterfall"],
    icon: Iperka,
  },
  {
    name: "React-Native",
    categories: ["All", "Mobile", "Programming"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Flutter",
    categories: ["All", "Mobile", "Programming"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Dart",
    categories: ["All", "Mobile", "Programming"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },
  {
    name: "Cypress",
    categories: ["All", "Web", "Testing", "Frontend"],
    icon: Cypress,
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
];

const options = [
  { label: "All", value: 1 },
  { label: "Web", value: 2 },
  { label: "Programming", value: 3 },
  { label: "Projectmanagement", value: 4 },
  { label: "Agile", value: 5 },
  { label: "Waterfall", value: 6 },
  { label: "Relational Database", value: 7 },
  { label: "Database", value: 8 },
  { label: "GUI-Design", value: 9 },
  { label: "Architecture", value: 10 },
  { label: "Mobile", value: 11 },
  { label: "Desktop", value: 12 },
  { label: "Frontend", value: 13 },
  { label: "Backend", value: 14 },
  { label: "Testing", value: 15 },
  { label: "Versioncontrol", value: 16 },
  { label: "NoSQL-Database", value: 17 }
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
