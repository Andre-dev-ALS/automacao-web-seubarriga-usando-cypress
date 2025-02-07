#language: pt
 
Funcionalidade: conta

Contexto: 
Dado que o usuário acessa o site do seubarrigareact
    Quando preencho o campo email
    E preencho o campo senha
    E clico em Entrar
    E clico em Settings
E clico em Conta

@id_0003 @seubarrigareact
Cenário: Criar com sucesso uma nova conta aleatória
Quando preencho o campo Nome da conta com um nome aleatório
E clico no botão Salvar
Então é mostrada uma mensagem de conta adicionada com sucesso

@id_0004 @seubarrigareact
Cenário: Validar com sucesso a mensagem de erro ao tentar criar uma conta que já existe
Quando preencho o campo Nome da conta
E clico no botão Salvar
Quando preencho o campo Nome da conta com um nome de uma conta existente
E clico no botão Salvar
Então na tela é mostrada uma mensagem de erro