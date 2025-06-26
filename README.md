# 🏋️‍♀️ GenPass - Nova Geração da Galera Fit

> **Seu corpo programado para resultados!**  
GenPass é uma aplicação de gerenciamento de treinos voltada para quem busca praticidade e performance na rotina fitness. Com uma estrutura robusta e tecnologias modernas, o sistema permite o cadastro, monitoramento e atualização de treinos de forma eficiente.

---

## 📋 Descrição do Projeto

GenPass foi desenvolvido para facilitar o controle e personalização da rotina de treinos. Através de um CRUD completo, o sistema oferece uma interface backend sólida para manipulação de dados de treinos, garantindo flexibilidade para atletas, personal trainers e academias.

---

## 🧩 Estrutura da Tabela: `tb_treinos`

| Campo         | Tipo         | Descrição                          |
|---------------|--------------|------------------------------------|
| `id`          | number       | Identificador único do treino      |
| `tipoTreino`  | string       | Tipo de treino (ex: cardio, força) |
| `repeticoes`  | number       | Número de repetições por exercício |
| `series`      | number       | Quantidade de séries               |
 
---

## ⚙️ Funcionalidades Principais

- ✅ **Cadastrar** treinos
- 🔁 **Atualizar** e **ajustar** treinos existentes
- 👀 **Acompanhar** a rotina de treinos
- 🔍 **Localizar** treinos específicos por tipo ou ID
- ❌ **Deletar** treinos que não são mais utilizados

---

## 🛠️ Tecnologias Utilizadas

- **Typescript** – Tipagem estática e segura
- **NestJS** – Framework Node.js moderno para aplicações escaláveis
- **Node.js** – Ambiente de execução backend
- **MySQL Workbench** – Modelagem e gerenciamento do banco de dados relacional
- **TypeORM** – ORM para integração entre a aplicação e o banco de dados
- **Insomnia** – Testes e simulação de rotas da API
- **Microsoft Word** – Documentação e relatórios

---

## 🚀 Como Executar o Projeto

## Contribuidores:
- @dgsferreira
- @giovannabreinack
- @giubarreto
- @maridevdata
- @mateuscamargo
- @Munnizdev
- @ysabellax

> Pré-requisitos: Node.js, MySQL, Nest CLI

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/genpass.git

# 2. Acesse a pasta do projeto
cd genpass

# 3. Instale as dependências
npm install

# 4. Configure o banco de dados no arquivo .env

# 5. Rode as migrations (se aplicável)
npm run typeorm migration:run

# 6. Inicie o servidor
npm run start:dev
