INSERT INTO endereco (id_endereco, logradouro, numero_endereco, complemento, cep, bairro, estado, cidade) VALUES
(1, 'Rua Itororó', 185, '', '09645-855', 'Santa Luzia', 'SP', 'Ribeirão Pires'),
(2, 'Rua Itajobá', 323, '', '09601-000', 'Maria Clara', 'SP', 'Ribeirão Preto'),
(3, 'Rua das Flores', 555, '', '15254-999', 'Jordanopolis', 'MG', 'Uberlandia'),
(4, 'Rua das Dores', 555, '', '15254-999', 'Jordanopolis', 'MG', 'Uberlandia');

INSERT INTO usuario_juridico (id_usuario_juridico, nome_ong, email, senha, telefone, cnpj, causa, descricao_ong, logado, fk_endereco) VALUES
(1, 'Teto Brasil', 'tetobrasil@email.com', 'tetobrasil@123', '1159185227', '11637264000168', 'Construção', 'Construção de moradias para pessoas de baixa renda', false, 1);

INSERT INTO usuario_fisico (id_usuario_fisico, email, nome, senha, telefone, data_nascimento, cpf, logado) VALUES
(1, 'caio@email.com', 'Caio Cesar', 'senha123', '11975379085', TO_DATE('19/04/2001', 'DD/MM/YYYY'), '462.749.518-81', false),
(2, 'daniel@email.com.br', 'Daniel Fajan', 'senha123', '11975379085', TO_DATE('19/04/2001', 'DD/MM/YYYY'), '232.232.323-34', false),
(3, 'jonas@email.com.br', 'Jonas Pereira', 'senha123', '11975379085', TO_DATE('19/04/2001', 'DD/MM/YYYY'), '232.232.323-34', false);

INSERT INTO avaliacao (id_avaliacao, pontuacao, relatorio, fk_usaurio_fisico, fk_usuario_juridico) VALUES
(1, 5, 'foi bem', 1, 1),
(2, 4, 'foi menos bem', 1, 1),
(3, 3, 'foi +-', 1, 1),
(4, 2, 'foi ruim', 1, 1),
(5, 1, 'foi péssimo', 1, 1);

INSERT INTO vaga (id_vaga, titulo, descricao, causa, data_inicio, data_fim, fk_endereco, fk_usuario_juridico) VALUES
(null, 'Ajudar a construir uma escola', 'jkljkljljla', 'Construção', '2001-01-01', '2001-01-01', 1, 1),
(null, 'Mutirão para reforma da creche', 'lkjljjljljka', 'Construção', '2001-01-01', '2001-01-01', 1, 1),
(null, 'Levar comida para moradores de rua', 'jkljkkljkljkljka', 'Necessitados', '2001-01-01', '2001-01-01', 1, 1);

INSERT INTO usuario_fisico_vaga (data_inscricao, fk_usuario_fisico, fk_vaga) VALUES
('2020-10-20', 1, 1),
('2020-10-20', 2, 1),
('2019-05-29', 3, 2);