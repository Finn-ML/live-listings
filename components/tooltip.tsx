import type { NextPage } from "next";
import { Box } from "@mui/material";
import styles from "./tooltip.module.css";

export type TooltipType = {
  className?: string;
  text?: string;

  /** Variant props */
  arrow?: string;
  supportingText?: boolean;
};

const Tooltip: NextPage<TooltipType> = ({
  className = "",
  arrow = "None",
  supportingText = false,
  text = "$1,240.28",
}) => {
  return (
    <Box
      className={[styles.tooltip, className].join(" ")}
      data-arrow={arrow}
      data-supportingText={supportingText}
    >
      <Box className={styles.content}>
        <Box className={styles.textAndSupportingText}>
          <div className={styles.text}>{text}</div>
          <div className={styles.supportingText}>Sep 24, 2025</div>
        </Box>
      </Box>
    </Box>
  );
};

export default Tooltip;
