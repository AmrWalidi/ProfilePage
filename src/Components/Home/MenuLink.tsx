import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface iconList {
  onClick: React.MouseEventHandler;
  btnStyle: string;
  link: string;
  icon: IconProp;
  selectedLink: boolean;
}

function MenuLink({ onClick, btnStyle, link, icon, selectedLink }: iconList) {
  return (
    <a
      onClick={onClick}
      href={"#" + link}
      className={btnStyle}
      style={selectedLink || link == "" ? { opacity: "1" } : { opacity: "0" }}
    >
      <div className="icon-container">
        <FontAwesomeIcon className="menu-icon" icon={icon} />
        {link !== "" && <p>{link}</p>}
      </div>
    </a>
  );
}

export default MenuLink;
