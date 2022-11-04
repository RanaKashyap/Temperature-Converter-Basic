function fromKelvin(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("celOutput").value = (valNum - 273.15).toFixed(2);
    document.getElementById("fahOutput").value = (((valNum - 273.15) * 1.8) + 32).toFixed(2);
}

function fromCelsius(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("kelOutput").value = (valNum + 273.15).toFixed(2);
    document.getElementById("fahOutput").value = ((valNum * 1.8) + 32).toFixed(2);
}

function fromFahrenheit(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("celOutput").value = ((valNum - 32) / 1.8).toFixed(2);
    document.getElementById("kelOutput").value = (((valNum - 32) / 1.8) + 273.15).toFixed(2);
}
