
# Teste-PLARD

Este projeto contém testes automatizados utilizando o Cypress para validar funcionalidades do site **Advantage Online Shopping**. O objetivo é garantir que o processo de busca, adição de produtos ao carrinho e validação de itens no carrinho esteja funcionando corretamente.

## Tecnologias Utilizadas

- **Cypress**: Framework de testes end-to-end para testar interações em um navegador.  
- **Cucumber**: Integração com Cypress para escrever cenários de teste em formato Gherkin.  
- **JavaScript**: Linguagem utilizada para escrever os testes.  
- **Page Object Model**: Padrão de projeto para organizar os testes e facilitar a manutenção do código.  

## Requisitos

- **Node.js**: O projeto requer o Node.js para executar as dependências e os testes.
- **NPM**: Gerenciador de pacotes para instalar as dependências do projeto.

## Como Rodar o Projeto

### 1. Clonar o repositório

Primeiro, clone o repositório do GitHub:

```bash
git clone https://github.com/VictorTenedini/Teste-PLARD.git
cd Teste-PLARD
```

### 2. Instalar as dependências

Instale as dependências do projeto utilizando o NPM:

```bash
npm install
```

### 3. Executar os testes com Cypress

Para rodar os testes de forma interativa (com a interface gráfica do Cypress), use o comando:

```bash
npx cypress open
```

Isso abrirá o Cypress e permitirá que você execute os testes manualmente a partir da interface gráfica.

### 4. Executar os testes em modo headless

Se você preferir rodar os testes de forma não-interativa (sem a interface gráfica), em modo headless (executando no terminal), use o comando:

```bash
npx cypress run
```

Os testes serão executados automaticamente e você verá o resultado no terminal.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

Teste-PLARD/  
├── cypress/  
│   ├── e2e/  
│   │   └── shopping.feature             # Arquivo de cenários em Gherkin  
│   ├── pages/                           # Implementação do padrão Page Object  
│   │   ├── HomePage.js                  # Página inicial  
│   │   ├── ProductPage.js               # Página de produto  
│   │   ├── SearchPage.js                # Página de busca  
│   │   ├── ShoppingCartPage.js          # Página do carrinho  
│   ├── support/  
│   │   ├── step_definitions/  
│   │   │   └── shoppingSteps.js         # Implementação dos steps do Cucumber  
│   │   ├── commands.js                  # Comandos customizados do Cypress  
│   │   ├── e2e.js                       # Configurações globais para os testes  
├── cypress.config.js                    # Configuração do Cypress  
├── package.json                         # Dependências do projeto  
├── README.md                            # Este arquivo de documentação  

### Descrição dos principais arquivos:

- **`shopping.feature`**: Arquivo de feature contendo os cenários descritos em Gherkin para busca, adição ao carrinho e validação de produtos no carrinho. 
- **`shoppingSteps.js`**: Implementação dos steps definidos em `shopping.feature` usando os Page Objects do projeto.   
- **`pages/`**: Contém os arquivos de implementação do padrão Page Object, que abstraem interações com as páginas do site.


### Testes Funcionais
- **`Gherkin.txt`**: Arquivo contendo os cenários descritos em Gherkin no formato .txt, conforme solicitado.
- **`Teste PLARD VictorTenedini.postman_collection.json`**: Coleção com as requisições e testes de backend realizados no Postman.

## Estratégia de Testes

Os testes realizados no projeto incluem os seguintes cenários:

1. **Busca de um produto**: O teste realiza a busca de um produto específico no site.
2. **Adição ao carrinho**: O produto encontrado é adicionado ao carrinho de compras.
3. **Validação no carrinho**: O produto adicionado ao carrinho é validado na página de pagamento.

### Padrão de Projeto: Page Object Model

Foi adotado o **Page Object Model (POM)** para melhorar a organização, legibilidade e manutenção dos testes. Com esse padrão, cada página do site (como a página inicial, página de resultados de busca, página de produto e página de carrinho) é representada por um arquivo JavaScript dentro da pasta `pages/`. As interações com a página são abstraídas nessas classes, o que facilita a reutilização e manutenção do código.

