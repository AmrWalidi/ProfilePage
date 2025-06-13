import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { componentProp } from "./ProjectCard";

function Popup({ setState, pro }: componentProp) {
  useEffect(() => {
    const pop = document.getElementById(pro.title);
    if (pop != null) {
      setTimeout(() => (pop.style.transform = "translate(-50%,-50%)"), 50);
    }
  }, [pro.title]);
  return (
    <div id={pro.title} className="popup-card">
      <FontAwesomeIcon
        onClick={() => setState(undefined)}
        className="x-mark"
        icon={faXmark}
      />
      <div className="popup-card-content">
        <img src={pro.image} alt={pro.title} />
        <div className="project-details">
          <div className="project-title">{pro.title}</div>
          <hr />
          <div className="project-summary">{pro.summary}</div>
          <div className="project-lower-list">
            <div style={{ marginBottom: "10px" }}>
              <label>Type: </label>
              <span className="project-answer">{pro.type}</span>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Languages & Tools: </label>
              <span className="project-answer">{pro.languages}</span>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>URL: </label>
              <a href={pro.URL} target="_blank" className="project-answer">
                {pro.URL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
