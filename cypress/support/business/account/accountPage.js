let contas = '//a[contains(text(), "Contas")]';
let txtNomeDaConta = '[data-test=nome]';
let btnSalvar = '//button[contains(., "Salvar")]';
let lblContaAdicionada = '//*[contains(., "Conta inserida com sucesso!")]';
let lblContaJaExiste = '//*[contains(., "Erro: Error: Request failed with status code 400")]';
let dataNome = 'André';

class AccountPage {

    getAConta(){
        return  contas;
    }

    getTxtNomeDaConta(){
        return txtNomeDaConta;
    }

    getBtnSalvar(){
        return btnSalvar;
    }

    getLblContaAdicionada(){
return lblContaAdicionada;
    }
        
    getDataNome(){
        return dataNome;
    }
    
    getLblContaJaExiste(){
return lblContaJaExiste;
    }

    }


export default new AccountPage;