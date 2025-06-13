import { useState } from "react";
import MenuLink from "./Home/MenuLink";
import {
  faHome,
  faUser,
  faLightbulb,
  faMessage,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [selectedLink, setSelectedLink] = useState<boolean>(false);
  return (
    <nav>
      <MenuLink
        onClick={(event: React.MouseEvent) => {
          setSelectedLink(!selectedLink);
          event.preventDefault();
        }}
        btnStyle="active-menu"
        link={""}
        icon={faBars}
        selectedLink={selectedLink}
      />
      <MenuLink
        onClick={() => setSelectedLink(false)}
        btnStyle=""
        link={"home"}
        icon={faHome}
        selectedLink={selectedLink}
      />
      <MenuLink
        onClick={() => setSelectedLink(false)}
        btnStyle=""
        link={"about"}
        icon={faUser}
        selectedLink={selectedLink}
      />
      <MenuLink
        onClick={() => setSelectedLink(false)}
        btnStyle=""
        link={"projects"}
        icon={faLightbulb}
        selectedLink={selectedLink}
      />
      <MenuLink
        onClick={() => setSelectedLink(false)}
        btnStyle=""
        link={"contact"}
        icon={faMessage}
        selectedLink={selectedLink}
      />
    </nav>
  );
}

export default NavBar;
