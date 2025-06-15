#language: pt
 
Funcionalidade: login 

Contexto: 
Dado que o usuário acessa o site do seubarrigareact
    Quando preenche o campo email
    E preenche o campo senha
    Quando clica em Entrar
    
@id_0001 @seubarrigareact
    Cenário: Realizar login com sucesso
        Então o usuário é redirecionado  a tela inicial já logado

@id_0002 @seubarrigareact
Cenário: Realizar logout com sucesso
Quando clica em Settings
E clica em Sair