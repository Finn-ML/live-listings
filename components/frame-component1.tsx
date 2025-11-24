"use client";
import type { NextPage } from "next";
import { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Image from "next/image";
import InputField from "./input-field";
import CollaboratorCard from "./collaborator-card";
import CollaboratorCard1 from "./collaborator-card1";
import CompanyImage1 from "./company-image1";
import RatingIcon from "./rating-icon";
import styles from "./frame-component1.module.css";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: NextPage<FrameComponent11Type> = ({
  className = "",
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
    <Box className={[styles.actionAreaParent, className].join(" ")}>
      <Box className={styles.actionArea}>
        <Box className={styles.actionContainer}>
          <Typography
            className={styles.addTitleCompany}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{
              fontWeight: "600",
              lineHeight: "150%",
              letterSpacing: "-0.02em",
            }}
          >
            Add Title Company
          </Typography>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectur
          </div>
        </Box>
        <button className={styles.cta}>
          <Image
            className={styles.xCloseIcon}
            width={20}
            height={20}
            sizes="100vw"
            alt=""
            src="/x-close.svg"
          />
        </button>
      </Box>
      <section className={styles.inputArea}>
        <InputField
          tabs={2}
          showLabel={false}
          label="Label"
          tabIconOnly={false}
          tabIconOnly1={false}
          tabSelected
          tabSelected1={false}
          tabLabel="Select Existing"
          tabLabel1="Invite New"
        />
        <TextField
          className={styles.inputField}
          placeholder="Search title companies"
          variant="outlined"
          slotProps={{
            input: {
              startAdornment: (
                <img width="20px" height="20px" src="/search-md.svg" />
              ),
            },
          }}
          sx={{
            "& fieldset": { borderColor: "#c3c6cb" },
            "& .MuiInputBase-root": {
              height: "48px",
              backgroundColor: "#fafbfd",
              borderRadius: "10px",
            },
            "& .MuiInputBase-input": { paddingLeft: "8px", color: "#b0b3ba" },
          }}
        />
        <Box className={styles.collaboratorCarousel}>
          <CollaboratorCard
            joined
            selected={false}
            type="Company"
            collaboratorType="Title Company"
            line1="Pinnacle Title Solutions"
            line2="Washington, DC"
            reviews
            showType={false}
            deletable={false}
            ratingIconColor="Yellow"
            ratingIconColor1="Yellow"
            ratingIconColor2="Yellow"
            ratingIconColor3="Yellow"
            ratingIconColor4="Yellow"
            ratingIconFill="100%"
            ratingIconFill1="100%"
            ratingIconFill2="100%"
            ratingIconFill3="100%"
            ratingIconFill4="50%"
            joined1
          />
          <CollaboratorCard1
            joined
            selected
            type="Company"
            reviews
            collaboratorType="Title Company"
            line1={`Acme Titles & Estates`}
            line2="Washington, DC"
            showType={false}
            ratingIconColor="Yellow"
            ratingIconColor1="Yellow"
            ratingIconColor2="Yellow"
            ratingIconColor3="Yellow"
            ratingIconColor4="Yellow"
            ratingIconFill="100%"
            ratingIconFill1="100%"
            ratingIconFill2="100%"
            ratingIconFill3="100%"
            ratingIconFill4="50%"
          />
          <CollaboratorCard
            joined
            selected={false}
            type="Company"
            collaboratorType="Title Company"
            line1="Horizon Title Agency"
            line2="Baltimore, MD"
            reviews
            showType={false}
            deletable={false}
            ratingIconColor="Yellow"
            ratingIconColor1="Yellow"
            ratingIconColor2="Yellow"
            ratingIconColor3="Yellow"
            ratingIconColor4="Yellow"
            ratingIconFill="100%"
            ratingIconFill1="100%"
            ratingIconFill2="100%"
            ratingIconFill3="100%"
            ratingIconFill4="50%"
            joined1
          />
          <Box className={styles.collaboratorCard}>
            <CompanyImage1 joined company="Sisyphus" />
            <Box className={styles.frameParent}>
              <Box className={styles.usercompanyNameParent}>
                <div className={styles.usercompanyName}>
                  Summit Escrow Services
                </div>
                <div className={styles.locationemail}>Washington, DC</div>
              </Box>
              <div className={styles.typeLabel}>Title Company</div>
              <Box className={styles.frameGroup}>
                <Box className={styles.ratingIconParent}>
                  {ratingIconItems.map((item, index) => (
                    <RatingIcon
                      key={index}
                      color={item.color}
                      fill={item.fill}
                    />
                  ))}
                </Box>
                <div className={styles.div}>(24)</div>
              </Box>
            </Box>
            <Image
              className={styles.collaboratorCardChild}
              width={20}
              height={72}
              sizes="100vw"
              alt=""
            />
          </Box>
          <CollaboratorCard
            joined
            selected={false}
            type="Company"
            collaboratorType="Title Company"
            line1="Pinnacle Title Solutions"
            line2="Washington, DC"
            reviews
            showType={false}
            deletable={false}
            ratingIconColor="Yellow"
            ratingIconColor1="Yellow"
            ratingIconColor2="Yellow"
            ratingIconColor3="Yellow"
            ratingIconColor4="Yellow"
            ratingIconFill="100%"
            ratingIconFill1="100%"
            ratingIconFill2="100%"
            ratingIconFill3="100%"
            ratingIconFill4="50%"
            joined1
          />
        </Box>
      </section>
      <Box className={styles.actionArea2}>
        <Button
          className={styles.cta2}
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
          Cancel
        </Button>
        <Button
          className={styles.cta2}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#ebeffb",
            fontSize: "16",
            background: "#003ae2",
            border: "#1a4ee5 solid 1px",
            borderRadius: "10px",
            "&:hover": { background: "#003ae2" },
            height: 48,
          }}
        >
          Add to offer
        </Button>
      </Box>
    </Box>
  );
};

export default FrameComponent11;