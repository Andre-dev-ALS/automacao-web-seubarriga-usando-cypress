
 #language: pt
 
Funcionalidade: login 

Contexto: 
Dado que o usuário acessa o site do seubarrigareact
    Quando preencho o campo email
    E preencho o campo senha
    Quando clico em Entrar
    
@id_0001 @seubarrigareact
    Cenário: Realizar login com sucesso
        Então o usuário é redirecionado  a tela inicial já logado

@id_0002 @seubarrigareact
Cenário: Realizar logout com sucesso
Quando clico em Settings
E clico em Sair