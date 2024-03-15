import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, instructions, gifUrl, target, name, equipment } =
    exerciseDetail;

  const extraDetail = [
    { name: bodyPart, icon: BodyPartImage },
    { name: target, icon: TargetImage },
    { name: equipment, icon: EquipmentImage },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/${gifUrl}`}
        alt={name}
        loading="lazy"
        className="detail-image"
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography textTransform="capitalize" variant="h3">
          {name}
        </Typography>
        <Typography variant="h6">
          {instructions &&
            instructions.map((instruction, index) => (
              <ul key={index}>
                <li>{instruction}</li>
              </ul>
            ))}
        </Typography>
        {extraDetail.map((detail, index) => (
          <Stack
            key={index}
            direction="row"
            gap="24px"
            alignItems="center"
            sx={{ fontSize: "18px" }}
          >
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={detail.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {detail.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
