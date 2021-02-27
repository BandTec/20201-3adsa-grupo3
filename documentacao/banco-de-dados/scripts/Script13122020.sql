CREATE TABLE Endereco(
id_endereco INTEGER IDENTITY(1,1),
logradouro VARCHAR(100) NOT NULL,
numero_endereco INTEGER NOT NULL,
complemento VARCHAR(100) NOT NULL,
CEP VARCHAR(9) NOT NULL,
bairro VARCHAR(45) NOT NULL,
estado VARCHAR(2) NOT NULL,
cidade VARCHAR(45) NOT NULL,
PRIMARY KEY (id_endereco)
)--Conferido

CREATE TABLE UsuarioFisico(
id_usuario_fisico INTEGER IDENTITY(1,1),
email VARCHAR(90) NOT NULL,
nome VARCHAR(80) NOT NULL, 
senha VARCHAR(45),
telefone VARCHAR(15),
data_nascimento DATE,
cpf VARCHAR(14),
sexo bit,
PRIMARY KEY (id_usuario_fisico),
fk_endereco	INTEGER FOREIGN KEY REFERENCES Endereco(id_endereco),
logado BIT NOT NULL
)-- Conferido

CREATE TABLE UsuarioJuridico(
id_usuario_juridico INTEGER IDENTITY(1,1),
nome_ong VARCHAR(90) NOT NULL,
email VARCHAR(80) NOT NULL,
senha VARCHAR(45),
telefone VARCHAR(15),
cnpj VARCHAR(14),
causa VARCHAR(50),
descricao_ong VARCHAR(256),
fk_endereco INTEGER FOREIGN KEY REFERENCES Endereco(id_endereco),
PRIMARY KEY(id_usuario_juridico),
logado BIT
)-- Conferido


CREATE TABLE Vaga(
id_vaga INTEGER IDENTITY(1,1),
titulo VARCHAR(256) NOT NULL,
descricao_vaga VARCHAR(256),
causa VARCHAR(50),
data_inicio DATE,
data_fim DATE,
descricao_completa VARCHAR(256),
area_atuacao VARCHAR(100),
descricao_area VARCHAR(256),
descricao_requisitos VARCHAR(256),
fk_endereco INTEGER FOREIGN KEY REFERENCES Endereco(id_endereco),
fk_usuario_juridico INTEGER FOREIGN KEY  REFERENCES UsuarioJuridico(id_usuario_juridico),
PRIMARY KEY(id_vaga)
) -- Conferido

CREATE TABLE UsuarioFisicoVaga(
fk_usuario_fisico INTEGER FOREIGN KEY REFERENCES UsuarioFisico(id_usuario_fisico),
fk_vaga INTEGER FOREIGN KEY REFERENCES Vaga(id_vaga),
data_inscricao DATE
) -- Conferido

CREATE TABLE Avaliacao(
id_avaliacao INTEGER,
pontuacao INTEGER,
relatorio VARCHAR(512),
fk_Usuario_Fisico INTEGER FOREIGN KEY REFERENCES UsuarioFisico(id_usuario_fisico),
fk_usuario_juridico INTEGER FOREIGN KEY REFERENCES UsuarioJuridico(id_usuario_juridico),
PRIMARY KEY (id_Avaliacao)
)-- Conferido

CREATE TABLE estado(
sigla_uf CHAR(2) PRIMARY KEY,
nome VARCHAR(255)
)-- Conferido

CREATE TABLE cidade(
nome VARCHAR(255),
fk_sigla_uf CHAR(2),
PRIMARY KEY (fk_sigla_uf, nome),
FOREIGN KEY (fk_sigla_uf) REFERENCES estado (sigla_uf)
)-- Conferido