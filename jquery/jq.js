//jquery selectors
// function func1() {
//     // $("#box1").fadeToggle(3000);
//     document.getElementById("box1").style.width = "500px"
// }



function func2() {
    //$(element name).action() -JQuery
    //document.getElementsByTagName(element Name) -JS

    //Tag selector
    // $("div").css("background-color", 'orange');
    //class selector
    // $(".p1").css('font-style', 'italic');
    //multiple element selectors usage example
    // $("#div1,#div2").css('background-color', 'green');

    // $("div > p").fadeToggle();
    // $("p:first").fadeToggle();
    // $("li:even").fadeToggle(); //vice versa | odd
}

$("document").ready(function () {
    /*$("#btn").click(function () {
        $("#box1").css("width", "500px");
    })
    $("#btn").dblclick(function () {
        $("#box1").css("width", "800px");
    })
    $("#btn").mouseenter(function () {
        $("#box1").css("width", "800px");
    })
    $("#btn").mouseleave(function () {
        $("#box1").css("width", "500px");
    })*/
    /*$("#btn").hover(func1, fun2)
    function func1() {
        $("#box1").css("width", "500px");
    }
    function fun2() {
        $("#box1").css("width", "250px");
    }*/

    // $("#btn").click(function () {
    //     //hide/show
    //     $("#box1").toggle()
    // })

    /*$("#btn").click(() => {
        //Callbacks
        //hide/show in one click
        $("#box1").slideUp(2000, () => {
            $("#box1").slideDown(2000)
        })
    })*/

    $("#btn").click(() => {
        //chaining
        $("#box1").slideUp(2000).slideDown(2000)
    })
})
