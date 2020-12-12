
CREATE TABLE Endereco(
id INTEGER IDENTITY(1,1),
logradouro VARCHAR(100) NOT NULL,
numero_endereco INTEGER,
cep VARCHAR(9),
bairro VARCHAR(45),
estado VARCHAR(2),
cidade VARCHAR(45),
PRIMARY KEY (id)
)--Conferido

CREATE TABLE UsuarioFisico(
id INTEGER IDENTITY(1,1),
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

CREATE TABLE UsuarioJuridico(
id INTEGER IDENTITY(1,1),
nome_ong VARCHAR(90) NOT NULL,
email VARCHAR(80) UNIQUE KEY NOT NULL,
senha VARCHAR(45) NOT NULL,
telefone VARCHAR(15),
cnpj VARCHAR(18) NOT NULL,
causa VARCHAR(50),
foto varchar(255),
descricao VARCHAR(256),
fk_endereco INTEGER FOREIGN KEY REFERENCES Endereco(id) NOT NULL,
logado BIT DEFAULT 0,
PRIMARY KEY(id)
)-- Conferido

CREATE TABLE Vaga(
id INTEGER IDENTITY(1,1),
titulo VARCHAR(256) NOT NULL,
causa VARCHAR(50),
descricao VARCHAR(256),
data_inicio DATETIME NOT NULL,
data_fim DATETIME,
foto varchar(255),
fk_endereco INTEGER FOREIGN KEY REFERENCES Endereco(id),
fk_usuario_juridico INTEGER FOREIGN KEY  REFERENCES UsuarioJuridico(id) NOT NULL,
PRIMARY KEY(id)
) -- Conferido

CREATE TABLE UsuarioFisicoVaga(
fk_usuario_fisico INTEGER FOREIGN KEY REFERENCES UsuarioFisico(id) NOT NULL,
fk_vaga INTEGER FOREIGN KEY REFERENCES Vaga(id) NOT NULL,
data_inscricao DATE
) -- Conferido

CREATE TABLE Avaliacao(
id_avaliacao INTEGER IDENTITY(1,1),
pontuacao INTEGER,
relatorio VARCHAR(500),
fk_usuario_fisico INTEGER FOREIGN KEY REFERENCES UsuarioFisico(id),
fk_usuario_juridico INTEGER FOREIGN KEY REFERENCES UsuarioJuridico(id)
)--Conferido
