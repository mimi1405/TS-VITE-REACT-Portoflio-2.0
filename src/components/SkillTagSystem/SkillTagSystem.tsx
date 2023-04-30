import React, { useState, useEffect } from "react";
import "./SkillTagSystem.css";
import { Skill } from "../Skill/Skill";
import { SelectOption } from "../Select/Select";
import Fade from "react-awesome-reveal";

interface SkillTagSystemProps {
  tags: SelectOption[];
  skills: Skill[];
}

const SkillTagSystem: React.FC<SkillTagSystemProps> = ({ tags, skills }) => {

  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skills);

  const filter = skills.filter((skill) => {
    if (!tags || tags === undefined || tags === null) {
      return skills;
    } else {
      return tags.some((tag) => {
        return skill.categories.includes(tag.label);
      });
    }
  });

  useEffect(() => {
    setFilteredSkills(filter);
  }, [filteredSkills]);


  const renderSkills = () => {
    return filteredSkills.map((skill) => {
      return <div className="skill-wrapper">
        <p className="skill-text">{skill.name}</p>
        <img className="skill-img" src={skill.icon} />
      </div>
    })
  }

  return (
    <>
      {renderSkills()}
    </>
  );
};

export default SkillTagSystem;
