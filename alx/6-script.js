$(document).ready(function () {
    $('#update_header').on('click', () => {
        let new_value = 'New Header!!!';
        $('#update_header').html(new_value);
    })
})