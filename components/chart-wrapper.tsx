import type { NextPage } from "next";
import { Box } from "@mui/material";
import LineAndBarChart from "./line-and-bar-chart";
import ChartMarker from "./chart-marker";
import styles from "./chart-wrapper.module.css";

export type ChartWrapperType = {
  className?: string;
};

const ChartWrapper: NextPage<ChartWrapperType> = ({ className = "" }) => {
  return (
    <Box className={[styles.chartWrapper, className].join(" ")}>
      <LineAndBarChart
        axisLabels
        breakpoint="Desktop"
        chartStyle="Line"
        legend={false}
        breakpoint1="Desktop"
        data="30 days"
        axisLabels1
        breakpoint2="Desktop"
        chartStyle1="Line"
        legend1={false}
        chartType="Line volatile 02"
        series2={false}
        series3={false}
        label
      />
      <ChartMarker
        type="Line"
        tooltip
        cursor
        arrow="None"
        supportingText
        text="$1,240.28"
        state="Hand"
      />
    </Box>
  );
};

export default ChartWrapper;
