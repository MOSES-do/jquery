$(document).ready(function () {
    $.ajax({
        url: 'https://swapi-api.alx-tools.com/api/people/5/?format=json',
        method: 'GET',
        success: function (data) {
            // console.log(data)
            $('#character').html(data.name)
        }
    });
})