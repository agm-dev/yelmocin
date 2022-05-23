# Yelmocin

This is a node package to get info about cinemas, movies, sessions, times on Yelmocines cinemas.

## Installation

```bash
npm i --save yelmocin
```

## Cities

```typescript
import { getCities } from "yelmocin"

console.log("list of cities with Yelmocines", getCities())
```

### Cinemas on a city

```typescript
import { getCityCinemas } from "yelmocin"

console.log("list of Yelmocines cinemas on Madrid", getCityCinemas("Madrid"))
```

### Get movies and sessions info

```typescript
import {
  getCityFilmListings,
  getCityFilmingListingsForDate,
  getCinemaFilmingListingsForDate,
} from "yelmocin"

// everything on every cinema of Madrid
getCityFilmListings("Madrid").then(data => console.log(data))

// everything on every cinema of Madrid for today
getCityFilmingListingsForDate("Madrid", new Date()).then(data => console.log(data))

// today's info on specific cinema for today
getCinemaFilmingListingsForDate("Plenilunio", new Date()).then(data => console.log(data))
```

### Example output format

```json
[
  {
    "name": "Rivas H2O",
    "dates": [
      {
        "date": "23 mayo",
        "movies": [
          {
            "title": "Espejo, espejo",
            "duration": "79",
            "rating": "No recomendada para menores de doce años.",
            "image": "https://eu-static.yelmocines.es/content/img/movies/posters/4285/1/1/4285.jpg",
            "genre": "COMEDIA",
            "director": "Marc Crehuet",
            "premiere": true,
            "synopsis": "Cuatro empleados de una oficina se preparan para la celebración de los 50 años de la empresa mientras intentan resolver ciertos problemas. Álvaro (Santi Millán), Cristina (Malena Alterio), Paula (Natalia de Molina) y Alberto (Carlos Areces) son cuatro personas en crisis que trabajan para la misma empresa de cosmética. Luchan por lo que quieren mientras se enfrentan a sus propios reflejos ante el espejo. Ambición, miedo, amor y traición se mezclan en una historia sobre la identidad. A veces tu peor enemigo eres tú mismo.",
            "sessions": [
              {
                "language": "ESPAÑOL",
                "format": "2D",
                "room": 7,
                "time": "22:45"
              }
            ]
          },
          {
            "title": "El sastre de la mafia",
            "duration": "106",
            "rating": "No recomendada para menores de dieciséis años.",
            "image": "https://eu-static.yelmocines.es/content/img/movies/posters/4284/1/1/4284.jpg",
            "genre": "THRILLER",
            "director": "Graham  Moore",
            "premiere": true,
            "synopsis": "Chicago. 1956. Leonard (Rylance), es un sastre inglés que confeccionaba trajes en la mundialmente famosa Savile Row de Londres. Después de una tragedia personal termina en Chicago, trabajando en una pequeña sastrería en una zona difícil de la ciudad donde hace ropa elegante para las únicas personas a su alrededor que pueden pagarla: una familia de gángsters. Esta familia de mafiosos intentará aprovecharse de la naturaleza gentil y complaciente de Leonard, que junto a su asistenta Mable (Zoey Deutch) se verá implicado con la mafia de una manera cada vez más grave. ",
            "sessions": [
              {
                "language": "ESPAÑOL",
                "format": "2D",
                "room": 9,
                "time": "22:35"
              }
            ]
          },
          {
            "title": "Juego de asesinos",
            "duration": "108",
            "rating": "No recomendada para menores de dieciséis años.",
            "image": "https://eu-static.yelmocines.es/content/img/movies/posters/4286/1/1/4286.jpg",
            "genre": "ACCIÓN",
            "director": "Joe  Carnahan",
            "premiere": true,
            "synopsis": "Una comisaría de policía de un pequeño pueblo se convierte en el campo de batalla entre un asesino a sueldo profesional (Gerard Butler), una inteligente policía novata (Alexis Louder) y un estafador (Frank Grillo), que busca refugio tras las rejas sin ningún otro lugar al que huir.",
            "sessions": [
              {
                "language": "ESPAÑOL",
                "format": "2D",
                "room": 4,
                "time": "22:40"
              }
            ]
          },
          {
            "title": "El arma del engaño",
            "duration": "128",
            "rating": "No recomendada para menores de doce años.",
            "image": "https://eu-static.yelmocines.es/content/img/movies/posters/4092/1/1/4092.jpg",
            "genre": "DRAMA",
            "director": "John Madden",
            "premiere": true,
            "synopsis": "Año 1943, en plena II Guerra Mundial. Las fuerzas aliadas están decididas a lanzar un asalto definitivo en Europa. Pero se enfrentan un desafío importante: proteger durante la invasión a sus tropas de la potencia de fuego alemana, y así evitar una posible masacre. Dos brillantes oficiales de inteligencia, Ewen Montagu (Firth) y Charles Cholmondeley, son los encargados de establecer la estrategia de desinformación más inspirada e improbable de la guerra... Una historia inspirada en hechos reales basada en un 'bestseller' de Ben Macintyre.",
            "sessions": [
              {
                "language": "ESPAÑOL",
                "format": "2D",
                "room": 11,
                "time": "22:25"
              }
            ]
          },
          {
            "title": "Ojos de fuego",
            "duration": "94",
            "rating": "No recomendada para menores de dieciséis años.",
            "image": "https://eu-static.yelmocines.es/content/img/movies/posters/4272/1/1/4272.jpg",
            "genre": "TERROR",
            "director": "Keith Thomas",
            "premiere": false,
            "synopsis": "Basada en la novela clásica de King, esta historia trata de una joven que desarrolla habilidades piroquinéticas y que es secuestrada por una agencia gubernamental secreta que quiere aprovechar su poderoso don como arma.",
            "sessions": [
              {
                "language": "ESPAÑOL",
                "format": "2D",
                "room": 6,
                "time": "22:35"
              }
            ]
          },
          {
            "title": "Doctor Strange en el multiverso de...",
            "duration": "127",
            "rating": "No recomendada para menores de doce años.",
            "image": "https://eu-static.yelmocines.es/content/img/movies/posters/4222/1/1/4222.jpg",
            "genre": "ACCIÓN",
            "director": "Sam Raimi",
            "premiere": false,
            "synopsis": "En Doctor Strange en el multiverso de la locura, el Universo Cinematográfico de Marvel desbloquea el Multiverso y amplía sus límites como nunca lo había hecho. Viaja a lo desconocido con el Doctor Strange, quien, con ayuda de aliados místicos tanto antiguos como nuevos, atraviesa las alucinantes y peligrosas realidades alternativas del Multiverso para enfrentarse a un nuevo y misterioso adversario.\n \nDoctor Strange en el Multiverso de la Locura está protagonizada por Benedict Cumberbatch, Chiwetel Ejiofor, Elizabeth Olsen, Benedict Wong, Xochitl Gomez, Michael Stühlbarg y Rachel McAdams. \n\nLa película está dirigida por Sam Raimi, y Kevin Feige es el productor. Louis D'Esposito, Victoria Alonso, Eric Hauserman Carroll y Jamie Christopher actúan como productores ejecutivos. El guion fue escrito por Michael Waldron.",
            "sessions": [
              {
                "language": "ESPAÑOL",
                "format": "2D",
                "room": 2,
                "time": "22:20"
              }
            ]
          },
          {
            "title": "Alcarràs",
            "duration": "120",
            "rating": "No recomendada para menores de doce años.",
            "image": "https://eu-static.yelmocines.es/content/img/movies/posters/4176/1/1/4176.jpg",
            "genre": "DRAMA",
            "director": "Carla Simón",
            "premiere": false,
            "synopsis": "El abuelo ha dejado de hablar, pero nadie de la extensa familia Solé sabe por qué. Como cada verano, en Alcarràs, una pequeña localidad rural de Cataluña, la familia cultiva una gran extensión de melocotoneros. Después de ochenta años cultivando la misma tierra, la familia Solé se reúne para realizar juntos su última cosecha.",
            "sessions": [
              {
                "language": "ESPAÑOL",
                "format": "2D CI",
                "room": 5,
                "time": "22:35"
              }
            ]
          },
          {
            "title": "Downton Abbey: Una nueva era",
            "duration": "125",
            "rating": "Apta para todos los públicos.",
            "image": "https://eu-static.yelmocines.es/content/img/movies/posters/4093/1/1/4093.jpg",
            "genre": "DRAMA",
            "director": "Simon Curtis",
            "premiere": false,
            "synopsis": "En la primera película, la familia Crawley y el personal de Downton recibían la visita oficial del rey y la reina de Inglaterra, ocasión que culminaba con un baile a la altura de la familia real. El reparto original volverá de nuevo a reunirse para esta segunda entrega. Además, Hugh Dancy, Laura Haddock, Nathalie Baye y Dominic West se unirán a los habituales protagonistas en esta entrega. El ganador de un Oscar Julian Fellowes, creador de la serie, vuelve a encargarse del guion, mientras que el ganador de un Emmy y varios Premios BAFTA Gareth Neame y la ganadora de un Emmy Liz Trubridge se ocuparán de la producción junto con el propio Fellowes. El director Simon Curtis (Mi semana con Marilyn) se une al equipo de se pone a los mandos de la secuela.",
            "sessions": [
              {
                "language": "ESPAÑOL",
                "format": "2D",
                "room": 8,
                "time": "22:15"
              }
            ]
          }
        ]
      }
    ]
  }
]
```
