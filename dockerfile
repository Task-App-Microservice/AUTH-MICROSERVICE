# Stage 1: Build stage
FROM node:23-alpine AS builder

# Instala ferramentas necessárias para compilar código nativo
RUN apk add --no-cache python3 make g++ && corepack enable && corepack prepare pnpm@latest --activate

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos package.json e pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Instala as dependências
RUN pnpm install --frozen-lockfile

# Copia o diretório prisma (ou o arquivo schema.prisma)
COPY prisma ./prisma

# Gera o cliente Prisma
RUN pnpm prisma generate

# Copia o restante do código-fonte
COPY . .

# Stage 2: Final stage
FROM node:23-alpine

# Define o diretório de trabalho
WORKDIR /app

# Instala ferramentas necessárias para executar código nativo
RUN apk add --no-cache python3 make g++

# Reinstala o PNPM no segundo estágio
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copia apenas os node_modules e o código-fonte do estágio anterior
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Expõe a porta da aplicação
EXPOSE 4000

# Comando para iniciar a aplicação
CMD ["pnpm", "start"]