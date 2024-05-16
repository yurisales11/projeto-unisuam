// Variáveis ​​para a imagem principal e miniaturas
var MainImg = document.getElementById('img-principal');
var small_img = document.getElementsByClassName('small-img');

// Função para mostrar a imagem correspondente quando uma miniatura é clicada
function Mostrar_Imagem(index) {
    MainImg.src = small_img[index].src;
}

// Função para alternar o estado do botão de favorito
function Btn_Favorito() {
    var favBtn = document.querySelector('.fav-btn');
    favBtn.classList.toggle('active'); // Alternar a classe "active" no botão de favorito
}



// Função para diminuir o valor do input
function Diminuir_Valor() {
    var input = document.getElementById('btn-input');
    var currentValue = parseInt(input.value, 10);
    if (!isNaN(currentValue) && currentValue > 1) {
        input.value = currentValue - 1;
    }
}

// Função para aumentar o valor do input
function Aumentar_Valor() {
    var input = document.getElementById('btn-input');
    var currentValue = parseInt(input.value, 10);
    if (!isNaN(currentValue)) {
        input.value = currentValue + 1;
    }
}

