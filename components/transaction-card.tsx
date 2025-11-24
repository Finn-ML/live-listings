"use client";
import type { NextPage } from "next";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import LiflagTriangleRight from "./liflag-triangle-right";
import Scale from "./scale";
import CheckCircle from "./check-circle";
import DotsHorizontal from "./dots-horizontal";
import styles from "./transaction-card.module.css";

export type TransactionCardType = {
  className?: string;
  offered?: string;
  townCity?: string;
  addressLine?: string;
  listed?: string;
  frame1261156729: string;
  showDiv?: boolean;
  divVisible?: boolean;
  cTA?: string;
  highlighted?: boolean;
  stage?: string;
  liflagTriangleRight: string;
  badgeType?: string;
  badgeType1?: string;
  badgeType2?: string;
  badgeType3?: string;
  badgeLabel?: string;
  badgeLabel1?: string;
  badgeLabel2?: string;
  badgeLabel3?: string;
  badgeScale01: string;
  badgeChevronRight?: string;
  badgeChevronRight1?: string;
  badgeChevronRight2?: string;
  badgeChevronRight3?: string;
  badgeTrailingIcon?: boolean;
  badgeTrailingIcon1?: boolean;
  badgeTrailingIcon2?: boolean;
  badgeTrailingIcon3?: boolean;
  badgeLeadingIcon?: boolean;
  badgeLeadingIcon1?: boolean;
  badgeLeadingIcon2?: boolean;
  badgeLeadingIcon3?: boolean;
  badgeScale01Border?: string;
  badgeScale01Border1?: string;
  badgeScale01Border2?: string;
  badgeScale01Border3?: string;
  type1?: "Success" | "Alert" | "Brand";
  label?: string;
  checkCircle: string;
  chevronRight?: string;
  trailingIcon?: boolean;
  leadingIcon?: boolean;
  iconOnly?: boolean;
  state?: string;
  type2?: string;

  /** Variant props */
  type?: string;
};

const TransactionCard: NextPage<TransactionCardType> = ({
  className = "",
  type = "Default",
  offered = "$360,000",
  townCity = "Washington, DC",
  addressLine = "1427 Monroe Street NW, Hilltop",
  listed = "72",
  frame1261156729,
  showDiv,
  divVisible,
  cTA,
  highlighted,
  stage,
  liflagTriangleRight,
  badgeType,
  badgeType1,
  badgeType2,
  badgeType3,
  badgeLabel,
  badgeLabel1,
  badgeLabel2,
  badgeLabel3,
  badgeScale01,
  badgeChevronRight,
  badgeChevronRight1,
  badgeChevronRight2,
  badgeChevronRight3,
  badgeTrailingIcon,
  badgeTrailingIcon1,
  badgeTrailingIcon2,
  badgeTrailingIcon3,
  badgeLeadingIcon,
  badgeLeadingIcon1,
  badgeLeadingIcon2,
  badgeLeadingIcon3,
  badgeScale01Border,
  badgeScale01Border1,
  badgeScale01Border2,
  badgeScale01Border3,
  type1 = "Success",
  label,
  checkCircle,
  chevronRight,
  trailingIcon,
  leadingIcon,
  iconOnly,
  state,
  type2,
}) => {
  const [scaleItems] = useState([
    {
      type: "Default",
      trailingIcon: false,
      leadingIcon: true,
      label: "1,500 ft²",
      scale01Border: "none",
      scale01: badgeScale01,
    },
    {
      type: "Default",
      trailingIcon: false,
      leadingIcon: true,
      label: "3",
      scale01Border: "unset",
      scale01: "/li-bed-double.svg",
    },
    {
      type: "Default",
      trailingIcon: false,
      leadingIcon: true,
      label: "3",
      scale01Border: "unset",
      scale01: "/li-bath.svg",
    },
    {
      type: "Default",
      trailingIcon: false,
      leadingIcon: true,
      label: "HT",
      scale01Border: "unset",
      scale01: "/li-store.svg",
    },
  ]);
  return (
    <section
      className={[styles.transactionCard, className].join(" ")}
      data-type={type}
    >
      <Image
        className={styles.transactionCardChild}
        loading="lazy"
        width={240}
        height={160}
        sizes="100vw"
        alt=""
        src={frame1261156729}
      />
      <Box className={styles.frameParent}>
        <Box className={styles.frameGroup}>
          <Box className={styles.stageIndicatorParent}>
            <LiflagTriangleRight
              highlighted={highlighted}
              stage={stage}
              liflagTriangleRight={liflagTriangleRight}
            />
            <Box className={styles.beverlyWaySpringfieldParent}>
              <div className={styles.beverlyWaySpringfield}>{addressLine}</div>
              <div className={styles.washingtonDc}>{townCity}</div>
            </Box>
          </Box>
          <Box className={styles.badgeParent}>
            {scaleItems.map((item, index) => (
              <Scale
                key={index}
                type={item.type}
                trailingIcon={item.trailingIcon}
                leadingIcon={item.leadingIcon}
                label={item.label}
                scale01Border={item.scale01Border}
                scale01={item.scale01}
              />
            ))}
          </Box>
        </Box>
        <Box className={styles.frameContainer}>
          <Box className={styles.listedForParent}>
            <div className={styles.listedFor}>Total views</div>
            <div className={styles.div}>{listed}</div>
          </Box>
          <Box className={styles.offeredPriceParent}>
            <div className={styles.offeredPrice}>Listed for</div>
            <div className={styles.div2}>{offered}</div>
          </Box>
        </Box>
        <Box className={styles.divider} />
        <Box className={styles.frameBox}>
          <Box className={styles.badgeGroup}>
            <CheckCircle
              type={type1}
              trailingIcon={trailingIcon}
              leadingIcon={leadingIcon}
              label={label}
              checkCircle={checkCircle}
            />
            <Box className={styles.closes091825Parent}>
              {!!showDiv && (
                <div className={styles.closes091825}>Closes 09/18/25</div>
              )}
              {!!divVisible && <div className={styles.div3}>•</div>}
              <div className={styles.updated2dAgo}>Updated 2d ago</div>
            </Box>
          </Box>
          <Box className={styles.ctaParent}>
            <Button
              className={styles.cta}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#ebeffb",
                fontSize: "16",
                background: "#003ae2",
                border: "#1a4ee5 solid 1px",
                borderRadius: "10px",
                "&:hover": { background: "#003ae2" },
                width: 192,
                height: 48,
              }}
            >
              {cTA}
            </Button>
            <DotsHorizontal iconOnly={iconOnly} state={state} type={type2} />
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default TransactionCard;
