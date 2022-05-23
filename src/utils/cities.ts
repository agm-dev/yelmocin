import { getCityFilmListings } from "./film-listings"

const cities: Record<string, string> = {
  "La Coruña": "a-coruna",
  "Álava": "alava",
  Albacete: "albacete",
  Alicante: "alicante",
  "Almería": "almeria",
  Asturias: "asturias",
  Badajoz: "badajoz",
  Barcelona: "barcelona",
  "Cádiz": "cadiz",
  "La Rioja": "la-riaoja",
  "Las Palmas": "las-palmas",
  Lugo: "lugo",
  Madrid: "madrid",
  "Málaga": "malaga",
  Navarra: "navarra",
  Pontevedra: "pontevedra",
  "Santa Cruz de Tenerife": "santa-cruz-tenerife",
  Sevilla: "sevilla",
  Tarragona: "tarragona",
  Valencia: "valencia",
  Valladolid: "valladolid",
  Vizcaya: "vizcaya",
}

export function getCities() {
  return Object.keys(cities)
}

export function getCityKey(city: string) {
  return cities[city] ?? ""
}

const cinemas: Record<string, string> = {
  " Espacio Coruña": "La Coruña",
  " Los Rosales": "La Coruña",
  Boulevard: "Álava",
  Imaginalia: "Albacete",
  "Vialia Albacete": "Albacete",
  "Puerta de Alicante": "Alicante",
  Vinalopo: "Alicante",
  Roquetas: "Almería",
  "Torrecárdenas": "Almería",
  "Los Prados": "Asturias",
  "Ocimax Gijon": "Asturias",
  "Premium El Faro": "Badajoz",
  Comedia: "Barcelona",
  "Premium Castelldefels": "Barcelona",
  Icaria: "Barcelona",
  "Premium Sant Cugat": "Barcelona",
  Abrera: "Barcelona",
  Baricentro: "Barcelona",
  "Premium Bahía Sur": "Cádiz",
  "Area Sur": "Cádiz",
  "Premium Puerta Europa": "Cádiz",
  "Premium Alisios": "Las Palmas",
  "Las Arenas": "Las Palmas",
  Fuerteventura: "Las Palmas",
  Vecindario: "Las Palmas",
  "As Termas": "Lugo",
  Ideal: "Madrid",
  Islazul: "Madrid",
  "Palafox Luxury": "Madrid",
  "Parque Corredor": "Madrid",
  "Plaza Norte 2 Luxury": "Madrid",
  "Plaza Norte 2": "Madrid",
  Planetocio: "Madrid",
  Plenilunio: "Madrid",
  "Rivas H2O": "Madrid",
  TresAguas: "Madrid",
  "Rincón de la Victoria": "Málaga",
  "Vialia Málaga": "Málaga",
  "Plaza Mayor": "Málaga",
  Itaroa: "Navarra",
  "Travesía Vigo": "Pontevedra",
  "Premium Vialia Vigo": "Pontevedra",
  "La Villa de Orotava": "Santa Cruz de Tenerife",
  Meridiano: "Santa Cruz de Tenerife",
  " Premium Lagoh": "Sevilla",
  "Parc Central": "Tarragona",
  "Mercado de Campanar": "Valencia",
  "VidaNova Parc": "Valencia",
  " Premium VallSur": "Valladolid",
  Megapark: "Vizcaya",
  Artea: "Vizcaya"
}

export function getCityCinemas(city: string) {
  return Object.entries(cinemas)
    .filter(([, value]) => value === city)
    .map(([key]) => key)
}

export function getCinemaCity(cinema: string) {
  return cinemas[cinema] ?? ""
}

export function getCinemasOnRealTime() {
  const cities = getCities()
  return Promise.all(
    cities.map(city => getCityFilmListings(city).then(data => data.map(item => ({ [item.name]: city }))))
  )
    .then(
      responses => responses
        .flatMap(item => item)
        .reduce((final, current) => ({ ...final, ...current }), {})
    )
}
