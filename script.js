document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#height').value = 5;
    document.querySelector('#current').textContent = 5;
    drawPyramid(5);
})

function drawPyramid(height) {
    let pyramid = document.createElement('div');
    pyramid.id = 'pyramid';
    for (let i = 1; i <= height; i++){
        let p = document.createElement('p');
        for (let j = height - i; j > 0; j--) {
            p.textContent += "\u00A0";
        }
        for (let j = i + 1; j > 0; j--) {
            p.textContent += document.querySelector('#char').value;
        }
        pyramid.appendChild(p);
    }
    document.querySelector('#pyramid').replaceWith(pyramid);
}

document.querySelector('#char').addEventListener('change', function() {
    drawPyramid(document.querySelector('#height').value);
})

document.querySelector('#height').addEventListener('input', function() {
    drawPyramid(document.querySelector('#height').value);
    document.querySelector('#current').textContent = document.querySelector('#height').value;
})