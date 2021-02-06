

select * from usuario_juridico

INSERT INTO VAGA(titulo,causa,descricao,data_inicio,data_fim,foto,fk_endereco,fk_usuario_juridico) VALUES 
('Trabalho de marcenaria para construir móveis', 'Lares','Design e montagem de móveis para lares de pessoas com baixa renda e restauração de carteiras e mesas de escolas e orfanatos que não possuem a verba para adquirir novos.',
01/02/2021,01/03/2021,null,1,8),
('Odontologia para crianças na comunidade','Crianças','Visitar as comunidades para realizar consultas odontológicas em crianças de 2 à 12 anos, visando sanar as manutenções necessárias e também efetuar uma educação de saúde dentária.',
09/12/2020,08/03/2020,null,2,5),
('Criando um bom lar para as nossas tartarugas','Animais','Buscando pessoas com ou sem conhecimento em medicina veterinária, para ajudar a melhorar o meio-ambiente de nossos amigos marinhos e ajudar as tartarugas com necessidade de ajuda veterinária.',
03/07/2021,14/09/2021,null,3,3),
('Levar alegria aos nossos pequenos amiguinhos','Crianças com Deficiência','Você está disposto a gerar um sorriso ? Tem a vontade de induzir as pequenas crianças que estão em um hospital a ter sempre mais esperança ? Então este é o lugar certo para você se candidatar.',
12/12/2020,02/03/2021,null,4,7),
('Assistência jurídica para defender causa de violências domésticas','Direitos Civis','Procuramos pessoas com formação e experiência jurídica para poder realizar atividades pró-bonos, visando defender a causa de proteção para as mulheres vítimas de violência doméstica para que mais vozes sejam ouvidas sobre essa questão.',
02/04/2021,08/05/2021,null,5,6),
('Visita médica a lares de idosos','Idosos','Vaga para pessoas da área médica para efetuarem consulta e possíveis pedidos para exames médicos, em lares de idosos aonde o mesmo se encontra com dificuldades para levar os seus idosos para os hospitais.',
09/12/2020,08/03/2020,null,6,2),
('Reciclagem nas áreas litorâneas e urbanas após o Reveillon','Meio-ambiente','Você gosta de morar ou de visitar uma cidade e ela estiver limpinha ? Então cadastre nessa vaga para que possamos nos orgarnizarmos para viver em um mundo mais Ecologicamente consciente.',
28/12/2020,02/01/2021,null,7,4)


select * from endereco


INSERT INTO Endereco(logradouro,numero_endereco,CEP,bairro,estado,cidade) VALUES
('Rua do Carmo', 21, '04500-930','Vila Ede','SP','Campinas'),
('Rua Royal', 33,'29300-982','Nova Aurora', 'PA','João Pessoa'),
('Rua do Abutre', 594,'33045-721','Palestra Nuestra', 'PE','Recife'),
('Avenida do Sertão', 3300, '09855-102','Nova Almeida','SP','São Paulo'),
('Rua dos Unidos', 1200,'09978-130','Colorado','BA','Salvador'),
('Travessa da Alegria', 344, '08823-122','Maestria Nova','PR','Foz do Iguaçú'),
('Avenida Jabaquara', 3045,'02203-455','Jabaquara','SP','São Paulo')

delete from endereco where id = 11

INSERT INTO usuario_juridico(nome_ong,email,senha,telefone,cnpj,causa,foto,descricao,fk_endereco,logado) VALUES
('Vida Nova','vidanova@vidanova.com','dda2ac89aa5adffd132d7ef4a7beb6ca','1194546-0092','51.875.261/0001-96','Idosos',null,'A melhor idade é a de agora. Transformando a vida de uma geração não esquecida.',6,0),
('Futuro Belo','futurobelo@futurobelo.com','d2ee6f39c83dd22e0267a02405671705','1597483-0293','62.608.656/0001-49','Animais',null,'Além da raça humana, levando para nosso planeta uma visão de que não estamos sozinhos.',3,0),
('GreenPeace','greenpeace@greenpeace.com','e94c4c98058240f5343f18e9e4f7c07b','133784-9453','83.046.136/0001-60','Meio-Ambiente',null,'Dentro de nós existe o meio-ambiente, ajude a nos proteger.',7,0),
('PeaceCorp','peacecorp@peacecorp.com','cfd135e95704025707981b3f1b05d56f','197634-1585','25.518.215/0001-20','Crianças',null,'Você já fez alguma coisa no presente que mudou o nosso futuro ? Pois o nosso futuro são as crianças de hoje.',2,0),
('Esperança Sempre','esperancasempre@esperancasempre.com','01fe906bfecf6ce5740bfe20aa23051c','2195634-0928','48.717.652/0001-78','Direitos Civis',null,'A suprema arte da guerra é derrotar o inimigo sem lutar. Vamos em buscas dos direitos dos necessitados.',5,0),
('Criança Esperança','criancaesperanca@criancaesperanca.com','219092f75b76092fe761edc8a3512f50','2297689-1234','78.465.348/0001-41','Crianças com Deficiência',null,'Buscamos levar para pessoas portadoras de deficiências a oportunidade de uma vida esperançosa e cheia de possibilidades.',4,0),
('InovaLar','inovalar@inovalar.com','e88ad6bc7d8aab1e167388190cd0719f','1398765-4321','82.028.974/0001-48','Lares',null,'Todos merecem se sentir confortavéis em seu próprio lar, isso que temos como meta.',4,0)