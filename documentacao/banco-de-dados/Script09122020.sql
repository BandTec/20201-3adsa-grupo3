
CREATE TABLE endereco(
id INTEGER IDENTITY(1,1),
logradouro VARCHAR(100) NOT NULL,
numero_endereco INTEGER,
cep VARCHAR(9),
bairro VARCHAR(45),
estado VARCHAR(2),
cidade VARCHAR(45),
PRIMARY KEY (id)
)--Conferido

CREATE TABLE usuario_fisico(
id INTEGER IDENTITY(0,2),
email VARCHAR(90) NOT NULL,
nome VARCHAR(80) NOT NULL, 
senha VARCHAR(45) NOT NULL,
telefone VARCHAR(15) NOT NULL,
data_nascimento DATE NOT NULL,
cpf VARCHAR(14) NOT NULL,
foto varchar(255),
logado BIT DEFAULT 0,
PRIMARY KEY (id)
)-- Conferido

CREATE TABLE usuario_juridico(
id INTEGER IDENTITY(1,2) NOT NULL,
nome_ong VARCHAR(90) NOT NULL,
email VARCHAR(80) UNIQUE NOT NULL,
senha VARCHAR(45) NOT NULL,
telefone VARCHAR(15),
cnpj VARCHAR(18) NOT NULL,
causa VARCHAR(50),
foto varchar(255),
descricao VARCHAR(256),
fk_endereco INTEGER FOREIGN KEY REFERENCES endereco(id) NOT NULL,
logado BIT DEFAULT 0,
PRIMARY KEY(id)
)-- Conferido

CREATE TABLE vaga(
id INTEGER IDENTITY(1,1),
titulo VARCHAR(256) NOT NULL,
causa VARCHAR(50),
descricao VARCHAR(256),
data_inicio DATETIME NOT NULL,
data_fim DATETIME,
foto varchar(255),
fk_endereco INTEGER FOREIGN KEY REFERENCES endereco(id),
fk_usuario_juridico INTEGER FOREIGN KEY  REFERENCES usuario_juridico(id) NOT NULL,
PRIMARY KEY(id)
) -- Conferido

CREATE TABLE usuario_fisico_vaga(
fk_usuario_fisico INTEGER FOREIGN KEY REFERENCES usuario_fisico(id) NOT NULL,
fk_vaga INTEGER FOREIGN KEY REFERENCES vaga(id) NOT NULL,
data_inscricao DATE
) -- Conferido

--CREATE TABLE avaliacao(
--id INTEGER IDENTITY(1,1),
--pontuacao INTEGER,
--relatorio VARCHAR(500),
--fk_usuario_fisico INTEGER FOREIGN KEY REFERENCES usuario_fisico(id),
--fk_usuario_juridico INTEGER FOREIGN KEY REFERENCES usuario_juridico(id)
)--Conferido
