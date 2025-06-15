let dataNome = 'André';
let aContas = '//a[contains(text(), "Contas")]';
let aLinkDeletarConta = `//tr[td[contains(text(), "${dataNome}")]]//a/i[starts-with(@title, "Deletar")]`;
let txtNomeDaConta = '[data-test=nome]';
let btnSalvar = '//button[contains(., "Salvar")]';
let btnFecharAlerta = '//div[@id="toast-container"]/div/button';
let lblContaAdicionada = '//*[contains(., "Conta inserida com sucesso!")]';
let lblContaJaExiste = '//*[contains(., "Erro: Error: Request failed with status code 400")]';
let lblContaDeletada = '//*[contains(., "Conta excluída com sucesso!")]';

class AccountPage {

    getAConta(){
        return  aContas
    }

    getADeletarConta(){
        return aLinkDeletarConta;
    }
    
    getTxtNomeDaConta(){
        return txtNomeDaConta;
    }

    getBtnSalvar(){
        return btnSalvar;
    }
    
    getBtnFecharAlerta(){
        return btnFecharAlerta;
    }
    getLblContaAdicionada(){
        return lblContaAdicionada;
            }
            
    getLblContaJaExiste(){
return lblContaJaExiste;
    }
    
getLblContaDeletada(){
    return lblContaDeletada;
}

getDataNome(){
    return dataNome;
}

    }

export default new AccountPage;