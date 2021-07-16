// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const expandButtonEl = document.querySelectorAll('.botao-expandir-retrair');

for (let exButtonEl of expandButtonEl) {
    exButtonEl.addEventListener('click', changeExpandClass);
}

function changeExpandClass(e) {
    const buttonEl = e.currentTarget;
    const p = buttonEl.parentNode;

    changeSign(buttonEl)
    p.classList.toggle('expandido');  
}

function changeSign(buttonEl) {
    if (buttonEl.innerHTML === '+') {
        buttonEl.innerHTML = '-';
    }
    else {
        buttonEl.innerHTML = '+';
    }
}

