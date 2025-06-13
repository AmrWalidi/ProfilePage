import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface iconList {
  link: string;
  target: string;
  backgroundColor: string;
  icon: IconProp;
}

function SocialMediaIcon({ link, target, backgroundColor, icon }: iconList) {
  return (
    <a href={link} target={target}>
      <div
        className="icon-container"
        style={{ backgroundColor: backgroundColor }}
      >
        <FontAwesomeIcon className="brand-icon" icon={icon} />
      </div>
    </a>
  );
}

export default SocialMediaIcon;
