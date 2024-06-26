import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchData, fetchYoutubeData, youtubeOptions } from "../utils/fetchData";
import ExerciseVideos from '../components/ExerciseVideos';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchExerciseDetail = async () => {
      window.scrollTo(0, 0);
      const exerciseDetailData = await fetchData("id", id);
      setExerciseDetail(exerciseDetailData);
  
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
      let query = exerciseDetailData.name;
      if (navigator.language === "ru") {
        query += " тренировка"; // Added "workout" to the query for Russian language to get meaningful results
      }
  
      const exerciseVideosData = await fetchYoutubeData(`${youtubeSearchUrl}/search?query=${query}&sort=r`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const maxItems = 12;
      const targetMuscleExercisesData = await fetchData("target", exerciseDetailData.target);
      setTargetMuscleExercises(targetMuscleExercisesData.slice(0, maxItems))

      const equipmentExercisesData = await fetchData("equipment", exerciseDetailData.equipment);
      setEquipmentExercises(equipmentExercisesData.slice(0, maxItems));
    }
    fetchExerciseDetail();
  }, [id]);
  
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail
