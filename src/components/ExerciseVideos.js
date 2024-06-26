import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { multiLangTextsFn } from "../utils/fetchData";

const ExerciseVideos = ({ exerciseVideos, name }) => {

  return (
    <Box sx={{ marginTop: { lg: "106px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "40px", xs: "22px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        { multiLangTextsFn().exercise_video_pre }{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        { multiLangTextsFn().exercise_video_post }
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "40px", xs: "0px" } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ borderTopLeftRadius: "20px" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography
                sx={{ fontSize: { lg: "25px", xs: "18px" } }}
                fontWeight={600}
                color="#000"
              >
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
