import type { NextPage } from "next";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import InputField1 from "./input-field1";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <Box className={[styles.frameParent, className].join(" ")}>
      <Box className={styles.parent}>
        <Typography
          className={styles.h1}
          variant="inherit"
          variantMapping={{ inherit: "h1" }}
          sx={{
            fontWeight: "600",
            lineHeight: "150%",
            letterSpacing: "-0.02em",
          }}
        >
          $12,584
        </Typography>
        <Box className={styles.frameGroup}>
          <Box className={styles.arrowUpParent}>
            <Image
              className={styles.arrowUpIcon}
              loading="lazy"
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/arrow-up.svg"
            />
            <div className={styles.div}>12%</div>
          </Box>
          <div className={styles.vsLast30}>vs last 30 days</div>
        </Box>
      </Box>
      <InputField1
        tabs={4}
        showLabel={false}
        label="Label"
        tabIconOnly={false}
        tabIconOnly1={false}
        tabIconOnly2={false}
        tabIconOnly3={false}
        tabSelected={false}
        tabSelected1={false}
        tabSelected2
        tabSelected3={false}
        tabLabel="12 months"
        tabLabel1="6 months"
        tabLabel2="30 days"
        tabLabel3="7 days"
      />
    </Box>
  );
};

export default FrameComponent2;
