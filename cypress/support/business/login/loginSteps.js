import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import LoginLogic from '../login/loginLogic';


Given("que o usuário acessa o site do seubarrigareact", () => {
  LoginLogic.acessarAplicacao();
}
)

When("preenche o campo email", () => {
  LoginLogic.preencherCampoEmail();
}
)

When("preenche o campo senha", () => {
  LoginLogic.preencherCampoSenha();
}
)

When("clica em Entrar", () => {
  LoginLogic.clicarEmEntrar();
})

Then('é validado que o usuário foi redirecionado   a tela de login já desconectado', () =>{
  LoginLogic.validarUsuarioDeslogado();
})