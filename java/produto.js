// Variáveis ​​para a imagem principal e miniaturas
var MainImg = document.getElementById('MainImg');
var thumbnail_img = document.getElementsByClassName('thumbnail-img');

// Função para mostrar a imagem correspondente quando uma miniatura é clicada
function Mostrar_Imagem(index) {
    MainImg.src = thumbnail_img[index].src;
}

// Função para navegar para a imagem anterior
function Imagem_Anterior() {
    var currentIndex = Array.from(thumbnail_img).findIndex(function(img) {
        return img.src === MainImg.src;
    });
    if (currentIndex > 0) {
        MainImg.src = thumbnail_img[currentIndex - 1].src;
    }
}

// Função para navegar para a próxima imagem
function Proxima_Imagem() {
    var currentIndex = Array.from(thumbnail_img).findIndex(function(img) {
        return img.src === MainImg.src;
    });
    if (currentIndex < thumbnail_img.length - 1) {
        MainImg.src = thumbnail_img[currentIndex + 1].src;
    }
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

