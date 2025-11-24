import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./chart-data.module.css";

export type ChartDataType = {
  className?: string;
  series2?: boolean;
  series3?: boolean;

  /** Variant props */
  chartType?: string;
};

const ChartData: NextPage<ChartDataType> = ({
  className = "",
  chartType = "Line gradual 01",
  series2 = false,
  series3 = false,
}) => {
  return (
    <Box
      className={[styles.chartData, className].join(" ")}
      data-chartType={chartType}
    >
      <Image
        className={styles.series1Icon}
        width={1146}
        height={188}
        sizes="100vw"
        alt=""
        src="/Series-1@2x.png"
      >
        <Box className={styles.box}>
          <Box className={styles.box2} />
          <Box className={styles.box3}>
            <Box className={styles.box4} />
            <Box className={styles.box5} />
          </Box>
        </Box>
        <Box className={styles.box6} />
      </Image>
      {!!series2 && (
        <Image
          className={styles.series2Icon}
          width={1146}
          height={143}
          sizes="100vw"
          alt=""
        >
          <Box className={styles.box7} />
        </Image>
      )}
      {!!series3 && (
        <Image
          className={styles.series3Icon}
          width={1146}
          height={117.5}
          sizes="100vw"
          alt=""
        >
          <Box className={styles.box8} />
        </Image>
      )}
    </Box>
  );
};

export default ChartData;
