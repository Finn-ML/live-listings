"use client";
import type { NextPage } from "next";
import { useState } from "react";
import { Box } from "@mui/material";
import Tab1 from "./tab1";
import styles from "./input-field1.module.css";

export type InputField1Type = {
  className?: string;
  showLabel?: boolean;
  label?: string;
  tabIconOnly?: boolean;
  tabIconOnly1?: boolean;
  tabIconOnly2?: boolean;
  tabIconOnly3?: boolean;
  tabSelected?: boolean;
  tabSelected1?: boolean;
  tabSelected2?: boolean;
  tabSelected3?: boolean;
  tabLabel?: string;
  tabLabel1?: string;
  tabLabel2?: string;
  tabLabel3?: string;

  /** Variant props */
  tabs?: 4;
};

const InputField1: NextPage<InputField1Type> = ({
  className = "",
  tabs = 2,
  showLabel = false,
  label = "Label",
  tabIconOnly,
  tabIconOnly1,
  tabIconOnly2,
  tabIconOnly3,
  tabSelected,
  tabSelected1,
  tabSelected2,
  tabSelected3,
  tabLabel,
  tabLabel1,
  tabLabel2,
  tabLabel3,
}) => {
  const [tab1Items] = useState([
    {
      iconOnly: false,
      selected: false,
      label: "12 months",
    },
    {
      iconOnly: false,
      selected: false,
      label: "6 months",
    },
    {
      iconOnly: false,
      selected: true,
      label: "30 days",
    },
    {
      iconOnly: false,
      selected: false,
      label: "7 days",
    },
  ]);
  return (
    <Box className={[styles.inputField, className].join(" ")} data-tabs={tabs}>
      {!!showLabel && <div className={styles.label}>{label}</div>}
      <Box className={styles.input}>
        {tab1Items.map((item, index) => (
          <Tab1
            key={index}
            iconOnly={item.iconOnly}
            selected={item.selected}
            label={item.label}
          />
        ))}
      </Box>
    </Box>
  );
};

export default InputField1;
