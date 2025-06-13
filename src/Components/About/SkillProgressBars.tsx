import { useState } from "react";

interface skillProp {
  skill: string;
  percent: number;
}

function SkillProgressBars({ skill, percent }: skillProp) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    const bars = document.querySelectorAll(".progress-bar-filler");
    bars.forEach((bar) => {
      const screenHeight = window.innerHeight;
      const barPosition = bar.getBoundingClientRect().top;
      if (barPosition <= screenHeight) {
        setIsScrolled(true);
      }
    });
  });
  return (
    <div>
      <div className="skill-percent-group">
        <p>{skill}</p>
        <p>{percent + "%"}</p>
      </div>
      <div className="progress-bar">
        <div
          style={isScrolled ? { width: percent + "%" } : {}}
          className="progress-bar-filler"
        ></div>
      </div>
    </div>
  );
}

export default SkillProgressBars;
