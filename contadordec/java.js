document.getElementById("texto").addEventListener("input", function() {
    var texto = this.value;
    var numCaracteres = texto.length;
    document.getElementById("resultado").innerHTML = "Caracteres digitados: " + numCaracteres;
});