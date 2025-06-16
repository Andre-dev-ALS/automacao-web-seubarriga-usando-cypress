import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import HomeLogic from '../home/homeLogic'


When('clica em Settings', () => {
    HomeLogic.clicarEmSettings();
})

When('clica em Sair', () =>{
  HomeLogic.clicarEmSair();  
})

Then('o usuário é redirecionado  a tela inicial já logado', () => {
  HomeLogic.validarUsuarioLogado();
  })