CREATE TABLE Endereco(
id_endereco INTEGER IDENTITY(1,1),
logradouro VARCHAR(100) NOT NULL,
numero_endereco INTEGER,
complemento VARCHAR(100),
CEP VARCHAR(9) NOT NULL,
bairro VARCHAR(45),
estado VARCHAR(2) NOT NULL,
cidade VARCHAR(45) NOT NULL,
PRIMARY KEY (id_endereco)
)

CREATE TABLE UsuarioFisico(
id_usuario_fisico INTEGER IDENTITY(1,1),
email VARCHAR(90) NOT NULL,
nome VARCHAR(80) NOT NULL, 
senha VARCHAR(45) NOT NULL,
telefone VARCHAR(15),
data_nascimento DATE,
cpf VARCHAR(14),
sexo bit,
PRIMARY KEY (id_usuario_fisico),
fk_endereco	INTEGER FOREIGN KEY REFERENCES Endereco(id_endereco),
logado BIT NOT NULL
)

CREATE TABLE UsuarioJuridico(
id_usuario_juridico INTEGER IDENTITY(1,1),
nome_ong VARCHAR(90) NOT NULL,
email VARCHAR(80) NOT NULL,
senha VARCHAR(45) NOT NULL,
telefone VARCHAR(15),
cnpj VARCHAR(14),
causa VARCHAR(50),
descricao_ong VARCHAR(256),
fk_endereco INTEGER FOREIGN KEY REFERENCES Endereco(id_endereco),
PRIMARY KEY(id_usuario_juridico),
logado BIT
)


CREATE TABLE Vaga(
id_vaga INTEGER IDENTITY(1,1),
titulo VARCHAR(256) NOT NULL,
descricao_vaga VARCHAR(256),
causa VARCHAR(50),
data_inicio DATE,
data_fim DATE,
descricao_completa VARCHAR(256),
area_atuacao VARCHAR(100),
descricao_requisitos VARCHAR(256),
fk_endereco INTEGER FOREIGN KEY REFERENCES Endereco(id_endereco),
fk_usuario_juridico INTEGER FOREIGN KEY  REFERENCES UsuarioJuridico(id_usuario_juridico),
PRIMARY KEY(id_vaga)
)

CREATE TABLE UsuarioFisicoVaga(
fk_usuario_fisico INTEGER FOREIGN KEY REFERENCES UsuarioFisico(id_usuario_fisico),
fk_vaga INTEGER FOREIGN KEY REFERENCES Vaga(id_vaga),
data_inscricao DATE
)


