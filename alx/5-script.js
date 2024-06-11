$(document).ready(() => {
    $('#add_item').on('click', () => {
        let item = 'Item'
        $('.my_list').append('<li>' + item + '</li>');
    })
})