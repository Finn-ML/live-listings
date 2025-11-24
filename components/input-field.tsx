import type { NextPage } from "next";
import { Box } from "@mui/material";
import Tab from "./tab";
import styles from "./input-field.module.css";

export type InputFieldType = {
  className?: string;
  showLabel?: boolean;
  label?: string;
  tabIconOnly?: boolean;
  tabIconOnly1?: boolean;
  tabSelected?: boolean;
  tabSelected1?: boolean;
  tabLabel?: string;
  tabLabel1?: string;

  /** Variant props */
  tabs?: 2;
};

const InputField: NextPage<InputFieldType> = ({
  className = "",
  tabs = 2,
  showLabel = false,
  label = "Label",
  tabIconOnly,
  tabIconOnly1,
  tabSelected,
  tabSelected1,
  tabLabel,
  tabLabel1,
}) => {
  return (
    <Box className={[styles.inputField, className].join(" ")} data-tabs={tabs}>
      {!!showLabel && <div className={styles.label}>{label}</div>}
      <Box className={styles.input}>
        <Tab iconOnly={tabIconOnly} selected={tabSelected} label={tabLabel} />
        <Tab
          iconOnly={tabIconOnly1}
          selected={tabSelected1}
          label={tabLabel1}
        />
      </Box>
    </Box>
  );
};

export default InputField;
