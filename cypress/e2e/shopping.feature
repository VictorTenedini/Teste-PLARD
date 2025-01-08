Feature: Funcionalidade do Carrinho de Compras

  Scenario: Buscar um produto
    Given que estou na página inicial
    When eu busco pelo produto
    Then o produto deve aparecer nos resultados da busca

  Scenario: Adicionar um produto ao carrinho
    Given que busquei pelo produto
    When eu seleciono o produto nos resultados
    And adiciono o produto ao carrinho
    Then o produto deve estar no carrinho

  Scenario: Validar produtos no carrinho na tela de pagamento
    Given que adicionei o produto ao carrinho
    When eu navego para o carrinho de compras
    Then devo ver o produto no resumo do pedido
    And o valor total deve ser o correto
