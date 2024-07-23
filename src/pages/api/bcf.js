import axios from "axios";

const fetchFerryData = async (req, res) => {
  console.log("Called bcf api")
  try {
    const response = await axios.get("https://www.bcferriesapi.ca/v2/capacity/")
    console.log("Here's the response code: ", response.status)
    res.status(200).json(response.data)
  }
  catch (error) {
    console.log("Catch statement fired: ", error)
    res.status(500).json({ error: "An error occurred" });
  }
}

export default fetchFerryData;
