function displayList(key, elementId) {
    // let indexes = []
    let list = getFromLocalStorage(key);
    const $listElement = $(`.${elementId}`);
    $listElement.empty();

    list.forEach((item, index) => {
        // indexes.push(index)
        let $listItem = $(`<li>${item}</li>`);
        $listElement.append($listItem);
    });
    /*
    if (indexes.length === 0) {
        $listElement.empty();
        $listItem = $(`<li>item</li>`);
        $listElement.append($listItem);
    }
    */
}

function saveToLocalStorage(key, array) {
    let jsonString = JSON.stringify(array);
    localStorage.setItem(key, jsonString);
}

function getFromLocalStorage(key) {
    let jsonString = localStorage.getItem(key);
    if (jsonString) {
        return JSON.parse(jsonString);
    }
    return [];
}

function addItem(key, item, elementId) {
    let list = getFromLocalStorage(key);
    list.push(item);
    saveToLocalStorage(key, list);
    displayList(key, elementId);
}

/*delete an item from end of the list*/
function removeItem(key, elementId) {
    let list = getFromLocalStorage(key);
    list.pop();/*remove an item from the end of the list*/
    saveToLocalStorage(key, list);
    displayList(key, elementId);
}

function deleteAllItems(key, elementId) {
    /*remove the entire list from localStorage*/
    localStorage.removeItem(key);
    /*Display the updated (empty) list*/
    displayList(key, elementId);
}


$(document).ready(function () {
    const key = "itemsList";
    const elementId = "my_list";


    $("#add_item").on('click', function () {
        let newItem = 'item'
        if (newItem) {
            addItem(key, newItem, elementId);
        }
    });


    /*delete item*/
    $(document).on("click", "#remove_item", function () {
        removeItem(key, elementId);
    });

    /*clear list*/
    $("#clear_list").on('click', function () {
        deleteAllItems(key, elementId);
    });

    displayList(key, elementId);
})