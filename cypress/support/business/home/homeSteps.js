<<<<<<< HEAD
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
=======
/* global Given, Then, When */
Cypress.on('uncaught:exception', () => false)
import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import HomeLogic from '../home/homeLogic'
import homeLogic from "../home/homeLogic";

When('clico em  settings', () => {
    HomeLogic.clicarEmSettings();
})

When('clico em sair', () => {
    homeLogic.clicarEmSair();
})

Then('o usuário é redirecionado a tela de login', () => {
    homeLogic.validarUsuarioDeslogado();
>>>>>>> develop
})