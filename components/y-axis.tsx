"use client";
import type { NextPage } from "next";
import { useState } from "react";
import { Box } from "@mui/material";
import YAxisLine from "./y-axis-line";
import styles from "./y-axis.module.css";

export type YAxisType = {
  className?: string;
  yAxisLineLabel?: boolean;
  yAxisLineLabel1?: boolean;
  yAxisLineLabel2?: boolean;
  yAxisLineLabel3?: boolean;
  yAxisLineLabel4?: boolean;
  yAxisLineLabel5?: boolean;
  yAxisLineLabel6?: boolean;
  yAxisLineLabel7?: boolean;
  yAxisLineLabel8?: boolean;
  yAxisLineLabel9?: boolean;
  yAxisLineLabel10?: boolean;
  yAxisLineLabel11?: boolean;
  yAxisLineNumber?: string;
  yAxisLineNumber1?: string;
  yAxisLineNumber2?: string;
  yAxisLineNumber3?: string;
  yAxisLineNumber4?: string;
  yAxisLineNumber5?: string;
  yAxisLineNumber6?: string;
  yAxisLineNumber7?: string;
  yAxisLineNumber8?: string;
  yAxisLineNumber9?: string;
  yAxisLineNumber10?: string;
  yAxisLineNumber11?: string;
  yAxisLineDivider?: string;
  yAxisLineDivider1?: string;
  yAxisLineDivider2?: string;
  yAxisLineDivider3?: string;
  yAxisLineDivider4?: string;
  yAxisLineDivider5?: string;
  yAxisLineDivider6?: string;
  yAxisLineDivider7?: string;
  yAxisLineDivider8?: string;
  yAxisLineDivider9?: string;
  yAxisLineDivider10?: string;
  yAxisLineDivider11?: string;
  yAxisLineShowYAxis?: boolean;
  yAxisLineShowYAxis1?: boolean;
  yAxisLineShowYAxis2?: boolean;
  yAxisLineShowYAxis3?: boolean;
  yAxisLineShowYAxis4?: boolean;
  yAxisLineShowYAxis5?: boolean;
  yAxisLineShowYAxis6?: boolean;
  yAxisLineShowYAxis7?: boolean;
  yAxisLineShowYAxis8?: boolean;
  yAxisLineShowYAxis9?: boolean;
  yAxisLineShowYAxis10?: boolean;
  yAxisLineShowYAxis11?: boolean;
  yAxisLineYAxisHeight?: string;
  yAxisLineYAxisHeight1?: string;
  yAxisLineYAxisHeight2?: string;
  yAxisLineYAxisHeight3?: string;
  yAxisLineYAxisHeight4?: string;
  yAxisLineYAxisHeight5?: string;
  yAxisLineYAxisHeight6?: string;
  yAxisLineYAxisHeight7?: string;
  yAxisLineYAxisHeight8?: string;
  yAxisLineYAxisHeight9?: string;
  yAxisLineYAxisHeight10?: string;
  yAxisLineYAxisHeight11?: string;
  yAxisLineYAxisAlignSelf?: string;
  yAxisLineYAxisAlignSelf1?: string;
  yAxisLineYAxisAlignSelf2?: string;
  yAxisLineYAxisAlignSelf3?: string;
  yAxisLineYAxisAlignSelf4?: string;
  yAxisLineYAxisAlignSelf5?: string;
  yAxisLineYAxisAlignSelf6?: string;
  yAxisLineYAxisAlignSelf7?: string;
  yAxisLineYAxisAlignSelf8?: string;
  yAxisLineYAxisAlignSelf9?: string;
  yAxisLineYAxisAlignSelf10?: string;
  yAxisLineYAxisAlignSelf11?: string;
  yAxisLineYAxisWidth?: string;
  yAxisLineYAxisWidth1?: string;
  yAxisLineYAxisWidth2?: string;
  yAxisLineYAxisWidth3?: string;
  yAxisLineYAxisWidth4?: string;
  yAxisLineYAxisWidth5?: string;
  yAxisLineYAxisWidth6?: string;
  yAxisLineYAxisWidth7?: string;
  yAxisLineYAxisWidth8?: string;
  yAxisLineYAxisWidth9?: string;
  yAxisLineYAxisWidth10?: string;
  yAxisLineYAxisWidth11?: string;
  yAxisLineNumberFontWeight?: string;
  yAxisLineNumberFontWeight1?: string;
  yAxisLineNumberFontWeight2?: string;
  yAxisLineNumberFontWeight3?: string;
  yAxisLineNumberFontWeight4?: string;
  yAxisLineNumberFontWeight5?: string;
  yAxisLineNumberFontWeight6?: string;
  yAxisLineNumberFontWeight7?: string;
  yAxisLineNumberFontWeight8?: string;
  yAxisLineNumberFontWeight9?: string;
  yAxisLineNumberFontWeight10?: string;
  yAxisLineNumberFontWeight11?: string;
  yAxisLineNumberFontFamily?: string;
  yAxisLineNumberFontFamily1?: string;
  yAxisLineNumberFontFamily2?: string;
  yAxisLineNumberFontFamily3?: string;
  yAxisLineNumberFontFamily4?: string;
  yAxisLineNumberFontFamily5?: string;
  yAxisLineNumberFontFamily6?: string;
  yAxisLineNumberFontFamily7?: string;
  yAxisLineNumberFontFamily8?: string;
  yAxisLineNumberFontFamily9?: string;
  yAxisLineNumberFontFamily10?: string;
  yAxisLineNumberFontFamily11?: string;
  yAxisLineNumberColor?: string;
  yAxisLineNumberColor1?: string;
  yAxisLineNumberColor2?: string;
  yAxisLineNumberColor3?: string;
  yAxisLineNumberColor4?: string;
  yAxisLineNumberColor5?: string;
  yAxisLineNumberColor6?: string;
  yAxisLineNumberColor7?: string;
  yAxisLineNumberColor8?: string;
  yAxisLineNumberColor9?: string;
  yAxisLineNumberColor10?: string;
  yAxisLineNumberColor11?: string;

  /** Variant props */
  label?: boolean;
};

