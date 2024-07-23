import axios from "axios";

const fetchFerryData = async (req, res) => {
  console.log("Called bcf api")
  try {
    const response = await axios.get("https://www.bcferriesapi.ca/v2/capacity/")
    console.log(response.status)
  }
  catch {
    console.log("API call didn't work :(")
  }
}

export default fetchFerryData;
