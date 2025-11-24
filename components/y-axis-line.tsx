"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./y-axis-line.module.css";

export type YAxisLineType = {
  className?: string;
  showYAxisLine?: boolean;
  number?: string;

  /** Variant props */
  label?: boolean;

  /** Style props */
  yAxisLineHeight?: CSSProperties["height"];
  yAxisLineAlignSelf?: CSSProperties["alignSelf"];
  yAxisLineWidth?: CSSProperties["width"];
  numberFontWeight?: CSSProperties["fontWeight"];
  numberFontFamily?: CSSProperties["fontFamily"];
  numberColor?: CSSProperties["color"];
};

const YAxisLine: NextPage<YAxisLineType> = ({
  className = "",
  label = false,
  showYAxisLine,
  yAxisLineHeight,
  yAxisLineAlignSelf,
  yAxisLineWidth,
  number,
  numberFontWeight,
  numberFontFamily,
  numberColor,
}) => {
  const yAxisLineStyle: CSSProperties = useMemo(() => {
    return {
      height: yAxisLineHeight,
      alignSelf: yAxisLineAlignSelf,
      width: yAxisLineWidth,
    };
  }, [yAxisLineHeight, yAxisLineAlignSelf, yAxisLineWidth]);

  const numberStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: numberFontWeight,
      fontFamily: numberFontFamily,
      color: numberColor,
    };
  }, [numberFontWeight, numberFontFamily, numberColor]);

  return (
    !!showYAxisLine && (
      <Box
        className={[styles.yAxisLine, className].join(" ")}
        data-label={label}
        style={yAxisLineStyle}
      >
        <div className={styles.number} style={numberStyle}>
          {number}
        </div>
        <Image
          className={styles.dividerIcon}
          width={980}
          height={1}
          sizes="100vw"
          alt=""
          src="/Divider1.svg"
        >
          <Box className={styles.box} />
        </Image>
      </Box>
    )
  );
};

export default YAxisLine;
