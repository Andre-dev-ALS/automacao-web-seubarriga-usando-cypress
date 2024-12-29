#language: pt
 
Funcionalidade: conta

Contexto: 
Dado que o usuário acessa o site do seubarrigareact
    Quando preencho o campo email
    E preencho o campo senha
    Quando clico em Entrar
    

@id_0003 @seubarrigareact
Cenário: Adicionar uma nova conta
Quando clico em Settings
E clico em Conta
E preencho o campo Nome da conta
E clico no botão Salvar
Então é mostrada uma mensagem de conta adicionada com sucesso