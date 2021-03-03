
CREATE TABLE publicacao (
	id INT IDENTITY(1, 1) PRIMARY KEY NOT NULL,
	descricao VARCHAR(200),
	imagem VARCHAR(150),
	curtidas INT,
	id_usuario INT NOT NULL,
	tipo_usuario VARCHAR(2) NOT NULL
)