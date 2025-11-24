import type { NextPage } from "next";
import { Box } from "@mui/material";
import styles from "./pie-chart.module.css";

export type PieChartType = {
  className?: string;

  /** Variant props */
  hole?: string;
};

const PieChart: NextPage<PieChartType> = ({ className = "", hole = false }) => {
  return (
    <Box className={[styles.pieChart, className].join(" ")} data-hole={hole}>
      <Box className={styles.background} />
      <Box className={styles.series1} />
      <Box className={styles.series2} />
      <Box className={styles.series3} />
      <Box className={styles.series4} />
      <Box className={styles.series5} />
      <Box className={styles.series6} />
    </Box>
  );
};

export default PieChart;
