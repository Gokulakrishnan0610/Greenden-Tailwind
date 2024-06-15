var menu = document.getElementById("menu")

menu.addEventListener("click", function () {
    side__nav.style.left = 0

})
var close = document.getElementById("close")
close.addEventListener("click", function () {
    side__nav.style.left = "-50%"
})

var Products = document.getElementById("Products")
var Search = document.getElementById("Search")
var ProductList = Products.querySelectorAll("div")

Search.addEventListener("keyup", function () {

    var entered = event.target.value.toUpperCase()

    for (i = 0; i < ProductList.length;i++) {

        var name = ProductList[i].querySelector("h6").textContent

        if (name.toUpperCase().indexOf(entered) < 0) {
            ProductList[i].style.display = "none"
        }
        else {
            ProductList[i].style.display = "block"
        }
    }
})
