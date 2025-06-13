import { useState, useEffect } from "react";

interface statsProp {
  statsNum: number;
  context: string;
}

function Statistic({ statsNum, context }: statsProp) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  window.addEventListener("scroll", () => {
    const nums = document.querySelectorAll(".stat-number");
    nums.forEach((num) => {
      const screenHeight = window.innerHeight;
      const numPosition = num.getBoundingClientRect().top;
      if (numPosition <= screenHeight) {
        setIsScrolled(true);
      }
    });
  });

  useEffect(() => {
    if (isScrolled) {
      setTimeout(() => {
        if (counter != statsNum) setCounter(counter + 1);
      }, 50);
    }
  });

  return (
    <div className="stat-container">
      <div className="stat-number">
        {counter}
        <span>{counter == statsNum && "+"}</span>
      </div>
      <div className="stat-content">{context}</div>
    </div>
  );
}

export default Statistic;
