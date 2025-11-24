import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import Tooltip from "./tooltip";
import Cursor from "./cursor";
import styles from "./chart-marker.module.css";

export type ChartMarkerType = {
  className?: string;
  tooltip?: boolean;
  cursor?: boolean;
  arrow?: string;
  supportingText?: boolean;
  text?: string;
  state?: string;

  /** Variant props */
  type?: string;
};

const ChartMarker: NextPage<ChartMarkerType> = ({
  className = "",
  type = "Line",
  tooltip = true,
  cursor = true,
  arrow,
  supportingText,
  text,
  state,
}) => {
  return (
    <Box className={[styles.chartMarker, className].join(" ")} data-type={type}>
      {!!tooltip && (
        <Tooltip arrow={arrow} supportingText={supportingText} text={text} />
      )}
      {!!cursor && <Cursor state={state} />}
      <Box className={styles.marker} />
      <Image
        className={styles.lineIcon}
        loading="lazy"
        width={2}
        height={173}
        sizes="100vw"
        alt=""
        src="/Line1.svg"
      />
    </Box>
  );
};

export default ChartMarker;
