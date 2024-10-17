# Realizando consultas con MongoDB

Implementa todas las consultas sobre la base de datos _sample_mfliex_ colección _movies_.
Para conseguir cada consulta tan solo es necesario substituir el comentario `/** FILL ME */` por el código adecuado.

## Conusulta 1

Obtén las 3 primeras películas de acción ordenadas por el campo _year_ de forma decreciente.

## Consulta 2

Encuentra 3 películas dirigidas por "Christopher Nolan", mostrando solo título y director ordenadas por el campo _year_ de forma decreciente.

## Consulta 3

Encuentra 3 películas de los años 2000 o más recientes, mostrando título y año ordenadas por el campo _year_ de forma decreciente.

## Consulta 4

Encuentra 3 películas ordenadas por fecha de lanzamiento en ordenascendente. Las más antiguas de toda la base de datos

## Consulta 5 (Difícil)

Encuentra 3 películas con una calificación mayor a 8.5 y más de 10000 votos en IMDB, mostrando solo título, año y calificación. Ordénalas por calificación IMDB de forma decreciente


## Resultados esperados

```Consulta 0 - Películas en Ucraniano: [    
  {
    title: 'Liquidation',
    languages: [ 'Russian', 'Ukrainian' ],
    year: '2007è'
  },
  {
    title: 'The Guide',
    languages: [ 'Ukrainian', 'Russian', 'English' ],
    year: 2014
  },
  {
    title: 'Melody',
    languages: [ 'French', 'English', 'Ukrainian' ],
    year: 2014
  }
]
Consulta 1 - Películas de acción: [
  {
    genres: [ 'Action', 'Adventure', 'Sci-Fi' ],
    title: 'Halo: Nightfall'
  },
  {
    genres: [ 'Action', 'Sci-Fi', 'Thriller' ],
    title: 'Falling Skies'
  },
  { genres: [ 'Action', 'Thriller' ], title: 'Liquidation' }
]
Consulta 2 - Películas de Christopher Nolan: [
  { title: 'Interstellar', directors: [ 'Christopher Nolan' ] },
  {
    title: 'The Dark Knight Rises',
    directors: [ 'Christopher Nolan' ]
  },
  { title: 'Inception', directors: [ 'Christopher Nolan' ] }
]
Consulta 3 - Películas recientes: [
  { title: 'The Masked Saint', year: 2016 },
  { year: 2015, title: 'Ex Machina' },
  { title: 'The Stanford Prison Experiment', year: 2015 }
]
Consulta 4 - Películas más recientes primero: [
  { title: 'The Kiss', year: 1896 },
  { title: 'The Kiss', year: 1896 },
  { title: 'The Great Train Robbery', year: 1903 }
]
Consulta 5 - Películas con calificación > 8.5 y más de 10000 votos: [
  { title: 'Band of Brothers', year: 2001, imdb: { rating: 9.6 } },        
  { title: 'Planet Earth', year: 2006, imdb: { rating: 9.5 } },
  {
    imdb: { rating: 9.3 },
    year: 1994,
    title: 'The Shawshank Redemption'
  }
]```