import React from "react";

import ScreenType from "../constants/ScreenType";
import BaseScreen from "./BaseScreen";

export default function UpcomingScreen() {
  return <BaseScreen screenType={ScreenType.UP_COMING} />;
}
