import type { NextPage } from "next";
import { Box } from "@mui/material";
import FrameComponent11 from "./frame-component1";
import styles from "./add-title-company-pop-up-existing.module.css";

export type AddTitleCompanyPopUpExistingType = {
  className?: string;
};

const AddTitleCompanyPopUpExisting: NextPage<
  AddTitleCompanyPopUpExistingType
> = ({ className = "" }) => {
  return (
    <Box className={[styles.addTitleCompanyPopUpExis, className].join(" ")}>
      <FrameComponent11 />
    </Box>
  );
};

export default AddTitleCompanyPopUpExisting;
