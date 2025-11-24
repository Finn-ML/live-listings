import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./company-logo.module.css";

export type CompanyLogoType = {
  className?: string;

  /** Variant props */
  company?: "Peregrin" | "Flora&Fauna" | "Hexahedron";
};

const CompanyLogo: NextPage<CompanyLogoType> = ({
  className = "",
  company = "3Portals",
}) => {
  return (
    <Box className={[styles.root, className].join(" ")} data-company={company}>
      <Image
        className={styles.logomarkIcon}
        loading="lazy"
        width={33}
        height={36}
        sizes="100vw"
        alt=""
        src="/Logomark.svg"
      />
    </Box>
  );
};

export default CompanyLogo;
