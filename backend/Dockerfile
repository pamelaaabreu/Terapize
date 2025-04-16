# Usa imagem oficial do Go
FROM golang:1.21-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência primeiro (melhora o cache)
COPY go.mod ./
COPY go.sum ./

# Baixa as dependências
RUN go mod download

# Copia o restante do código
COPY . .

# Compila o programa
RUN go build -o main .

# Comando que será executado quando o container iniciar
CMD ["./main"]
