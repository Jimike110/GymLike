export const exerciseOptions = {
  method: "GET",
  params: {limit: '10000'},
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      // If the response status is not in the range of 200 to 299
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json(); // Parse response as JSON

    console.log(result);
    return result; // Return the parsed result
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to propagate it further if needed
  }
};
