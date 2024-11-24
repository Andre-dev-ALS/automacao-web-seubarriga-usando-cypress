const url = Cypress.config("baseUrl");
let txtEmail = '[data-test=email]';
let txtSenha = '[data-test=passwd]';
let btmEntrar = "//button[contains(text(), 'Entrar')]";
let lblLogin = "//a[contains(text(), 'Login')]";

class LoginPage {

    getUrl() {
        return url;
    }

    getTxtEmail() {
        return txtEmail;
    }

    getTxtSenha() {
        return txtSenha;
    }

    getBtmEntrar() {
        return btmEntrar;
    }

    getLblLogin(){
        return lblLogin;
    }

}

export default new LoginPage;