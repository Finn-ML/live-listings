"use client";
import type { NextPage } from "next";
import { useState } from "react";
import {
  Box,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import Image from "next/image";
import TransactionCard from "../components/transaction-card";
import styles from "./root.module.css";

const Root: NextPage = () => {
  const [transactionCardItems] = useState([
    {
      type: "Default",
      offered: "$360,000",
      townCity: "Washington, DC",
      addressLine: "1427 Monroe Street NW, Hilltop",
      listed: "72",
      frame1261156729: "/Frame-12611567292@2x.png",
      showDiv: true,
      divVisible: true,
      cTA: "Sign Contract",
      highlighted: true,
      stage: "Option Period",
      liflagTriangleRight: "/li-flag-triangle-right.svg",
      badgeType: "Default",
      badgeType1: "Default",
      badgeType2: "Default",
      badgeType3: "Default",
      badgeLabel: "1,500 ft²",
      badgeLabel1: "3",
      badgeLabel2: "3",
      badgeLabel3: "HT",
      badgeScale01: "/scale-01.svg",
      badgeChevronRight: "pending_I4035:15283;2079:17666;37:6442",
      badgeChevronRight1: "pending_I4035:15283;2079:17667;37:6442",
      badgeChevronRight2: "pending_I4035:15283;2079:17668;37:6442",
      badgeChevronRight3: "pending_I4035:15283;2079:17669;37:6442",
      badgeTrailingIcon: false,
      badgeTrailingIcon1: false,
      badgeTrailingIcon2: false,
      badgeTrailingIcon3: false,
      badgeLeadingIcon: true,
      badgeLeadingIcon1: true,
      badgeLeadingIcon2: true,
      badgeLeadingIcon3: true,
      badgeScale01Border: "none",
      badgeScale01Border1: "unset",
      badgeScale01Border2: "unset",
      badgeScale01Border3: "unset",
      type1: "Success",
      label: "Offer accepted",
      checkCircle: "/check-circle.svg",
      chevronRight: "pending_I4035:15283;2079:17673;2079:24831",
      trailingIcon: false,
      leadingIcon: true,
      iconOnly: true,
      state: "Disabled",
      type2: "Tertiary",
    },
    {
      type: "Default",
      offered: "$340,000",
      townCity: "Washington, DC",
      addressLine: "45 Maple Street, Rivertown",
      listed: "134",
      frame1261156729: "/Frame-1261156729@2x.png",
      showDiv: false,
      divVisible: false,
      cTA: "Review Offers",
      highlighted: false,
      stage: "Negotiation",
      liflagTriangleRight: "/li-flag-triangle-right1.svg",
      badgeType: "Default",
      badgeType1: "Default",
      badgeType2: "Default",
      badgeType3: "Default",
      badgeLabel: "1,600 ft²",
      badgeLabel1: "2",
      badgeLabel2: "2",
      badgeLabel3: "MLS",
      badgeScale01: "/scale-01.svg",
      badgeChevronRight: "pending_I4035:15284;2079:17666;37:6442",
      badgeChevronRight1: "pending_I4035:15284;2079:17667;37:6442",
      badgeChevronRight2: "pending_I4035:15284;2079:17668;37:6442",
      badgeChevronRight3: "pending_I4035:15284;2079:17669;37:6442",
      badgeTrailingIcon: false,
      badgeTrailingIcon1: false,
      badgeTrailingIcon2: false,
      badgeTrailingIcon3: false,
      badgeLeadingIcon: true,
      badgeLeadingIcon1: true,
      badgeLeadingIcon2: true,
      badgeLeadingIcon3: true,
      badgeScale01Border: "",
      badgeScale01Border1: "unset",
      badgeScale01Border2: "unset",
      badgeScale01Border3: "unset",
      type1: "Alert",
      label: "2 offers pending",
      checkCircle: "/mail-02.svg",
      chevronRight: "pending_I4035:15284;2079:17673;69:4333",
      trailingIcon: false,
      leadingIcon: true,
      iconOnly: false,
      state: "",
      type2: "",
    },
    {
      type: "Default",
      offered: "$350,000",
      townCity: "Washington, DC",
      addressLine: "23 Pine Lane, Lakeview",
      listed: "58",
      frame1261156729: "/Frame-12611567291@2x.png",
      showDiv: false,
      divVisible: false,
      cTA: "Edit Listing",
      highlighted: false,
      stage: "Negotiation",
      liflagTriangleRight: "/li-flag-triangle-right1.svg",
      badgeType: "Default",
      badgeType1: "Default",
      badgeType2: "Default",
      badgeType3: "Default",
      badgeLabel: "1,950 ft²",
      badgeLabel1: "3",
      badgeLabel2: "2",
      badgeLabel3: "HT",
      badgeScale01: "/scale-01.svg",
      badgeChevronRight: "pending_I4035:15285;2079:17666;37:6442",
      badgeChevronRight1: "pending_I4035:15285;2079:17667;37:6442",
      badgeChevronRight2: "pending_I4035:15285;2079:17668;37:6442",
      badgeChevronRight3: "pending_I4035:15285;2079:17669;37:6442",
      badgeTrailingIcon: false,
      badgeTrailingIcon1: false,
      badgeTrailingIcon2: false,
      badgeTrailingIcon3: false,
      badgeLeadingIcon: true,
      badgeLeadingIcon1: true,
      badgeLeadingIcon2: true,
      badgeLeadingIcon3: true,
      badgeScale01Border: "unset",
      badgeScale01Border1: "unset",
      badgeScale01Border2: "unset",
      badgeScale01Border3: "unset",
      type1: "Brand",
      label: "Awaiting offers",
      checkCircle: "/clock.svg",
      chevronRight: "pending_I4035:15285;2079:17673;2079:24838",
      trailingIcon: false,
      leadingIcon: true,
      iconOnly: false,
      state: "",
      type2: "",
    },
  ]);
  return (
    <Box className={styles.root}>
      <Box className={styles.frameParent}>
        <Box className={styles.clockParent}>
          <Image
            className={styles.clockIcon}
            loading="lazy"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/clock1.svg"
          />
          <div className={styles.listingUnderReview}>
            1 listing under review
          </div>
        </Box>
        <div className={styles.youllBeNotified}>
          You’ll be notified once your listing is approved and live - usually
          within 1-2 business days
        </div>
        <div className={styles.viewListing}>View listing</div>
      </Box>
      <main className={styles.frameGroup}>
        <header className={styles.frameContainer}>
          <Box className={styles.liveListingsParent}>
            <Typography
              className={styles.liveListings}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{
                fontWeight: "600",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              Live Listings
            </Typography>
            <div className={styles.manageYourLive}>
              Manage your live listings and track their progress
            </div>
          </Box>
          <Box className={styles.inputFieldParent}>
            <FormControl
              className={styles.inputField}
              variant="standard"
              sx={{
                borderColor: "#c3c6cb",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fafbfd",
                borderRadius: "10px",
                width: "33.83458646616541%",
                height: "48px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "48px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "48px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "48px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "48px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#b0b3ba",
                  fontSize: 16,
                  fontWeight: "SemiBold",
                  fontFamily: "Montserrat",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "14px",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="20px"
                    height="20px"
                    src="/chevron-down.svg"
                    style={{ marginRight: "14px" }}
                  />
                )}
              >
                <MenuItem>All Statuses</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <FormControl
              className={styles.inputField2}
              variant="standard"
              sx={{
                borderColor: "#c3c6cb",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fafbfd",
                borderRadius: "10px",
                width: "37.59398496240601%",
                height: "48px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "48px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "48px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "48px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "48px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#071028",
                  fontSize: 16,
                  fontWeight: "SemiBold",
                  fontFamily: "Montserrat",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "14px",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="20px"
                    height="20px"
                    src="/chevron-down.svg"
                    style={{ marginRight: "14px" }}
                  />
                )}
              >
                <MenuItem>Last updated</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <Button
              className={styles.cta}
              endIcon={
                <img width="20px" height="20px" src="/arrow-right.svg" />
              }
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#40475b",
                fontSize: "16",
                background: "#e9ecf3",
                border: "#d8dbe4 solid 1px",
                borderRadius: "10px",
                "&:hover": { background: "#e9ecf3" },
                height: 48,
              }}
            >
              View all
            </Button>
          </Box>
        </header>
        <Box className={styles.transactionCardParent}>
          {transactionCardItems.map((item, index) => (
            <TransactionCard
              key={index}
              type={item.type}
              offered={item.offered}
              townCity={item.townCity}
              addressLine={item.addressLine}
              listed={item.listed}
              frame1261156729={item.frame1261156729}
              showDiv={item.showDiv}
              divVisible={item.divVisible}
              cTA={item.cTA}
              highlighted={item.highlighted}
              stage={item.stage}
              liflagTriangleRight={item.liflagTriangleRight}
              badgeType={item.badgeType}
              badgeType1={item.badgeType1}
              badgeType2={item.badgeType2}
              badgeType3={item.badgeType3}
              badgeLabel={item.badgeLabel}
              badgeLabel1={item.badgeLabel1}
              badgeLabel2={item.badgeLabel2}
              badgeLabel3={item.badgeLabel3}
              badgeScale01={item.badgeScale01}
              badgeChevronRight={item.badgeChevronRight}
              badgeChevronRight1={item.badgeChevronRight1}
              badgeChevronRight2={item.badgeChevronRight2}
              badgeChevronRight3={item.badgeChevronRight3}
              badgeTrailingIcon={item.badgeTrailingIcon}
              badgeTrailingIcon1={item.badgeTrailingIcon1}
              badgeTrailingIcon2={item.badgeTrailingIcon2}
              badgeTrailingIcon3={item.badgeTrailingIcon3}
              badgeLeadingIcon={item.badgeLeadingIcon}
              badgeLeadingIcon1={item.badgeLeadingIcon1}
              badgeLeadingIcon2={item.badgeLeadingIcon2}
              badgeLeadingIcon3={item.badgeLeadingIcon3}
              badgeScale01Border={item.badgeScale01Border}
              badgeScale01Border1={item.badgeScale01Border1}
              badgeScale01Border2={item.badgeScale01Border2}
              badgeScale01Border3={item.badgeScale01Border3}
              type1={item.type1}
              label={item.label}
              checkCircle={item.checkCircle}
              chevronRight={item.chevronRight}
              trailingIcon={item.trailingIcon}
              leadingIcon={item.leadingIcon}
              iconOnly={item.iconOnly}
              state={item.state}
              type2={item.type2}
            />
          ))}
        </Box>
      </main>
    </Box>
  );
};

export default Root;
