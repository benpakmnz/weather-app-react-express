import React from "react";
import { StoreContext, ctx } from "../../shared/store";
import "./background-styles.scss";

const AppBackground: React.FC = () => {
  const { backgroundImage } = React.useContext<ctx>(StoreContext);

  return (
    <div className="background-container">
      <img alt="weather-background" src={backgroundImage} />
    </div>
  );
};

export default AppBackground;
