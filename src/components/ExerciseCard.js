import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img
        src={`${process.env.PUBLIC_URL}/${exercise.gifUrl}`}
        alt={exercise.name}
        loading="lazy"
      />
      <Stack direction="row">
        <Button
        className="ibm-plex"
          sx={{
            ml: "21px",
            color: "#FFF",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          <sans-light>
          {exercise.bodyPart}
          </sans-light>
        </Button>
        <Button
        className="ibm-plex"
          sx={{
            ml: "21px",
            color: "#FFF",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          <sans-light>
          {exercise.target}
          </sans-light>
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="11px"
        textTransform="capitalize"
        fontSize="24px"
        className="ibm-plex"
      >
        <sans-semibold>
        {exercise.name}
        </sans-semibold>
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
