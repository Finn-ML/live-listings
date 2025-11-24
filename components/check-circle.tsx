import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./check-circle.module.css";

export type CheckCircleType = {
  className?: string;
  trailingIcon?: boolean;
  leadingIcon?: boolean;
  label?: string;

  /** Variant props */
  type?: "Success" | "Alert" | "Brand";
};

const CheckCircle: NextPage<CheckCircleType> = ({
  className = "",
  type = "Default",
  trailingIcon = false,
  leadingIcon = true,
  label = "Offer accepted",
}) => {
  return (
    <Box className={[styles.root, className].join(" ")} data-type={type}>
      {!!leadingIcon && (
        <Image
          className={styles.checkCircleIcon}
          loading="lazy"
          width={18}
          height={18}
          sizes="100vw"
          alt=""
          src="/check-circle.svg"
        />
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
          <Box className={styles.box} />
        </Image>
      )}
    </Box>
  );
};

export default CheckCircle;