# ChatAPP-NodeJS
Um chat, onde o usuário posta mensagens, e elas aparecem automaticamente na tela do navegador.

Este aplicativo faz requisões HTTP de "front-end" para "back-end" - além de "websockets", por meio de "sockets IO" - e, a partir dessas requisições, são possibilitadas as notificações automáticas de "push", as quais se processam do servidor para o cliente. 

Um usuário do chat pode abrir quantos clientes (abas) ele desejar, e o cliente pode ser reiniciado, sem que os dados desapareçam ou se percam. 

Para armazenar os dados foi utilizado MongoDB e mLab.

Para rodar o aplicativo, crie seu pacote "package.json"digitando: 
"npm init --yes"

Em seguida, instale "Express", usando o comando
"npm install -s express" 

Por fim, baixe os arquivos da pasta "programaChat" e adicione eles à pasta.

