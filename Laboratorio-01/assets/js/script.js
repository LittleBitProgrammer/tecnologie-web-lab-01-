var far = document.getElementById("far");

console.log(celsius)

function convert()
{
    var celsius = document.getElementById("celsius").value;
    far.textContent = "Degrees fahrenheit: " + (celsius * (9/5) + 32)
    console.log(far.textContent)
}