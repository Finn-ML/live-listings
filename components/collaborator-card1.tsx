"use client";
import type { NextPage } from "next";
import { useState } from "react";
import { Box } from "@mui/material";
import CompanyImage from "./company-image";
import RatingIcon from "./rating-icon";
import styles from "./collaborator-card1.module.css";

export type CollaboratorCard1Type = {
  className?: string;
  reviews?: boolean;
  collaboratorType?: string;
  line1?: string;
  line2?: string;
  showType?: boolean;
  ratingIconColor?: string;
  ratingIconColor1?: string;
  ratingIconColor2?: string;
  ratingIconColor3?: string;
  ratingIconColor4?: string;
  ratingIconFill?: "100%" | "50%";
  ratingIconFill1?: "100%" | "50%";
  ratingIconFill2?: "100%" | "50%";
  ratingIconFill3?: "100%" | "50%";
  ratingIconFill4?: "100%" | "50%";

  /** Variant props */
  joined?: boolean;
  selected?: boolean;
  type?: string;
};

const CollaboratorCard1: NextPage<CollaboratorCard1Type> = ({
  className = "",
  joined = true,
  selected = false,
  type = "Company",
  reviews = true,
  collaboratorType = "Title Company",
  line1 = "Acme Titles & Estates",
  line2 = "Washington, DC",
  showType = false,
  ratingIconColor,
  ratingIconColor1,
  ratingIconColor2,
  ratingIconColor3,
  ratingIconColor4,
  ratingIconFill = "100%",
  ratingIconFill1 = "100%",
  ratingIconFill2 = "100%",
  ratingIconFill3 = "100%",
  ratingIconFill4 = "100%",
}) => {
  const [ratingIconItems] = useState([
    {
      color: "Yellow",
      fill: "100%" as const,
    },
    {
      color: "Yellow",
      fill: "100%" as const,
    },
    {
      color: "Yellow",
      fill: "100%" as const,
    },
    {
      color: "Yellow",
      fill: "100%" as const,
    },
    {
      color: "Yellow",
      fill: "50%" as const,
    },
  ]);
  return (
    <Box
      className={[styles.collaboratorCard, className].join(" ")}
      data-joined={joined}
      data-selected={selected}
      data-type={type}
    >
      <CompanyImage joined company={`Flora&Fauna`} />
      <Box className={styles.frameParent}>
        <Box className={styles.usercompanyNameParent}>
          <div className={styles.usercompanyName}>{line1}</div>
          <div className={styles.locationemail}>{line2}</div>
        </Box>
        {!!showType && (
          <div className={styles.typeLabel}>{collaboratorType}</div>
        )}
        {!!reviews && (
          <Box className={styles.frameGroup}>
            <Box className={styles.ratingIconParent}>
              {ratingIconItems.map((item, index) => (
                <RatingIcon key={index} color={item.color} fill={item.fill} />
              ))}
            </Box>
            <div className={styles.div}>(24)</div>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CollaboratorCard1;
