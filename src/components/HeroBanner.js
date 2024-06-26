import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
import { multiLangTextsFn } from "../utils/fetchData";

const HeroBanner = () => {
  return (
    <div>
    <Box
      // sx={{
      //   mt: { lg: "212px", xs: "70px" },
      //   ml: { sm: "50px" },
      // }}
      // position="relative"
      p="20px"
      className="hero-box"
    >
      <div className="hero-left">
      <Typography
        fontFamily="Oswald"
        color="#FF2625"
        fontWeight="600"
        fontSize="22px"
        letterSpacing={7}
        wordSpacing={15}
        pt="30px"
      >
        { multiLangTextsFn().hero_supertitle }
      </Typography>
      <Typography
        className="ibm-plex"
        sx={{ fontSize: { lg: "48px", xs: "44px" } }}
        mb="23px"
        mt="30px"
      >
        <sans-bold>
          { multiLangTextsFn().hero_title_1 } <br /> { multiLangTextsFn().hero_title_2 }
        </sans-bold>
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" className="ibm-plex" mb={4}>
        <sans-light-italic>
        { multiLangTextsFn().hero_subtitle }
        </sans-light-italic>
      </Typography>
      <Button
      className="ibm-plex"
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#FF2625", padding: "10px", letterSpacing: "2px" }}
      >
        <sans-bold>
        { multiLangTextsFn().hero_button }
        </sans-bold>
      </Button>
      </div>
      <div className="hero-right">
      <img
        src={HeroBannerImage}
        className="hero-banner-img"
        alt="Athletic female"
      />
      </div>
    </Box>
      <Typography
      className="exercises"
        fontWeight={600}
        fontFamily="Oswald"
        color="#FF2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
          userSelect: "none",
        }}
        fontSize="200px"
        marginBottom="-12rem"
      >
        { multiLangTextsFn().hero_bg_text }
      </Typography>
      </div>
  );
};

export default HeroBanner;
