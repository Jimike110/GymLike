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
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      // const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailData = await fetchData("id", id);
      setExerciseDetail(exerciseDetailData[0]);
      console.log("ExerciseDetail:", exerciseDetailData[0]);
      // const exerciseVideosData = await fetchYoutubeData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name}`, youtubeOptions);
      // console.log("Exercise videos data: ", exerciseVideosData)
      // setExerciseVideos(exerciseVideosData.contents);
      // console.log("Exercise videos: ", exerciseVideos);
    }
    fetchExerciseDetail();
  }, [id]);
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      {/* <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} /> */}
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail
