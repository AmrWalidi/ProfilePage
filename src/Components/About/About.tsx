import PersonelInfo from "./PersonelInfo";
import SkillList from "./SkillList";
import StatisticList from "./StatisticList";
function About() {
  return (
    <div id="about">
      <div className="infos-stats">
        <PersonelInfo />
        <StatisticList />
      </div>
      <SkillList />
    </div>
  );
}

export default About;
