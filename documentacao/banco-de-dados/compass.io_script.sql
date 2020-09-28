CREATE TABLE usuarioFisico_vaga(
	fkidUsuarioFisico INT,
	fkidvaga INT,
	FOREIGN KEY (fkidUsuarioFisico) REFERENCES usuarioFisico(idUsuarioFisco),
	FOREIGN KEY (fkidvaga) REFERENCES vaga(idVaga),
	PRIMARY KEY (idUsuarioFisico,fkidvaga)
)
GO

CREATE TABLE usuarioFisico(
idUsuarioFisico INT ,
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

)
GO

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
)
GO

CREATE TABLE usuarioJuridico_vaga (
fkidUsuarioJuridico INT,
fkidVaga INT
)
GO

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
descricaoONG VARCHAR(256),
)
GO

CREATE TABLE vaga (
idVaga INT PRIMARY KEY,
titulo VARCHAR(256),
descricaoVaga VARCHAR(256),
causa VARCHAR(256),
dataInicio DATE,
dataFim	DATE,
idEndereco INT,
descricaoCompleta VARCHAR(500),
areaAtuacao VARCHAR(100),
descricaoArea VARCHAR(256),
descricaoRequisitos VARCHAR(256)
)
GO

CREATE TABLE avaliacoes (
idAvaliacoes INT PRIMARY KEY,
pontuacao INT,
relatorio VARCHAR(45)
)
GO

CREATE TABLE endereco (
idEndereco INT PRIMARY KEY,
logradouro VARCHAR(256),
numeroEndereco INT,
complemento VARCHAR(256),
CEP VARCHAR(8),
bairro VARCHAR(45),
estado VARCHAR(45),
cidade VARCHAR(45)
)
GO