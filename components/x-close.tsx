import type { NextPage } from "next";
import Image from "next/image";
import styles from "./x-close.module.css";

export type XCloseType = {
  className?: string;

  /** Variant props */
  iconOnly?: boolean;
  state?: string;
  type?: string;
};

const XClose: NextPage<XCloseType> = ({
  className = "",
  iconOnly = false,
  state = "Default",
  type = "Primary",
}) => {
  return (
    <button
      className={[styles.cta, className].join(" ")}
      data-iconOnly={iconOnly}
      data-state={state}
      data-type={type}
    >
      <Image
        className={styles.xCloseIcon}
        width={20}
        height={20}
        sizes="100vw"
        alt=""
        src="/x-close.svg"
      />
    </button>
  );
};

export default XClose;
