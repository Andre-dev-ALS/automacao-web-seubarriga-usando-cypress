
 #language: pt
 
Funcionalidade: login 


    Cenário: Realizar login com sucesso
        Dado que o usuário acessa o site do seubarrigareact
    Quando preencho o campo email
    E preencho o campo senha
    Quando clico em Entrar
    Então o usuário é redirecionado  a tela inicial já logado
    
    Cenário: Realizar Logout com sucesso
        Dado que o usuário acessa o site do seubarrigareact
    Quando preencho o campo email
    E preencho o campo senha
    Quando clico em Entrar
    E clico em  settings
    Quando clico em sair
    Então o usuário é redirecionado a tela de login