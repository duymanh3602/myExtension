$(document).ready(function () {
    function weather() {
        newwindow = window.open("popup.html", "Weather ForeCast", 'height=610,width=610');
        if (window.focus) { newwindow.focus() }
        return false;
    }

    function closeweather() {
        newwindow.close();
    }

    function calc() {
        alert("Oops! This feature is developing")
    }

    function about() {
        window.open('https://manhdinh.dev/', '_blank').focus();
    }

    document.getElementById("weather").addEventListener("mouseover", weather);
    document.getElementById("weather").addEventListener("mouseout", closeweather);
    document.getElementById("about").addEventListener("click", about);
    document.getElementById("calc").addEventListener("click", calc);
    document.getElementById("screenshot").addEventListener("click", calc);
});
