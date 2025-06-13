import SideInfo from "./SideInfo";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

function SideInfoList() {
  return (
    <div className="side-info-list">
      <SideInfo title="Call Me" info="+90 536 992 29 50" icon={faPhone} />
      <SideInfo
        title="Mail Me"
        info="amr.nawaf128@gmail.com"
        icon={faEnvelope}
      />
      <SideInfo
        title="Address"
        info="ESENYURT/İSTANBUL"
        icon={faMapLocationDot}
      />
    </div>
  );
}

export default SideInfoList;
