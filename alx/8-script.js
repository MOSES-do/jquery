$(document).ready(function () {
    $.ajax({
        url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
        method: 'GET',
        success: function (data) {
            movie = data.results;
            for (i in data.results) {
                $('#list_movies').append(`<li> ${movie[i].title} </li>`)
            }
        }
    });
})
