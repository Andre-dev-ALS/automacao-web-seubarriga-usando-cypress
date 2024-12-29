<<<<<<< HEAD

let lblMensagemBenvindo = '//*[starts-with(text(), "Bem vindo")]';
let btmSettings= '[data-test=menu-settings]';
let btmSair = "//a[contains(text(), 'Sair')]";

=======
/// <reference types="Cypress" />

let btmSettings= '[data-test=menu-settings]';
let btmSair = "//a[contains(text(), 'Sair')]";
let lblLogin = "//a[contains(text(), 'Login')]";
>>>>>>> develop
class HomePage {

    getBtmSettings(){
        return btmSettings;
    }
    
    getBtmSair(){
        return btmSair;
    }

<<<<<<< HEAD
    getLblMensagemBemVindo(){
        return lblMensagemBenvindo;
    }

=======
    getLblLogin(){
        return lblLogin;
    }
    
>>>>>>> develop
}

export default new HomePage;