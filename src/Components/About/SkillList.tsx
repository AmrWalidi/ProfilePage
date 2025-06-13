import SkillProgressBars from "./SkillProgressBars";
import { skills } from "../../Data";
function SkillList() {
  return (
    <div className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skill-group">
        {skills.map((skill) => (
          <SkillProgressBars
            key={skill.name}
            percent={skill.percentage}
            skill={skill.name}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillList;
