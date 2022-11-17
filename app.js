let x = 1
let y = 4
let z = -1
let para = document.getElementById('para');

if (x < 2) {
    para.innerHTML = "x est plus petit que 2"
}

if (y > 3) {
    para.innerHTML = "y est plus grand que 3"
}

if (z <= 0) {
    para.innerHTML = "z est égal ou inférieur à 0"
}

if (x < 2 && y > 3 && z <= 0) {
    para.innerHTML = "toutes les conditions sont bonnes"
}
