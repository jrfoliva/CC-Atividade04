# CC-Atividade04 - Aluno: Junior Freire Oliva - RA 10482110183
Atividade do módulo 4 de Clouding Computing utilizando as ferramentas: NodeJS+Git+Docker.

Olá professor Renato tudo bem? 
Havia comentado via mensagem em instalar o node junto da imagem mysql:debian, mas está quebrando a aplicação no momento que chamo a rota /consulta-dados. Depois de várias tentativas fracassadas, abandonei e voltei a utilizar a imagem do node:18-slim para somente subir a aplicação e usar outra instância separada para o mysql, conforme tu me respondeste. Obrigado!

# Fases da atividade:
implementação da API - Ok;
-build imagem utilizando a imagem node:lts no docker - Ok;
-run da imagem do mysql:8.0.33 - Ok;

# Comando utilizado para fazer o build da aplicação, referindo se do node:18-slim
docker build --no-cache -t atividade04:v8 .


# Comando utilizado para rodar a imagem do MySQL Configurado 
docker run mysql -dp 3306:3306 -e MYSQL_USER=root -e MYSQL_ROOT_PASSWORD=masterkey -e MYSQL_DATABASE=db_ativ04 mysql:8.0.33

# Comando utilizado para rodar a imagem da Aplicação
docker run -dp 3000:3000 atividade04:v10