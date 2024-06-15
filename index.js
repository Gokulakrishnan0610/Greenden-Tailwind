var menu = document.getElementById("menu")

menu.addEventListener("click", function () {
    side__nav.style.left = 0

})
var close = document.getElementById("close")
close.addEventListener("click", function () {
    side__nav.style.left = "-50%"
})