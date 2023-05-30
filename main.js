const cadastroContatos = document.getElementById('cadastro-contatos');
const nomes = [];
const numeros = [];

var linhas = '';

cadastroContatos.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeCadastro = document.getElementById('nome-cadastro')
    const inputNumeroCadastro = document.getElementById('numero-cadastro')

    if(numeros.includes(inputNumeroCadastro.value)){
        alert(`O número: ${inputNumeroCadastro.value} já foi cadastrada`)

    }else if(inputNumeroCadastro.value.length < 9){
        alert(`Favor adicionar um telefone com 9 digitos`)

    }else{

        nomes.push(inputNomeCadastro.value);
        numeros.push(inputNumeroCadastro.value);
        
        var linha = '<tr>';
        linha += `<th>${inputNomeCadastro.value}</th>`;
        linha += `<th>${inputNumeroCadastro.value}</th>`;
        linha += '</tr>';

        linhas += linha

        inputNomeCadastro.value = '';
        inputNumeroCadastro.value = '';
    }
}

function atualizaTabela(){
    const corpoTabela =  document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}