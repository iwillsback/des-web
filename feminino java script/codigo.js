const Ingrid = atletas[0];


const espaco_nome = document.getElementById('nome');
const imagem = document.querySelector('#container > img');
const espaco_descricao = document.querySelector('div#container > p');

const cria_cartao = (atleta) => {

    const container_atleta = document.createElement('div');
    const titulo = document.createElement('h3')
    titulo.innerHTML = atleta.nome;
    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    const descricao = document.createElement('p');
    descricao.innerHTML = entrada.descricao;
    
    container_atleta.appendChild(titulo)
    container_atleta.appendChild(imagem)
    container_atleta.appendChild(descricao)

    div_container.appendChild(container_atleta)
}

const preenche = (atleta) => {
    espaco_nome.innerText = Ingrid.nome;
    imagem.src = Ingrid.imagem;
    espaco_descricao.innerText = Ingrid.descricao;
}

preenche(atletas[3]);

atletas.forEach(cria)
    

