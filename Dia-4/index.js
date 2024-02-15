const movies = [
    {id: 1, movieName: 'Gigantes de aço'},
    {id: 2, movieName: 'Spirit'},
    {id: 3, movieName: 'El Dorado'}
]

console.log(movies.find(movie => movie.movieName == 'Spirit'))
