import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./rating-icon.module.css";

export type RatingIconType = {
  className?: string;

  /** Variant props */
  color?: string;
  fill?: "100%" | "50%";
};

const RatingIcon: NextPage<RatingIconType> = ({
  className = "",
  color = "Yellow",
  fill = "0%",
}) => {
  return (
    <Box
      className={[styles.root, className].join(" ")}
      data-color={color}
      data-fill={fill}
    >
      <Image
        className={styles.starBackgroundIcon}
        width={20}
        height={20}
        sizes="100vw"
        alt=""
        src="/Star-background1.svg"
      />
      <Image
        className={styles.starIcon}
        loading="lazy"
        width={20}
        height={20}
        sizes="100vw"
        alt=""
        src="/Star1.svg"
      />
    </Box>
  );
};

export default RatingIcon;
