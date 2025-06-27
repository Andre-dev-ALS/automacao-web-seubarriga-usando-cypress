#language: pt
 
Funcionalidade: movimentação


Contexto: 
Dado que o usuário acessa o site do seubarrigareact
    Quando preenche o campo email
    E preenche o campo senha
    E clica em Entrar
    E clica em Settings
E clica em Conta
Quando preenche o campo Nome da conta
E clica no botão Salvar
    E clica em Cadastrar Movimentação

    @id_0007 @seubarrigareact
Cenário: Criar com sucesso uma nova movimentação do tipo receita
Quando clica em tipo da conta receita
E preenche o campo descrição
E preenche o campo valor
E preenche o campo interessado
E seleciono uma conta
E clica no botão status para trocar o status para paga
Quando clica em salvar
Então é mostrada uma mensagem de movimentação adicionada, e o usuário é redirecionado para a tela de estrato