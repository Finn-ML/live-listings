import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./company-logo1.module.css";

export type CompanyLogo1Type = {
  className?: string;

  /** Variant props */
  company?: string;
};

const CompanyLogo1: NextPage<CompanyLogo1Type> = ({
  className = "",
  company = "3Portals",
}) => {
  return (
    <Box
      className={[styles.companyLogo, className].join(" ")}
      data-company={company}
    >
      <Box className={styles.logomark}>
        <Box className={styles.vector} />
        <Box className={styles.vector2} />
        <Image
          className={styles.vectorIcon}
          width={8.7}
          height={14.4}
          sizes="100vw"
          alt=""
        />
        <Image
          className={styles.vectorIcon2}
          width={8.7}
          height={14.4}
          sizes="100vw"
          alt=""
        />
        <Image
          className={styles.vectorIcon3}
          width={15.9}
          height={14.4}
          sizes="100vw"
          alt=""
        />
        <Image
          className={styles.vectorIcon4}
          loading="lazy"
          width={15.9}
          height={14.4}
          sizes="100vw"
          alt=""
        />
      </Box>
    </Box>
  );
};

export default CompanyLogo1;
