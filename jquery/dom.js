$("document").ready(function () {
    /*$(".div1").click(() => {
        var x = $(".p1").html();
        $("#span1").text(x);
    })*/

    //get attribute of an element and change its value
    $("button").click(() => {
        $("span").attr("id", "now");
    })
    //get attribute of an element
    $(".p1").click(() => {
        alert($("span").attr("id"));
    })
    //append text/images/html elements to an element
    /*
    .append("") //before inside the element
    .prepend() //after inside the element
    .before() //before outside the element
    .after() //after outside the element
    .remove() //deletes the element
    .empty() //empties the element
    */


})
