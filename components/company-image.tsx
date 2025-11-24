import type { NextPage } from "next";
import { Box } from "@mui/material";
import CompanyLogo from "./company-logo";
import styles from "./company-image.module.css";

export type CompanyImageType = {
  className?: string;
  company?: "Peregrin" | "Flora&Fauna" | "Hexahedron";

  /** Variant props */
  joined?: boolean;
};

const CompanyImage: NextPage<CompanyImageType> = ({
  className = "",
  joined = true,
  company = "Peregrin",
}) => {
  return (
    <Box
      className={[styles.companyImage, className].join(" ")}
      data-joined={joined}
    >
      <CompanyLogo company={company} />
    </Box>
  );
};

export default CompanyImage;
