let contas = '//a[contains(text(), "Contas")]';
let txtNomeDaConta = '[data-test=nome]';
let btnSalvar = '//button[contains(., "Salvar")]';
let lblContaAdicionada = '//*[contains(., "Conta inserida com sucesso!")]';

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
        
    }


export default new AccountPage;