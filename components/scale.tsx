"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./scale.module.css";

export type ScaleType = {
  className?: string;
  trailingIcon?: boolean;
  leadingIcon?: boolean;
  label?: string;
  scale01: string;

  /** Variant props */
  type?: string;

  /** Style props */
  scale01Border?: CSSProperties["border"];
};

const Scale: NextPage<ScaleType> = ({
  className = "",
  type = "Default",
  trailingIcon = false,
  leadingIcon = true,
  label = "1,500 ft²",
  scale01Border,
  scale01,
}) => {
  const scale01Style: CSSProperties = useMemo(() => {
    return {
      border: scale01Border,
    };
  }, [scale01Border]);

  return (
    <button
      className={[styles.badge, className].join(" ")}
      data-type={type}
      style={scale01Style}
    >
      {!!leadingIcon && (
        <Image
          className={styles.scale01Icon}
          width={18}
          height={18}
          sizes="100vw"
          alt=""
          src={scale01}
        >
          <Box className={styles.box} />
        </Image>
      )}
      <Box className={styles.labelContainer}>
        <div className={styles.label}>{label}</div>
      </Box>
      {!!trailingIcon && (
        <Image
          className={styles.chevronRightIcon}
          width={18}
          height={18}
          sizes="100vw"
          alt=""
        >
          <Box className={styles.box2} />
        </Image>
      )}
    </button>
  );
};

export default Scale;
