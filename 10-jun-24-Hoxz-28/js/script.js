var number = document.getElementById("number") 
var result = document.getElementById("result") 
var rumus = document.getElementById("rumus") 

let x = 1.8
let y = 32

document.getElementById("celcius").addEventListener("click", function() {
    result.value =
    parseInt(number.value)*x+y;
});
document.getElementById("farenheit").addEventListener("click", function() {
    result.value =
    (parseInt(number.value)-y)/x;
});
document.getElementById("celcius").addEventListener("click", function() {
    rumus.value = parseInt(number.value) + " x 9/5 + 32 = "+ (parseInt(number.value)*x+y) ;
});
document.getElementById("farenheit").addEventListener("click", function() {
    rumus.value = parseInt(number.value) + " x 9/5 + 32 = "+ ((parseInt(number.value)-y)/x) ;
});



