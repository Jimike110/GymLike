import React from "react";
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, setBodyPart, bodyPart, bodyPartsImages }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            borderTop: "4px solid #FF2625",
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
          }
        : {
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
          }
    }
    onClick={() => {
      setBodyPart(item);
      document
        .getElementById("exercises")
        .scrollIntoView({ behavior: "smooth" });
    }}
  >
    <img src={bodyPartsImages} alt="dumbbell" style={{ width: "50px", height: "50px" }} />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Oswald"
      color="#3A1212"
      textTransform="capitalize"
    >
      {" "}
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
