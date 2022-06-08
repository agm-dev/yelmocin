import { getCinemasOnRealTime, getCinemaCity, getCities } from "../src/utils/cities"

describe("cities", () => {
  test("we have all the data", async () => {
    const data = await getCinemasOnRealTime()
    Object.keys(data).forEach(cinema => {
      const city = getCinemaCity(cinema)
      expect(city).toBeDefined()
      expect(city).toBe(data[cinema])
    })

    const cities = getCities()
    const actualCities = Object.values(data)

    cities.forEach(city => expect(actualCities).toContain(city))
  })
})