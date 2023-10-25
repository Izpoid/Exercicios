document.getElementById("converterCelsius").addEventListener("click", function() {
    var tempInput = parseFloat(document.getElementById("tempInput").value);
    var resultado = (tempInput - 32) * 5/9;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado.toFixed(2) + " °C";
});

document.getElementById("converterFahrenheit").addEventListener("click", function() {
    var tempInput = parseFloat(document.getElementById("tempInput").value);
    var resultado = (tempInput * 9/5) + 32;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado.toFixed(2) + " °F";
});