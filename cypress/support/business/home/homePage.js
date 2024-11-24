
let lblMensagemBenvindo = '//*[starts-with(text(), "Bem vindo")]';
let btmSettings= '[data-test=menu-settings]';
let btmSair = "//a[contains(text(), 'Sair')]";

class HomePage {

    getBtmSettings(){
        return btmSettings;
    }
    
    getBtmSair(){
        return btmSair;
    }

    getLblMensagemBemVindo(){
        return lblMensagemBenvindo;
    }

}

export default new HomePage;