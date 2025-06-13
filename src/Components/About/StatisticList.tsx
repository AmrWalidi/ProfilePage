import { Stats } from "../../Data/index";
import Statistic from "./Statistic";

function StatisticList() {
  return (
    <div className="stat-group">
      {Stats.map((stat) => (
        <Statistic
          key={stat.context}
          statsNum={stat.statsNum}
          context={stat.context}
        />
      ))}
    </div>
  );
}

export default StatisticList;
