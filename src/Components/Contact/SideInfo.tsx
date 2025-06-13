import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface componentProp {
  icon: IconProp;
  title: string;
  info: string;
}

function SideInfo({ icon, title, info }: componentProp) {
  return (
    <div className="side-info">
      <div className="contact-icon-container ">
        <FontAwesomeIcon className="contact-icon" icon={icon} />
      </div>
      <div>
        <div className="info-title">{title}</div>
        <div className="info-answer">{info}</div>
      </div>
    </div>
  );
}

export default SideInfo;
