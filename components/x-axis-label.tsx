import type { NextPage } from "next";
import { Box } from "@mui/material";
import styles from "./x-axis-label.module.css";

export type XAxisLabelType = {
  className?: string;

  /** Variant props */
  axisLabels?: boolean;
  breakpoint?: string;
  chartStyle?: string;
  legend?: boolean;
};

const XAxisLabel: NextPage<XAxisLabelType> = ({
  className = "",
  axisLabels = false,
  breakpoint = "Desktop",
  chartStyle = "Line",
  legend = false,
}) => {
  return (
    <Box
      className={[styles.xAxisLabel, className].join(" ")}
      data-axisLabels={axisLabels}
      data-breakpoint={breakpoint}
      data-chartStyle={chartStyle}
      data-legend={legend}
    >
      <div className={styles.text}>September 2025</div>
    </Box>
  );
};

export default XAxisLabel;
