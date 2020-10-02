# Compass.io  

### Organização do repositório

Nomes de pastas -> "kebab-case"  
Nomes de arquivos -> "PascalCase.ext"

Tudo sem acento e/ou espaço

Padrão para os commits -> Exs:  
"(documentacao) Protótipos de telas finalizado"  
"(front-end) Tela de cadastro atualizada e comecei a fazer a tela do feed"

### Branches

#### Criação  

O padrão utilizado para nomear branches será o snake_case, e todas as branches deverão começar com
nome do repositorio que derivou, seguido por uma breve descrição do que será feito na branch
e se necessário algum identificador a mais, como o nome de quem está trabalhando na branch, um número, etc

Exs:  
master_conexao_banco_java_fajan  
master_front  
master_front_telas_cadastro  
master_front_telas_cadastro_2

Para trabalhar principalmente no front vamos usar as branches, para que não ocorra conflitos  
Para criar uma branch existe 2 formas:

- Pelo terminal/bash  
  git branch nome_da_branch <- Cria a branch  
  git switch nome_da_branch <- Muda a branch do seu repositório local  
  git push --set-upstream origin nome_da_branch <- Envia sua branch para o repositório remoto, assim todos do time terão acesso  
  
- Pelo github  
  Clique onde está escrito "master", digite o nome da sua nova branch e clique em "Create branch: nome_da_branch from 'branch_pai'"
  
#### Merge  

Para fazer o merge pelo terminal/bash deve-se executar os comandos:  
  git checkout master <- Troca para a branch master
  git merge nome_da_branch <- Funde a branch mencionada com a master
