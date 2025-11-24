import type { NextPage } from "next";
import { Box } from "@mui/material";
import CompanyLogo1 from "./company-logo1";
import styles from "./company-image1.module.css";

export type CompanyImage1Type = {
  className?: string;
  company?: string;

  /** Variant props */
  joined?: boolean;
};

const CompanyImage1: NextPage<CompanyImage1Type> = ({
  className = "",
  joined = true,
  company,
}) => {
  return (
    <Box
      className={[styles.companyImage, className].join(" ")}
      data-joined={joined}
    >
      <CompanyLogo1 company={company} />
    </Box>
  );
};

export default CompanyImage1;
