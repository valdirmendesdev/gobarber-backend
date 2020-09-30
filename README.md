<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  GoBarber: Backend
</h3>

<blockquote align="center">“Não existe linha de chegada, a vitória está em se manter correndo”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/valdirmendesdev/gobarber-backend?color=%2304D361">

  <a href="https://valdirmendes.dev">
    <img alt="Made by Valdir Mendes" src="https://img.shields.io/badge/made%20by-Valdir%20Mendes-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/valdirmendesdev/gobarber-backend/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/valdirmendesdev/gobarber-backend?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-a-aplicacao">Sobre a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre a aplicação

API de uma aplicação que gerencia agendamento de data e horas de serviços.

Os clientes podem encontrar prestadores de serviços, seus horários disponíveis e agendar o melhor horário.

Os prestadores de serviços consegue visualizar os agendamentos e gerenciar seus horários.

Além disso, o sistema é capaz de notificar os usuários quando alguns eventos (ex: cancelamento) ocorrem.


### :lock: Dependências da aplicação

Todas as dependências de bibliotecas do projeto já estão mapeadas no arquivo package.json, então, basta rodcar o comando abaixo para fazer a instalação dessas bibliotecas.

```bash
  yarn
```

Além disso, é necessário ter uma instância de PostgreSQL rodando para persistência de dados, configurar os dados de acesso do banco no arquivo `ormconfig.json` e executar o comando abaixo para criação das tabelas e seus relacionamentos no banco de dados.:

```bash
  yarn typeorm migration:run
```

<!-- ### Funcionalidades da aplicação

Segue lista de funcionalidades implementadas nessa aplicação.

- **`Listar os produtos`**: Na página inicial exibe uma listagem de produtos em forma de uma tabela. Cada item exibe `titulo`, `imagem` e `preço` de um produto.

- **`Adicionar itens ao carrinho`**: É possível clicar no ícone `+` para adicionar um produto ou adicionar mais uma unidade daquele produto ao carrinho.

- **`Exibir itens do carrinho`**: Na página do carrinho é exibido todos os itens do carrinho, junto com a quantidade, valor único, valor subtotal dos itens e total de todos os items.

- **`Aumentar quantidade de itens do carrinho`**: Na página do carinho é possível que o usuário aumente a quantidade de itens do mesmo produto.

- **`Diminuir quantidade de um item do carrinho`**: Na página do carinho é que o usuário decremente a quantidade de itens do mesmo produto.

- **`Exibir valor total dos itens no carrinho`**: Tanto na página inicial quanto na página do carrinho é exibido o valor total de todos os itens que estão no seu carrinho. Na página inicial, ao clicar no ícone do carinho, o usuário será direcionado para a página do carrinho. -->

### :running: Rodando a aplicação

Para executar a aplicação, clone este repositório, entre na pasta do projeto e instale as dependências com o seguinte comando no terminal:

```bash
yarn
```

#### :running: Rodando os testes automatizados

Para rodar os testes automatizados, execute o seguinte comando no terminal:

```bash
yarn test
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
