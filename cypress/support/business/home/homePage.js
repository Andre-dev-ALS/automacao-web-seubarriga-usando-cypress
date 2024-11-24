/// <reference types="Cypress" />

let btmSettings= '[data-test=menu-settings]';
let btmSair = "//a[contains(text(), 'Sair')]";
let lblLogin = "//a[contains(text(), 'Login')]";
class HomePage {

    getBtmSettings(){
        return btmSettings;
    }
    
    getBtmSair(){
        return btmSair;
    }

    getLblLogin(){
        return lblLogin;
    }
    
}

export default new HomePage;