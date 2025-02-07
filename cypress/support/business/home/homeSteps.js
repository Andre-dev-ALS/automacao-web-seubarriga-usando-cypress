import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import HomeLogic from '../home/homeLogic'


When('clico em Settings', () => {
    HomeLogic.clicarEmSettings();
})

Then('o usuário é redirecionado  a tela inicial já logado', () => {
HomeLogic.validarUsuarioLogado();
})

When('clico em Sair', () =>{
  HomeLogic.clicarEmSair();  
})