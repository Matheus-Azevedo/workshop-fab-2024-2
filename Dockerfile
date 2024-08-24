# Use uma imagem base com Node.js 20.15.0
FROM node:20.15.0-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho do container /app
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código do projeto
COPY . .

# Define o comando de inicialização do container
CMD ["npm", "run", "dev"]