const YAxis: NextPage<YAxisType> = ({
  className = "",
  label = false,
  yAxisLineLabel,
  yAxisLineLabel1,
  yAxisLineLabel2,
  yAxisLineLabel3,
  yAxisLineLabel4,
  yAxisLineLabel5,
  yAxisLineLabel6,
  yAxisLineLabel7,
  yAxisLineLabel8,
  yAxisLineLabel9,
  yAxisLineLabel10,
  yAxisLineLabel11,
  yAxisLineNumber,
  yAxisLineNumber1,
  yAxisLineNumber2,
  yAxisLineNumber3,
  yAxisLineNumber4,
  yAxisLineNumber5,
  yAxisLineNumber6,
  yAxisLineNumber7,
  yAxisLineNumber8,
  yAxisLineNumber9,
  yAxisLineNumber10,
  yAxisLineNumber11,
  yAxisLineDivider,
  yAxisLineDivider1,
  yAxisLineDivider2,
  yAxisLineDivider3,
  yAxisLineDivider4,
  yAxisLineDivider5,
  yAxisLineDivider6,
  yAxisLineDivider7,
  yAxisLineDivider8,
  yAxisLineDivider9,
  yAxisLineDivider10,
  yAxisLineDivider11,
  yAxisLineShowYAxis,
  yAxisLineShowYAxis1,
  yAxisLineShowYAxis2,
  yAxisLineShowYAxis3,
  yAxisLineShowYAxis4,
  yAxisLineShowYAxis5,
  yAxisLineShowYAxis6,
  yAxisLineShowYAxis7,
  yAxisLineShowYAxis8,
  yAxisLineShowYAxis9,
  yAxisLineShowYAxis10,
  yAxisLineShowYAxis11,
  yAxisLineYAxisHeight,
  yAxisLineYAxisHeight1,
  yAxisLineYAxisHeight2,
  yAxisLineYAxisHeight3,
  yAxisLineYAxisHeight4,
  yAxisLineYAxisHeight5,
  yAxisLineYAxisHeight6,
  yAxisLineYAxisHeight7,
  yAxisLineYAxisHeight8,
  yAxisLineYAxisHeight9,
  yAxisLineYAxisHeight10,
  yAxisLineYAxisHeight11,
  yAxisLineYAxisAlignSelf,
  yAxisLineYAxisAlignSelf1,
  yAxisLineYAxisAlignSelf2,
  yAxisLineYAxisAlignSelf3,
  yAxisLineYAxisAlignSelf4,
  yAxisLineYAxisAlignSelf5,
  yAxisLineYAxisAlignSelf6,
  yAxisLineYAxisAlignSelf7,
  yAxisLineYAxisAlignSelf8,
  yAxisLineYAxisAlignSelf9,
  yAxisLineYAxisAlignSelf10,
  yAxisLineYAxisAlignSelf11,
  yAxisLineYAxisWidth,
  yAxisLineYAxisWidth1,
  yAxisLineYAxisWidth2,
  yAxisLineYAxisWidth3,
  yAxisLineYAxisWidth4,
  yAxisLineYAxisWidth5,
  yAxisLineYAxisWidth6,
  yAxisLineYAxisWidth7,
  yAxisLineYAxisWidth8,
  yAxisLineYAxisWidth9,
  yAxisLineYAxisWidth10,
  yAxisLineYAxisWidth11,
  yAxisLineNumberFontWeight,
  yAxisLineNumberFontWeight1,
  yAxisLineNumberFontWeight2,
  yAxisLineNumberFontWeight3,
  yAxisLineNumberFontWeight4,
  yAxisLineNumberFontWeight5,
  yAxisLineNumberFontWeight6,
  yAxisLineNumberFontWeight7,
  yAxisLineNumberFontWeight8,
  yAxisLineNumberFontWeight9,
  yAxisLineNumberFontWeight10,
  yAxisLineNumberFontWeight11,
  yAxisLineNumberFontFamily,
  yAxisLineNumberFontFamily1,
  yAxisLineNumberFontFamily2,
  yAxisLineNumberFontFamily3,
  yAxisLineNumberFontFamily4,
  yAxisLineNumberFontFamily5,
  yAxisLineNumberFontFamily6,
  yAxisLineNumberFontFamily7,
  yAxisLineNumberFontFamily8,
  yAxisLineNumberFontFamily9,
  yAxisLineNumberFontFamily10,
  yAxisLineNumberFontFamily11,
  yAxisLineNumberColor,
  yAxisLineNumberColor1,
  yAxisLineNumberColor2,
  yAxisLineNumberColor3,
  yAxisLineNumberColor4,
  yAxisLineNumberColor5,
  yAxisLineNumberColor6,
  yAxisLineNumberColor7,
  yAxisLineNumberColor8,
  yAxisLineNumberColor9,
  yAxisLineNumberColor10,
  yAxisLineNumberColor11,
}) => {
  const [yAxisLineItems] = useState([
    {
      label: true,
      showYAxisLine: true,
      yAxisLineHeight: "22px",
      yAxisLineAlignSelf: "stretch",
      yAxisLineWidth: "",
      number: "1,250",
      numberFontWeight: "500",
      numberFontFamily: "Montserrat",
      numberColor: "#6a707e",
    },
    {
      label: true,
      showYAxisLine: true,
      yAxisLineHeight: "17px",
      yAxisLineAlignSelf: "",
      yAxisLineWidth: "",
      number: "1,000",
      numberFontWeight: "",
      numberFontFamily: "",
      numberColor: "",
    },
    {
      label: true,
      showYAxisLine: true,
      yAxisLineHeight: "17px",
      yAxisLineAlignSelf: "",
      yAxisLineWidth: "",
      number: "750",
      numberFontWeight: "",
      numberFontFamily: "",
      numberColor: "",
    },
    {
      label: true,
      showYAxisLine: true,
      yAxisLineHeight: "17px",
      yAxisLineAlignSelf: "",
      yAxisLineWidth: "",
      number: "500",
      numberFontWeight: "",
      numberFontFamily: "",
      numberColor: "",
    },
    {
      label: true,
      showYAxisLine: true,
      yAxisLineHeight: "17px",
      yAxisLineAlignSelf: "",
      yAxisLineWidth: "",
      number: "250",
      numberFontWeight: "",
      numberFontFamily: "",
      numberColor: "",
    },
    {
      label: true,
      showYAxisLine: true,
      yAxisLineHeight: "17px",
      yAxisLineAlignSelf: "",
      yAxisLineWidth: "",
      number: "0",
      numberFontWeight: "",
      numberFontFamily: "",
      numberColor: "",
    },
    {
      label: true,
      showYAxisLine: false,
      yAxisLineHeight: "17px",
      yAxisLineAlignSelf: "unset",
      yAxisLineWidth: "1216px",
      number: "0",
      numberFontWeight: "unset",
      numberFontFamily: "Inter",
      numberColor: "#535862",
    },
    {
      label: true,
      showYAxisLine: false,
      yAxisLineHeight: "17px",
      yAxisLineAlignSelf: "unset",
      yAxisLineWidth: "1216px",
      number: "0",
      numberFontWeight: "unset",
      numberFontFamily: "Inter",
      numberColor: "#535862",
    },
    {
      label: true,
      showYAxisLine: false,
      yAxisLineHeight: "17px",
      yAxisLineAlignSelf: "unset",
      yAxisLineWidth: "1216px",
      number: "0",
      numberFontWeight: "unset",
      numberFontFamily: "Inter",
      numberColor: "#535862",
    },
    {
      label: true,
      showYAxisLine: false,
      yAxisLineHeight: "17px",
      yAxisLineAlignSelf: "unset",
      yAxisLineWidth: "1216px",
      number: "0",
      numberFontWeight: "unset",
      numberFontFamily: "Inter",
      numberColor: "#535862",
    },
    {
      label: true,
      showYAxisLine: false,
      yAxisLineHeight: "17px",
      yAxisLineAlignSelf: "unset",
      yAxisLineWidth: "1216px",
      number: "0",
      numberFontWeight: "unset",
      numberFontFamily: "Inter",
      numberColor: "#535862",
    },
    {
      label: true,
      showYAxisLine: false,
      yAxisLineHeight: "17px",
      yAxisLineAlignSelf: "unset",
      yAxisLineWidth: "1216px",
      number: "0",
      numberFontWeight: "unset",
      numberFontFamily: "Inter",
      numberColor: "#535862",
    },
  ]);
  return (
    <Box className={[styles.yAxis, className].join(" ")} data-label={label}>
      {yAxisLineItems.map((item, index) => (
        <YAxisLine
          key={index}
          label={item.label}
          showYAxisLine={item.showYAxisLine}
          yAxisLineHeight={item.yAxisLineHeight}
          yAxisLineAlignSelf={item.yAxisLineAlignSelf}
          yAxisLineWidth={item.yAxisLineWidth}
          number={item.number}
          numberFontWeight={item.numberFontWeight}
          numberFontFamily={item.numberFontFamily}
          numberColor={item.numberColor}
        />
      ))}
    </Box>
  );
};

export default YAxis;
