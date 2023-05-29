# CC-Atividade04 - Aluno: Junior Freire Oliva - RA 10482110183
Atividade do módulo 4 de Clouding Computing utilizando as ferramentas: NodeJS+Git+Docker.

Olá professor Renato tudo bem? 
# Fases do projeto:
implementação da API - Ok;
Geração da imagem utilizando a imagem mysql:8.0.33-debian no docker  - Ok;



# Erros
Ao rodar a imagem, está quebrando exibindo este erro:


2023-05-28 20:23:05 
2023-05-28 20:23:05 > cc-atividade04@1.0.0 start
2023-05-28 20:23:05 > node index.js
2023-05-28 20:23:05 
2023-05-28 20:23:07 /usr/src/app/node_modules/lru-cache/dist/cjs/index.js:359
2023-05-28 20:23:07     #initializeTTLTracking() {
2023-05-28 20:23:07                           ^
2023-05-28 20:23:07 
2023-05-28 20:23:07 SyntaxError: Unexpected token '('
2023-05-28 20:23:07     at wrapSafe (internal/modules/cjs/loader.js:915:16)
2023-05-28 20:23:07     at Module._compile (internal/modules/cjs/loader.js:963:27)
2023-05-28 20:23:07     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
2023-05-28 20:23:07     at Module.load (internal/modules/cjs/loader.js:863:32)
2023-05-28 20:23:07     at Function.Module._load (internal/modules/cjs/loader.js:708:14)
2023-05-28 20:23:07     at Module.require (internal/modules/cjs/loader.js:887:19)
2023-05-28 20:23:07     at require (internal/modules/cjs/helpers.js:74:18)
2023-05-28 20:23:07     at Object.<anonymous> (/usr/src/app/node_modules/lru-cache/dist/cjs/index-cjs.js:5:36)
2023-05-28 20:23:07     at Module._compile (internal/modules/cjs/loader.js:999:30)
2023-05-28 20:23:07     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
2023-05-28 20:23:07 npm ERR! code 1
2023-05-28 20:23:07 npm ERR! path /usr/src/app
2023-05-28 20:23:07 npm ERR! command failed
2023-05-28 20:23:07 npm ERR! command sh -c node index.js
2023-05-28 20:23:07 
2023-05-28 20:23:07 npm ERR! A complete log of this run can be found in:
2023-05-28 20:23:07 npm ERR!     /root/.npm/_logs/2023-05-28T23_23_07_593Z-debug.log


# COMANDOS 
# Testes - rodando somente mysql:8-debian
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=masterkey -e MYSQL_DATABASE=db_ativ04 -d mysql:8-debian 