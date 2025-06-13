import Info from "./Info";
import { Infos } from "../../Data/index";
function PersonelInfo() {
  return (
    <div className="peresonel-infos">
      <h2 className="section-title">Personel Info</h2>
      <div className="info-group">
        {Infos.map((info) => (
          <Info key={info.label} label={info.label} text={info.text} />
        ))}
      </div>
    </div>
  );
}

export default PersonelInfo;
