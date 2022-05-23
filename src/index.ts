import { getCityFilmListings } from "./utils/film-listings"

getCityFilmListings("a-coruna")
  .then(data => {
    console.log("formatted data", JSON.stringify(data, null, 2))
  })
  .catch(error => console.error("error", error))
