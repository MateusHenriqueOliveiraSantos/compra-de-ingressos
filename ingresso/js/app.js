
function comprar(){
    let tipoDoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    if(tipoDoIngresso == 'pista'){
        pista(quantidade);
    }else if(tipoDoIngresso == 'inferior'){
        inferior(quantidade);
    }else(tipoDoIngresso == 'superior'){
        superior(quantidade);
    }
        
    limparCampo();
}
function inferior(quantidade){
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(quantidade > quantidadeInferior){
        alert('Não temos a quantidade desejada, por favor tente uma quantidade menor!')
    }else{
        quantidadeInferior = quantidadeInferior - quantidade;
    document.getElementById('qtd-inferior').textContent = quantidadeInferior;
    }
}
function superior(quantidade){
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(quantidade > quantidadeSuperior){
        alert('Não temos a quantidade desejada, por favor tente uma quantidade menor!')
    }else{
        quantidadeSuperior = quantidadeSuperior - quantidade;
    document.getElementById('qtd-superior').textContent = quantidadeSuperior;
    }
}
function pista(quantidade){
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);

    if(quantidade > quantidadePista){
        alert('Não temos a quantidade desejada, por favor tente uma quantidade menor!')
    }else{
    quantidadePista = quantidadePista - quantidade;
    document.getElementById('qtd-pista').textContent = quantidadePista;
    }
}
function limparCampo(){
    document.getElementById('qtd').value = '';
}