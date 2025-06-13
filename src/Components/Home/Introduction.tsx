import { useState, useEffect } from "react";
import SocialMediaIcons from "./SocialMediaIconsList";

function Introduction() {
  const [profession, setProfession] = useState<string>("web developer");
  const [currentProfession, setCurrentProfession] = useState<string>("");
  function professionLoop() {
    if (currentProfession === "web developer") {
      setTimeout(() => {
        setProfession("Android Developer");
        setCurrentProfession("");
      }, 1000);
    }
    if (currentProfession === "Android Developer") {
      setTimeout(() => {
        setProfession("web developer");
        setCurrentProfession("");
      }, 1000);
    }
    setTimeout(() => {
      setCurrentProfession(profession.slice(0, currentProfession.length + 1));
    }, 100);
  }
  useEffect(professionLoop, [currentProfession, profession]);
  return (
    <div className="intro">
      <div className="name">i'm amr walidi</div>
      <div className="profession">{currentProfession}</div>
      <p>
        I am a software engineer with a strong foundation in web development, specializing 
        in React and android application development. 
        Experienced in integrating machine learning algorithms into front-end projects to 
        build intelligent and dynamic applications.
      </p>
      <SocialMediaIcons />
    </div>
  );
}

export default Introduction;
