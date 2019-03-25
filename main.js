
const display = function(people){
    let source = $("#people-template").html()
    let template = Handlebars.compile(source)
    let innerHTML = template({people})
    $("#main-container").append(innerHTML)
}

const getData = function(callback){
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        success: function (data) {
            callback(data)
        },
        error: function(xhr, text, error){
            console.log(text)
        }
    });
}

getData(display)