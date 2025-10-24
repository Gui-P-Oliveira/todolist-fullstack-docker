# Imagem base do node.js (Alpine é pequeno e ótimo)
FROM node:20-alpine

# Define o diretório de trabalho dentro do contentor
WORKDIR /app

# Copia os ficheiros de manifesto
# O * garante que o package-lock.json (essencial) seja copiado
COPY package*.json ./

# 'npm ci' é mais rápido e confiável para builds do que 'npm install'
# Ele instala exatamente o que está no package-lock.json
RUN npm ci

# Copia todos os outros ficheiros
# O .dockerignore deve ser usado para evitar copiar 'node_modules' local, etc.
COPY . .

# Expõe a porta que o Vite (npm run dev) usa
EXPOSE 5173

# Define o comando que será executado
# O '-- --host' é necessário para expor o servidor Vite para fora do conteiner (para o Docker poder mapear a porta)
CMD ["npm", "run", "dev", "--", "--host"]