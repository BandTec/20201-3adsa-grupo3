INSERT INTO endereco (id_endereco, logradouro, numero_endereco, complemento, cep, bairro, estado, cidade) VALUES (1, 'Rua Itororó', 185, '', '09431-410', 'Santa Luzia', 'SP', 'Ribeirão Pires');

INSERT INTO usuario_juridico (id_usuario_juridico, nome_ong, email, senha, telefone, cnpj, causa, descricao_ong, logado, fk_endereco) VALUES (1, 'Teto Brasil', 'tetobrasil@email.com', 'tetobrasil@123', '1159185227', '11637264000168', 'Construção', 'Construção de moradias para pessoas de baixa renda', false, 1);

INSERT INTO usuario_fisico (id_usuario_fisico, email, nome, senha, telefone, data_nascimento, cpf, sexo, logado, fk_endereco) VALUES (1, 'caio@email.com', 'Caio', 'senha123', '11975379085', TO_DATE('19/04/2001', 'DD/MM/YYYY'), '462.749.518-81', false, false, 1);

INSERT INTO avaliacao (id_avaliacao, pontuacao, relatorio, fk_usaurio_fisico, fk_usuario_juridico) VALUES (1, 5, 'foi bem', 1, 1);
INSERT INTO avaliacao (id_avaliacao, pontuacao, relatorio, fk_usaurio_fisico, fk_usuario_juridico) VALUES (2, 4, 'foi menos bem', 1, 1);
INSERT INTO avaliacao (id_avaliacao, pontuacao, relatorio, fk_usaurio_fisico, fk_usuario_juridico) VALUES (3, 3, 'foi +-', 1, 1);
INSERT INTO avaliacao (id_avaliacao, pontuacao, relatorio, fk_usaurio_fisico, fk_usuario_juridico) VALUES (4, 2, 'foi ruim', 1, 1);
INSERT INTO avaliacao (id_avaliacao, pontuacao, relatorio, fk_usaurio_fisico, fk_usuario_juridico) VALUES (5, 1, 'foi péssimo', 1, 1);