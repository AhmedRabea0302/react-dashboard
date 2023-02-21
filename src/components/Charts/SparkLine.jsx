import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
const SparkLine = ({ id, color, height, width, data, type, currentColor }) => {
  return (
    <SparklineComponent
      id="sparkline"
      height="100px"
      width="70%"
      dataSource={data}
      xName="xval"
      yName="yval"
      type="Line"
    ></SparklineComponent>
  );
};

export default SparkLine;
