import type { NextPage } from "next";
import { Box } from "@mui/material";
import styles from "./tab1.module.css";

export type Tab1Type = {
  className?: string;
  label?: string;

  /** Variant props */
  iconOnly?: boolean;
  selected?: boolean;
};

const Tab1: NextPage<Tab1Type> = ({
  className = "",
  iconOnly = false,
  selected = true,
  label = "12 months",
}) => {
  return (
    <Box
      className={[styles.root, className].join(" ")}
      data-iconOnly={iconOnly}
      data-selected={selected}
    >
      <div className={styles.submitQuestionText}>{label}</div>
    </Box>
  );
};

export default Tab1;
