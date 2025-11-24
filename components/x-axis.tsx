import type { NextPage } from "next";
import { Box } from "@mui/material";
import styles from "./x-axis.module.css";

export type XAxisType = {
  className?: string;

  /** Variant props */
  breakpoint?: string;
  data?: string;
};

const XAxis: NextPage<XAxisType> = ({
  className = "",
  breakpoint = "Desktop",
  data = "7 days",
}) => {
  return (
    <Box
      className={[styles.xAxis, className].join(" ")}
      data-breakpoint={breakpoint}
      data-data={data}
    >
      <div className={styles.xAxisMarks}>2</div>
      <div className={styles.xAxisMarks2}>4</div>
      <div className={styles.xAxisMarks3}>6</div>
      <div className={styles.xAxisMarks4}>8</div>
      <div className={styles.xAxisMarks5}>10</div>
      <div className={styles.xAxisMarks6}>12</div>
      <div className={styles.xAxisMarks7}>14</div>
      <div className={styles.xAxisMarks8}>16</div>
      <div className={styles.xAxisMarks9}>18</div>
      <div className={styles.xAxisMarks10}>20</div>
      <div className={styles.xAxisMarks11}>22</div>
      <div className={styles.xAxisMarks12}>24</div>
      <div className={styles.xAxisMarks13}>26</div>
      <div className={styles.xAxisMarks14}>28</div>
      <div className={styles.xAxisMarks15}>30</div>
    </Box>
  );
};

export default XAxis;
