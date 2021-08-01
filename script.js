var squares = document.querySelectorAll(".square");
var btnShowAll = document.querySelector("#showAll");
var btnHideAll = document.querySelector("#hideAll");
var searchBox = document.querySelector("#filter");

btnShowAll.addEventListener("click", function () {
    squares.forEach(function (element) {
        element.style.display = "block";
    })
})
btnHideAll.addEventListener("click", function () {
    squares.forEach(function (element) {
        element.style.display = "none";
    })
})
searchBox.addEventListener("keyup", function () {
    var colorName = searchBox.value;
    squares.forEach(function (element) {
        if (element.classList.contains(colorName)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }

    })
})
squares.forEach(function (element) {
    element.addEventListener("mouseover", function () {
        element.style.height = "200px";
        element.style.width = "250px";
    })
    element.addEventListener("mouseout", function () {
        element.style.height = "180px";
        element.style.width = "230px";
    })
})
