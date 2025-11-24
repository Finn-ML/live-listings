import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./chart-mini.module.css";

export type ChartMiniType = {
  className?: string;
  background?: boolean;
  markerS?: boolean;

  /** Variant props */
  trend?: string;
  type?: string;
};

const ChartMini: NextPage<ChartMiniType> = ({
  className = "",
  trend = "Positive",
  type = "Realistic 01",
  background = true,
  markerS = false,
}) => {
  return (
    <Box
      className={[styles.chartMini, className].join(" ")}
      data-trend={trend}
      data-type={type}
    >
      {!!background && (
        <Image
          className={styles.backgroundIcon}
          width={126}
          height={56}
          sizes="100vw"
          alt=""
          src="/Background.svg"
        >
          <Box className={styles.box} />
          <Box className={styles.box2} />
        </Image>
      )}
      <Image
        className={styles.lineIcon}
        width={126}
        height={56}
        sizes="100vw"
        alt=""
        src="/Line.svg"
      />
      {!!markerS && (
        <Box className={styles.marker}>
          <Box className={styles.ring} />
          <Box className={styles.dot} />
        </Box>
      )}
    </Box>
  );
};

export default ChartMini;
