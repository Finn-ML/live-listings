import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./cursor.module.css";

export type CursorType = {
  className?: string;

  /** Variant props */
  state?: string;
};

const Cursor: NextPage<CursorType> = ({ className = "", state = "Hand" }) => {
  return (
    <Box className={[styles.cursor, className].join(" ")} data-state={state}>
      <Image
        className={styles.shapeIcon}
        width={14}
        height={16}
        sizes="100vw"
        alt=""
        src="/Shape.svg"
      />
      <Image
        className={styles.linesIcon}
        loading="lazy"
        width={5}
        height={4}
        sizes="100vw"
        alt=""
        src="/Lines.svg"
      />
    </Box>
  );
};

export default Cursor;
