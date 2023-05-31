# CC-Atividade04 - Aluno: Junior Freire Oliva - RA 10482110183
Atividade do módulo 4 de Clouding Computing utilizando as ferramentas: NodeJS+Git+Docker.

Olá professor Renato tudo bem? 
Havia comentado via mensagem em instalar o node junto da imagem mysql:debian, mas está quebrando a aplicação no momento que chamo a rota /consulta-dados. Depois de várias tentativas fracassadas, abandonei e voltei a utilizar a imagem do node:18-slim para somente subir a aplicação e usar outra instância separada para o mysql, conforme me respondeste. Obrigado!

# Endereços dos repositórios
https://github.com/jrfoliva/CC-Atividade04.git
https://hub.docker.com/repository/docker/jrfoliva/atividade04/general

# Executando os comandos 
git add .
git commit -am "mensagem"
git push origin main

# Fases da atividade:
- implementação da API - Ok;
-- implementação da camada modelo e persistência sendo chamada do arquivo index.js Utilizado middleware para
   se assegurar da criação da base de dados, tabela e inserts de 3 registros, sendo ativado pela rota /readiness; 
- build imagem utilizando a imagem node:18-slim no docker - Ok;
- run da imagem do mysql:8.0.33-debian - !OK; // Mas está recusando a conexão. No meu banco local ok.
 
# Comandos utilizados.
# Comando utilizado para fazer o build da aplicação, referindo se do node:18-slim
docker build --no-cache -t atividade04:v11 .

# Baixa da imagem mysql:8.0.33-debian
docker pull mysql:8.0.33-debian 

# Comando utilizado para rodar a imagem do MySQL Configurado / BANCO SENDO CRIADO VIA SCRIPT 
docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=masterkey -e MYSQL_USER=junior -e MYSQL_PASSWORD=atividade04 -d mysql:8.0.33-debian

# Comando utilizado para rodar a imagem da Aplicação
docker run -dp 3000:3000 atividade04:v11

# Criando uma tag para realizar o push para o repositório
docker tag atividade04:v11 jrfoliva/atividade04:v11

# Push da imagem
docker push jrfoliva/atividade04:v11

# Baixar a imagem do repositório
docker pull jrfoliva/atividade04:v11

# Fim - Muito Obrigado!