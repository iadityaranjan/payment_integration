function typewriter(element) {

    let letters = element.innerHTML.split('');
    element.innerHTML = '';

    letters.forEach(function (letra, i) {

        setTimeout(function () {
            element.innerHTML += letra;
        }, 75 * i)
    });
}

const text = document.querySelector('h1');
typewriter(text);