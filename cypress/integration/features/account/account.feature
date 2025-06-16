#language: pt
 
Funcionalidade: conta

Contexto: 
Dado que o usuário acessa o site do seubarrigareact
    Quando preenche o campo email
    E preenche o campo senha
    E clica em Entrar
    E clica em Settings
E clica em Conta
Quando preenche o campo Nome da conta
E clica no botão Salvar

@id_0003 @seubarrigareact
Cenário: Criar com sucesso uma nova conta
Então é mostrada uma mensagem de conta adicionada com sucesso
E clica em excluir na conta que foi adicionada

@id_0004 @seubarrigareact
Cenário: Validar com sucesso a mensagem de erro ao tentar criar uma conta que já existe
E clica no botão × para fechar o alerta de conta adicionada
Quando preenche o campo Nome da conta
E clica novamente no botão Salvar
Então na tela é mostrada uma mensagem de erro
E clica em excluir na conta que foi adicionada

@id_0005 @seubarrigareact
Cenário: Deletar com sucesso uma conta
Quando clica em excluir na conta que foi adicionada
Então é mostrada uma mensagem de conta deletada com sucesso

@id_0006 @seubarrigareact
Cenário: Alterar com sucesso uma conta
Quando clica no botão × para fechar o alerta de conta adicionada
Quando clica em editar na conta que foi adicionada
E limpa e preenche o campo nome já com um nome de uma nova conta 
E clica no botão Salvar
Então é mostrada uma mensagem de conta alterada com sucesso
E clica em excluir na conta que foi adicionada