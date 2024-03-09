import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography fontFamily="Oswald" color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        fontFamily="Poppins"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px" mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises"
      sx={{ backgroundColor: '#FF2625', padding: '10px'}}>
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        fontFamily="Oswald"
        color="#FF2625"
        sx={{
            opacity: 0.1,
            display: { lg: 'block', xs: 'none' },
            userSelect: 'none',
        }}
        fontSize="200px">
            Exercises
      </Typography>
      <img src={HeroBannerImage} className="hero-banner-img" 
      alt="Athletic female"/>
    </Box>
  );
};

export default HeroBanner;
