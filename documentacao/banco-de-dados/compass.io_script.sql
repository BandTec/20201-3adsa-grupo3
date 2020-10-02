CREATE TABLE usuarioFisico(
idUsuarioFisico INT PRIMARY KEY,
email VARCHAR(90),
nome VARCHAR(80),
senha VARCHAR(45),
idEndereco INT,
telefone VARCHAR(15),
pontuacaoTotal INT,
qtdPontuacao INT,
dataNascimento DATE,
CPF VARCHAR(14),
sexo CHAR(1)
);

CREATE TABLE usuarioJuridico(
idUsuarioJuridico INT PRIMARY KEY ,
nomeONG VARCHAR(90),
email VARCHAR(80),
senha VARCHAR(45),
idEndereco INT,
telefone VARCHAR(15),
pontuacaoTotal INT,
qtdPontuacao INT,
CNPJ VARCHAR(14),
causa VARCHAR(256),
descricaoOng VARCHAR(256)
);

CREATE TABLE vaga(
idVaga INT PRIMARY KEY,
titulo VARCHAR(256),
descricaoVaga VARCHAR(256),
causa VARCHAR(256),
dataInicio DATE,
dataFim DATE,
idEndereco INT,
descricaoCompleta VARCHAR(500),
areaAtuacao VARCHAR(100),
descricaoArea VARCHAR(256),
descricaoRequisitos VARCHAR(256)
);

CREATE TABLE usuarioFisicoVaga(
	fkIdUsuarioFisico INT,
	fkIdvaga INT
);

CREATE TABLE usuarioJuridicoVaga(
	fkIdUsuarioJuridico INT,
	fkIdvaga INT
);


CREATE TABLE avaliacao (
idAvaliacao INT,
pontuacao INT,
relatorio VARCHAR(500),
fkIdUsuarioFisico INT,
fkIdUsarioJuridico INT
);

CREATE TABLE endereco (
idEndereco INT PRIMARY KEY,
logradouro VARCHAR(256),
numeroEndereco INT,
complemento VARCHAR(256),
CEP VARCHAR(8),
bairro VARCHAR(45),
estado VARCHAR(45),
cidade VARCHAR(45),
fkIdUsuario INT NOT NULL
);



ALTER TABLE usuarioFisicoVaga ADD FOREIGN KEY (fkIdUsuarioFisico) REFERENCES usuarioFisico (idUsuarioFisico);
ALTER TABLE usuarioFisicoVaga ADD FOREIGN KEY (fkIdIdVaga) REFERENCES vaga (idVaga);
ALTER TABLE usuarioFisicoVaga ADD PRIMARY KEY (fkIdIdVaga, fkIdUsuarioFisico);

ALTER TABLE usuarioJuridicoVaga ADD FOREIGN KEY (fkIdUsuarioJuridico) REFERENCES usuarioJuridico (idUsuarioJuridico);
ALTER TABLE usuarioJuridicoVaga ADD FOREIGN KEY (fkIdIdVaga) REFERENCES vaga (idVaga);
ALTER TABLE usuarioJuridicoVaga ADD PRIMARY KEY (fkIdIdVaga, fkIdUsuarioJuridico);

ALTER TABLE avaliacao ADD FOREIGN KEY (fkIdUsuarioFisico) REFERENCES usuarioFisico (idUsuarioFisico);
ALTER TABLE avaliacao ADD FOREIGN KEY (fkIdUsarioJuridico) REFERENCES usuarioJuridico (idUsuarioJuridico);
ALTER TABLE avaliacao ADD PRIMARY KEY (fiIdUsuarioFisiso, fkIdUsuarioJuridico, idAvaliacao);