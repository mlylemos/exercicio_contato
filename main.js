const form = document.getElementById('form');
const nomes = [];
const telefones = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeDoContato = document.getElementById('nome'); 
    const inputTelefoneDoContato = document.getElementById('telefone'); 

    if (nomes.includes(inputNomeDoContato.value)) {
        alert(`O nome: ${inputNomeDoContato.value} já foi inserido`);
    } else {
        nomes.push(inputNomeDoContato.value);
        telefones.push(inputTelefoneDoContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeDoContato.value}</td>`;
        linha += `<td>${inputTelefoneDoContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeDoContato.value = '';
    inputTelefoneDoContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


