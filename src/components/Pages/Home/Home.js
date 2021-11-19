import React from "react";
import FeaturedInfo from "../../Home/FeaturedInfo/FeaturedInfo";
import Chart from "../../Shared/Chart/Chart";
import "./Home.css";
import { userData } from "../../../dummyData";
import WidgetSm from "../../Shared/WidgetSm/WidgetSm";
import WidgetLg from "../../Shared/WidgetLg/WidgetLg";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo></FeaturedInfo>
      <Chart
        data={userData}
        grid
        dataKey="Active User"
        title="User Analytics"
      />
      <div className="homeWidgets">
          <WidgetSm></WidgetSm>
          <WidgetLg></WidgetLg>
      </div>
    </div>
  );
};

export default Home;
