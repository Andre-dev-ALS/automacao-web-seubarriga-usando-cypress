let dataNome = 'André';
let aCriarMovimentacao =  '[data-test="menu-movimentacao"]';
let btnTipoReceita = '[data-test="tipo-receita"]';
let btnStatus = '[data-test="status"]';
let btnSalvar = '//button[contains(@alt, "Salvar")]';
let txtDescricao = '[data-test="descricao"]';
let txtValor = '[data-test="valor"]';
let txtInteressado = '[data-test="envolvido"]';
let selectConta = '[data-test="conta"]';
let lblMovimentacaoAdicionada = '//*[contains(., "Movimentação inserida com sucesso!")]';
class MovimentacaoPage{

    getDataNome(){
        return dataNome;
    }

    getACriarMovimentacao(){
return aCriarMovimentacao;
    }

    getBtnTipoReceita(){
        return btnTipoReceita;
    }

    getBtnStatus(){
        return btnStatus;
    }

    getBtnSalvar(){
return btnSalvar;
    }

getTxtDescricao(){
    return txtDescricao;
}
    
getTxtValor(){
    return txtValor;
}

getTxtInteressado(){
    return txtInteressado;
}

getSelectConta(){
    return selectConta;
}

getLblMovimentacaoAdicionada(){
return lblMovimentacaoAdicionada;
}

}

export default new MovimentacaoPage;