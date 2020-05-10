const urlAPI = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
const blocos = document.getElementsByClassName("blocos");

async function pegaBlocos() {
    return await fetch(urlAPI)
    .then(async (response) => await response.json());
}

function createCard(estadia){
    let bloco = document.createElement('div');
    bloco.className = 'bloco';

    bloco.innerHTML = `
        <div class="blocoInterno">
            <div class="apts">
                <img class="imagem-apt" src="${estadia.photo}">
            </div>
            <p class="nome">${estadia.name}</p>
            <p class="tipo">${estadia.property_type}</p>
            <p class="valor"><strong>R$${estadia.price}</strong>/diária</p>
        </div>`;

    return bloco;
}

function retornaBlocosProntos(){
    pegaBlocos().then(array => array.forEach((apt) => {
        let bloco = createCard(apt);
        blocos[0].appendChild(bloco);
    }));
}

retornaBlocosProntos();