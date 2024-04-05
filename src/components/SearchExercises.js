import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, multiLang, bodyPartsImagesFn, multiLangTextsFn } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [bodyPartsImages, setBodyPartsImages] = useState([]);

  useEffect(() => {
    setBodyParts(multiLang());
    setBodyPartsImages(bodyPartsImagesFn());
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData("all");

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      document
        .getElementById("exercises")
        .scrollIntoView({ behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
        className="ibm-plex"
      >
        <sans-bold>
          { multiLangTextsFn().exercises_section_title_pre } <br /> { multiLangTextsFn().exercises_section_title_post }
        </sans-bold>
      </Typography>
      <Box className="ibm-plex" position="relative" mb="72px">
        <sans-regular>
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder={ multiLangTextsFn().search_box_placeholder }
          type="text"
        />
        </sans-regular>
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          { multiLangTextsFn().search_button_text }
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          isBodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
          bodyPartsImages={bodyPartsImages}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
