import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./dots-horizontal.module.css";

export type DotsHorizontalType = {
  className?: string;

  /** Variant props */
  iconOnly?: boolean;
  state?: string;
  type?: string;
};

const DotsHorizontal: NextPage<DotsHorizontalType> = ({
  className = "",
  iconOnly = false,
  state = "Default",
  type = "Primary",
}) => {
  return (
    <Box
      className={[styles.cta, className].join(" ")}
      data-iconOnly={iconOnly}
      data-state={state}
      data-type={type}
    >
      <Image
        className={styles.dotsHorizontalIcon}
        loading="lazy"
        width={20}
        height={20}
        sizes="100vw"
        alt=""
        src="/dots-horizontal1.svg"
      />
    </Box>
  );
};

export default DotsHorizontal;
