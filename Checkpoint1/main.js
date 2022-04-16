// COMEÇA AQUI
// Adicionar um novo post

//Capturando os elementos do HTML
let tituloRef = document.querySelector('#titulo')
let descricaoRef = document.querySelector('#descricao')
let imagemRef = document.querySelector('#imagem')
let botaoEnviar = document.querySelector('#enviar')
let novoItem = document.querySelector('#cards')
let videoRef = document.querySelector('#video')

//Array dos posts adicionados

botaoEnviar.addEventListener('click', function (event) {

  event.preventDefault()

  //Capturando os dados inseridos no formulário
  let novoTitulo = document.querySelector('#titulo').value
  let novaDescricao = document.querySelector('#descricao').value
  let novaImagem = document.querySelector('#imagem').value
  let novoVideo = document.querySelector('#video').value

  //Adicionando um novo elemento na Array
  let posts = []

  posts.push({
    titulo: novoTitulo,
    descricao: novaDescricao,
    imagem: novaImagem,
    video: novoVideo
  })

  console.log(posts)

  //Percorre a array e imprime os dados no html
  for (let post of posts) {
    novoItem.innerHTML += `
    <div class="item">
        <a class="imagemElemento" href="${post.video}" target="_blank" style="text-decoration:none"><img src="${post.imagem}"></a>
                <h2> ${post.titulo}</h2>
                <p>${post.descricao}</p>
            </div>
        `
  }
})