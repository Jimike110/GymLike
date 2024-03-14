import exercisesData from "../data/exercises.json";

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (filterTerm, filterWord) => {
  switch (filterTerm) {
    case "all":
      return exercisesData;
    case "id":
      return exercisesData.filter(exercise => exercise.id === filterWord);
    case "bodyPart":
      return exercisesData.filter(exercise => exercise.bodyPart === filterWord);
    case "target":
      return exercisesData.filter(exercise => exercise.target === filterWord);
    case "name":
      return exercisesData.filter(exercise => exercise.name === filterWord);
    case "equipment":
      return exercisesData.filter(exercise => exercise.equipment === filterWord);
    default:
      throw new Error(`Unknown filter term: ${filterTerm}`);
  }
};
