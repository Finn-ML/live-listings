import type { NextPage } from "next";
import { Box } from "@mui/material";
import YAxis from "./y-axis";
import XAxis from "./x-axis";
import XAxisLabel from "./x-axis-label";
import ChartData from "./chart-data";
import styles from "./line-and-bar-chart.module.css";

export type LineAndBarChartType = {
  className?: string;
  breakpoint1?: string;
  data?: string;
  axisLabels1?: boolean;
  breakpoint2?: string;
  chartStyle1?: string;
  legend1?: boolean;
  chartType?: string;
  series2?: boolean;
  series3?: boolean;
  label?: boolean;

  /** Variant props */
  axisLabels?: boolean;
  breakpoint?: string;
  chartStyle?: string;
  legend?: boolean;
};

const LineAndBarChart: NextPage<LineAndBarChartType> = ({
  className = "",
  axisLabels = false,
  breakpoint = "Desktop",
  chartStyle = "Line",
  legend = false,
  breakpoint1,
  data,
  axisLabels1,
  breakpoint2,
  chartStyle1,
  legend1,
  chartType,
  series2,
  series3,
  label,
}) => {
  return (
    <Box
      className={[styles.lineAndBarChart, className].join(" ")}
      data-axisLabels={axisLabels}
      data-breakpoint={breakpoint}
      data-chartStyle={chartStyle}
      data-legend={legend}
    >
      <Box className={styles.axis}>
        <Box className={styles.yAxisLabel}>
          <div className={styles.text}>Active users</div>
        </Box>
        <Box className={styles.content}>
          <YAxis
            label={label}
            yAxisLineLabel
            yAxisLineLabel1
            yAxisLineLabel2
            yAxisLineLabel3
            yAxisLineLabel4
            yAxisLineLabel5
            yAxisLineLabel6
            yAxisLineLabel7
            yAxisLineLabel8
            yAxisLineLabel9
            yAxisLineLabel10
            yAxisLineLabel11
            yAxisLineNumber="1,250"
            yAxisLineNumber1="1,000"
            yAxisLineNumber2="750"
            yAxisLineNumber3="500"
            yAxisLineNumber4="250"
            yAxisLineNumber5="0"
            yAxisLineNumber6="0"
            yAxisLineNumber7="0"
            yAxisLineNumber8="0"
            yAxisLineNumber9="0"
            yAxisLineNumber10="0"
            yAxisLineNumber11="0"
            yAxisLineDivider="/Divider1.svg"
            yAxisLineDivider1="/Divider1.svg"
            yAxisLineDivider2="/Divider1.svg"
            yAxisLineDivider3="/Divider1.svg"
            yAxisLineDivider4="/Divider1.svg"
            yAxisLineDivider5="/Divider1.svg"
            yAxisLineDivider6="pending_I4071:36100;1067:2662;1067:832;1076:3243"
            yAxisLineDivider7="pending_I4071:36100;1067:2662;1067:833;1076:3243"
            yAxisLineDivider8="pending_I4071:36100;1067:2662;1067:834;1076:3243"
            yAxisLineDivider9="pending_I4071:36100;1067:2662;1067:835;1076:3243"
            yAxisLineDivider10="pending_I4071:36100;1067:2662;1067:836;1076:3243"
            yAxisLineDivider11="pending_I4071:36100;1067:2662;1067:837;1076:3243"
            yAxisLineShowYAxis
            yAxisLineShowYAxis1
            yAxisLineShowYAxis2
            yAxisLineShowYAxis3
            yAxisLineShowYAxis4
            yAxisLineShowYAxis5
            yAxisLineShowYAxis6={false}
            yAxisLineShowYAxis7={false}
            yAxisLineShowYAxis8={false}
            yAxisLineShowYAxis9={false}
            yAxisLineShowYAxis10={false}
            yAxisLineShowYAxis11={false}
            yAxisLineYAxisHeight1="17px"
            yAxisLineYAxisHeight2="17px"
            yAxisLineYAxisHeight3="17px"
            yAxisLineYAxisHeight4="17px"
            yAxisLineYAxisHeight5="17px"
            yAxisLineYAxisHeight6="17px"
            yAxisLineYAxisHeight7="17px"
            yAxisLineYAxisHeight8="17px"
            yAxisLineYAxisHeight9="17px"
            yAxisLineYAxisHeight10="17px"
            yAxisLineYAxisHeight11="17px"
            yAxisLineYAxisAlignSelf1="stretch"
            yAxisLineYAxisAlignSelf2="stretch"
            yAxisLineYAxisAlignSelf3="stretch"
            yAxisLineYAxisAlignSelf4="stretch"
            yAxisLineYAxisAlignSelf5="stretch"
            yAxisLineYAxisAlignSelf6="unset"
            yAxisLineYAxisAlignSelf7="unset"
            yAxisLineYAxisAlignSelf8="unset"
            yAxisLineYAxisAlignSelf9="unset"
            yAxisLineYAxisAlignSelf10="unset"
            yAxisLineYAxisAlignSelf11="unset"
            yAxisLineYAxisWidth1="unset"
            yAxisLineYAxisWidth2="unset"
            yAxisLineYAxisWidth3="unset"
            yAxisLineYAxisWidth4="unset"
            yAxisLineYAxisWidth5="unset"
            yAxisLineYAxisWidth6="1216px"
            yAxisLineYAxisWidth7="1216px"
            yAxisLineYAxisWidth8="1216px"
            yAxisLineYAxisWidth9="1216px"
            yAxisLineYAxisWidth10="1216px"
            yAxisLineYAxisWidth11="1216px"
            yAxisLineNumberFontWeight1="500"
            yAxisLineNumberFontWeight2="500"
            yAxisLineNumberFontWeight3="500"
            yAxisLineNumberFontWeight4="500"
            yAxisLineNumberFontWeight5="500"
            yAxisLineNumberFontWeight6="unset"
            yAxisLineNumberFontWeight7="unset"
            yAxisLineNumberFontWeight8="unset"
            yAxisLineNumberFontWeight9="unset"
            yAxisLineNumberFontWeight10="unset"
            yAxisLineNumberFontWeight11="unset"
            yAxisLineNumberFontFamily1="Montserrat"
            yAxisLineNumberFontFamily2="Montserrat"
            yAxisLineNumberFontFamily3="Montserrat"
            yAxisLineNumberFontFamily4="Montserrat"
            yAxisLineNumberFontFamily5="Montserrat"
            yAxisLineNumberFontFamily6="Inter"
            yAxisLineNumberFontFamily7="Inter"
            yAxisLineNumberFontFamily8="Inter"
            yAxisLineNumberFontFamily9="Inter"
            yAxisLineNumberFontFamily10="Inter"
            yAxisLineNumberFontFamily11="Inter"
            yAxisLineNumberColor1="#6a707e"
            yAxisLineNumberColor2="#6a707e"
            yAxisLineNumberColor3="#6a707e"
            yAxisLineNumberColor4="#6a707e"
            yAxisLineNumberColor5="#6a707e"
            yAxisLineNumberColor6="#535862"
            yAxisLineNumberColor7="#535862"
            yAxisLineNumberColor8="#535862"
            yAxisLineNumberColor9="#535862"
            yAxisLineNumberColor10="#535862"
            yAxisLineNumberColor11="#535862"
          />
          <XAxis breakpoint={breakpoint1} data={data} />
          <XAxisLabel
            axisLabels={axisLabels1}
            breakpoint={breakpoint2}
            chartStyle={chartStyle1}
            legend={legend1}
          />
          <ChartData
            chartType={chartType}
            series2={series2}
            series3={series3}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LineAndBarChart;
