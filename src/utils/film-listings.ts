import fetch from "node-fetch"
import { City } from "./cities"

const ENDPOINT = "https://www.yelmocines.es/now-playing.aspx/GetNowPlaying"

const headers = {
  "Content-Type": "application/json",
}

export function getCityFilmListings(city: City) {
  return fetch(ENDPOINT, {
    method: "POST",
    headers,
    body: JSON.stringify({ "cityKey": city }),
  }).then(response => response.json())
    .then(data => {
      const result: CinemaInfo[] = []
      for (const cinema of (data as RawCityFilmListing).d.Cinemas) {
        const info: CinemaInfo = {
          name: cinema.Name,
          dates: cinema.Dates.map(dateInfo => ({
            date: dateInfo.ShowtimeDate,
            movies: dateInfo.Movies.map(movieInfo => ({
              title: movieInfo.Title,
              duration: movieInfo.RunTime,
              rating: movieInfo.RatingDescription,
              image: movieInfo.Poster,
              genre: movieInfo.Gender,
              director: movieInfo.Director,
              premiere: movieInfo.Status === "Estreno",
              synopsis: movieInfo.Synopsis,
              sessions: getMovieSessionsData(movieInfo.Formats),
            }))
          }))
        }
        result.push(info)
      }
      return result
    })
}

function getMovieSessionsData(data: MovieInfo["Formats"]): FormattedMovieSession[] {
  const language = data.find(item => item.Language !== undefined)?.Language ?? ""
  const format = data.find(item => item.Name !== undefined)?.Name ?? ""

  return data.flatMap(sessionInfo => sessionInfo.Showtimes.map(item => ({
    language,
    format,
    room: item.Screen,
    time: item.Time,
  })))
}

interface CinemaInfo {
  name: CinemaData["Name"]
  dates: {
    date: string // Example: 23 mayo
    movies: {
      title: MovieInfo["Title"]
      duration: MovieInfo["RunTime"]
      rating: MovieInfo["RatingDescription"]
      image: MovieInfo["Poster"]
      genre: MovieInfo["Gender"]
      director: MovieInfo["Director"]
      premiere: boolean
      synopsis: MovieInfo["Synopsis"]
      sessions: FormattedMovieSession[]
    }[]
  }[]
}

interface FormattedMovieSession {
  language: MovieInfoFormat["Language"]
  format: MovieInfoFormat["Name"]
  room: MovieSession["Screen"]
  time: MovieSession["Time"]
}

interface RawCityFilmListing {
  d: {
    __type: string
    Cinemas: CinemaData[]
    Experiences: Record<string, string>,
    Languages: Record<string, string>
    Locations: Record<string, string>
    Formats: Record<string, string>
    Dates: Record<string, string>
    AdsCartelera: unknown
  }
}

interface CinemaData {
  CityKey: City
  CityName: string // Name of the city
  CityId: number
  Dates: CineDateInfo[] // Actual data
  Id: number
  VistaId: string
  Key: string
  Name: string // Name of the cinema
  IsPresale: boolean
  Children: string
  Status: string // numeric
  Order: number
  TimeZoneDifference: number
}

interface CineDateInfo {
  Movies: MovieInfo[]
  FilterDate: string
  ShowtimeDate: string // Example: 23 mayo
}

interface MovieInfo {
  Formats: MovieInfoFormat[]
  Id: number
  Title: string // useful
  Key: string // title slug
  OriginalTitle: string
  Rating: string
  RatingDescription: string
  RunTime: string // numeric, duration time on minutes, useful!
  Poster: string // url to img
  Trailer: string
  Distribuidor: string
  Gender: string
  Director: string
  Actor: unknown | null
  ProjectionType: string
  Synopsis: string // useful
  Status: string // Example: "Estreno", useful!
  Order: number
}

interface MovieInfoFormat {
  Showtimes: MovieSession[]
  Language: string
  Name: string // Example: "2D"
  // more useless data
}

interface MovieSession {
  Time: string // Example: "21:55", useful!
  Screen: number // the room, useful!
  // more useless data
}

