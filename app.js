'use strict'

function aparecerFotos(img){
    const url = `https://picsum.photos/v2/list?page=2&limit=100`
    const response = (url)
     

}
function criarImagem(link){
    const galeria = document.getElementById('galeria')
    const novaImg = document.createElement('img')
    novaImg.src = link

    galeria.appendChild(novaImg)
}

function preencherFotos(){

    fotos.forEach(criarImagem)
    console.log(fotos)
}