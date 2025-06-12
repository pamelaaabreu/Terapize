package main

import (
	"database/sql"
	"fmt" //pacote GO
	"log"
	"os"

	_ "github.com/lib/pq" //biblioteca do POSTGRESQL
)

func main() {
	dbURL := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
	)

	db, err := sql.Open("postgres", dbURL)
	if err != nil {
		log.Fatalf("Erro ao conectar no banco: %v", err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		log.Fatalf("Erro ao tentar pingar o banco: %v", err)
	}

	fmt.Println("Conectado com sucesso ao PostgreSQL!")
}

