#imagem base do node.js
FROM node:20-alpine

#define o diretório de trabalho dentro do contêiner
WORKDIR /app

#copiar arquivos de dependência
COPY package*.json ./

#instalar dependências
RUN npm install

#copia todos os outros arquivos do backend para o contêiner
COPY . .

#expor a porta
EXPOSE 5000

#define o comando que será executado quando o contêiner iniciar
CMD ["node", "server.js"]