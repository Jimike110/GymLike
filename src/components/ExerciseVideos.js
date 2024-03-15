import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box>
      <Typography variant="h4">Related videos for: {name}</Typography>
      <Stack direction="row">
        {exerciseVideos?.slice(1, 6).map((exerciseVideo, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch/v=?${exerciseVideo.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={exerciseVideo.video.thumbnails[0].url} alt={exerciseVideo.video.title} />
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
