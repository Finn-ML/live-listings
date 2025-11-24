import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./liflag-triangle-right.module.css";

export type LiflagTriangleRightType = {
  className?: string;
  stage?: string;

  /** Variant props */
  highlighted?: boolean;
};

const LiflagTriangleRight: NextPage<LiflagTriangleRightType> = ({
  className = "",
  highlighted = true,
  stage = "Option Period",
}) => {
  return (
    <Box
      className={[styles.root, className].join(" ")}
      data-highlighted={highlighted}
    >
      <Image
        className={styles.liflagTriangleRightIcon}
        loading="lazy"
        width={16}
        height={16}
        sizes="100vw"
        alt=""
        src="/li-flag-triangle-right.svg"
      />
      <div className={styles.pending}>{stage}</div>
    </Box>
  );
};

export default LiflagTriangleRight;