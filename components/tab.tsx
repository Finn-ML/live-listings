import type { NextPage } from "next";
import { Box } from "@mui/material";
import styles from "./tab.module.css";

export type TabType = {
  className?: string;
  label?: string;

  /** Variant props */
  iconOnly?: boolean;
  selected?: boolean;
};

const Tab: NextPage<TabType> = ({
  className = "",
  iconOnly = false,
  selected = true,
  label = "Select Existing",
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

export default Tab;
