import exercisesData from "../data/exercises.json";
import exercisesDataRussian from "../data/exercises_ru.json";

import multiLangEn from "../data/multi_lang_en.json";
import multiLangRu from "../data/multi_lang_ru.json";

let allBodyParts;
let bodyPartImages;
let selectedExercisesData;
let multiLangTexts;

if (navigator.language === "ru") {
  selectedExercisesData = exercisesDataRussian;
  multiLangTexts = multiLangRu;
  allBodyParts = [
    "все",
    "назад",
    "кардио",
    "грудь",
    "нижние рычаги",
    "голени",
    "шея",
    "плечи",
    "верхняя часть ног",
    "талия",
  ];

  bodyPartImages = [
    `${process.env.PUBLIC_URL}/icons/all.png`,
    `${process.env.PUBLIC_URL}/icons/back.png`,
    `${process.env.PUBLIC_URL}/icons/cardio.png`,
    `${process.env.PUBLIC_URL}/icons/chest.png`,
    `${process.env.PUBLIC_URL}/icons/forearm.png`,
    `${process.env.PUBLIC_URL}/icons/lower-leg.png`,
    `${process.env.PUBLIC_URL}/icons/neck.png`,
    `${process.env.PUBLIC_URL}/icons/shoulder.png`,
    `${process.env.PUBLIC_URL}/icons/upper-leg.png`,
    `${process.env.PUBLIC_URL}/icons/waist.png`,
  ];
} else {
  selectedExercisesData = exercisesData;
  multiLangTexts = multiLangEn;
  allBodyParts = [
    "all",
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];

  bodyPartImages = [
    `${process.env.PUBLIC_URL}/icons/all.png`,
    `${process.env.PUBLIC_URL}/icons/back.png`,
    `${process.env.PUBLIC_URL}/icons/cardio.png`,
    `${process.env.PUBLIC_URL}/icons/chest.png`,
    `${process.env.PUBLIC_URL}/icons/forearm.png`,
    `${process.env.PUBLIC_URL}/icons/lower-leg.png`,
    `${process.env.PUBLIC_URL}/icons/neck.png`,
    `${process.env.PUBLIC_URL}/icons/shoulder.png`,
    `${process.env.PUBLIC_URL}/icons/upper-arm.png`,
    `${process.env.PUBLIC_URL}/icons/upper-leg.png`,
    `${process.env.PUBLIC_URL}/icons/waist.png`,
  ];
}

export const multiLang = () => {
  return allBodyParts;
};

export const bodyPartsImagesFn = () => {
  return bodyPartImages;
};

export const multiLangTextsFn = () => {
  return multiLangTexts;
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchYoutubeData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const fetchData = async (filterTerm, filterWord) => {
  switch (filterTerm) {
    case "all":
      return selectedExercisesData;
    case "id":
      const exercise = selectedExercisesData.find(
        (exercise) => exercise.id === filterWord
      );
      return exercise ? exercise : null;
    default:
      return selectedExercisesData.filter(
        (exercise) => exercise[filterTerm] === filterWord
      );
  }
};
