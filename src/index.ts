import { writeFileSync } from "fs";
import { getCinemaFilmingListingsForDate } from "./utils/film-listings";

getCinemaFilmingListingsForDate("Rivas H2O", new Date())
  .then(data => writeFileSync("data/rivas-h2o.json", JSON.stringify(data, null, 2)))