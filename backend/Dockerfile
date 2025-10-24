#imagem base do node.js
FROM node:20-alpine

#define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de manifesto
# O * garante que o package-lock.json (essencial) seja copiado
COPY package*.json ./

# Use 'npm ci' para builds consistentes e '--only=production' para pular devDependencies
# 'npm ci' é mais rápido e confiável do que 'npm install' para builds
RUN npm ci --only=production

#copia todos os outros arquivos do backend para o contêiner
# O .dockerignore garante que apenas o código-fonte (ex: server.js) seja copiado
COPY . .

#expor a porta
EXPOSE 5000

#define o comando que será executado quando o contêiner iniciar
CMD ["node", "server.js"]