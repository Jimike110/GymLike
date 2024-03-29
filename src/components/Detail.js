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
      <Stack className="ibm-plex" sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography textTransform="capitalize" variant="h3">
          <sans-semibold>{name}</sans-semibold>
        </Typography>
        <Typography ml="20px" variant="h6">
          {instructions &&
            instructions.map((instruction, index) => (
              <sans-regular>
                <ul key={index}>
                  <li>{instruction}</li>
                </ul>
              </sans-regular>
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
                width: "60px",
                height: "60px",
              }}
            >
              <img
                src={detail.icon}
                alt={bodyPart}
                style={{ width: "40px", height: "40px" }}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h6">
              <sans-medium>{detail.name}</sans-medium>
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
