"use client";
import type { NextPage } from "next";
import { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import CompanyImage from "./company-image";
import RatingIcon from "./rating-icon";
import styles from "./collaborator-card.module.css";

export type CollaboratorCardType = {
  className?: string;
  collaboratorType?: string;
  line1?: string;
  line2?: string;
  reviews?: boolean;
  showType?: boolean;
  deletable?: boolean;
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
  joined1?: boolean;

  /** Variant props */
  joined?: boolean;
  selected?: boolean;
  type?: string;
};

const CollaboratorCard: NextPage<CollaboratorCardType> = ({
  className = "",
  joined = true,
  selected = false,
  type = "Company",
  collaboratorType = "Title Company",
  line1 = "Pinnacle Title Solutions",
  line2 = "Washington, DC",
  reviews = true,
  showType = false,
  deletable = false,
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
  joined1,
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
      <CompanyImage joined={joined1} company="Peregrin" />
      <Box className={styles.collaboratorInfoParent}>
        <Box className={styles.collaboratorInfo}>
          <div className={styles.usercompanyName}>{line1}</div>
          <div className={styles.locationemail}>{line2}</div>
        </Box>
        {!!showType && (
          <div className={styles.typeLabel}>{collaboratorType}</div>
        )}
        {!!reviews && (
          <Box className={styles.ratingContainer}>
            <Box className={styles.ratingDisplay}>
              {ratingIconItems.map((item, index) => (
                <RatingIcon key={index} color={item.color} fill={item.fill} />
              ))}
            </Box>
            <div className={styles.divider}>(24)</div>
          </Box>
        )}
      </Box>
      {!!deletable && (
        <Image
          className={styles.collaboratorCardChild}
          width={20}
          height={72}
          sizes="100vw"
          alt=""
        />
      )}
    </Box>
  );
};

export default CollaboratorCard;
