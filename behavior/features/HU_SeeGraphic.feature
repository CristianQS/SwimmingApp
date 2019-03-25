Feature: See Graphics

  Scenario: Cuando estoy registrado como nadador
    Given Cuando un usuario se encuentra en la pestaña de perfil
    When Realiza un click en el tab  "Graphics"
    Then Visualiza una gráfica con los tiempos del nadador

  Scenario: Cuando estoy registrado como nadador, y no tengo datos que mostar
    Given Cuando un usuario se encuentra en la pestaña de perfil
    When Realiza un click en el tab  "Graphics"
    Then Se visualiza una gráfica vacía
