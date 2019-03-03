  Feature: See Plan of Training

  Scenario: Cuando estoy registrado como nadador
    Given Cuando un usuario se encuentra en la pestaña de perfil
    When Realiza un click en el tab  "plan de entrenamiento"
    Then Visualiza sus planes de entrenamiento

  Scenario: Cuando estoy registrado como nadador, y no tengo un plan de entrenamiento
    Given Cuando un usuario se encuentra en la pestaña de perfil
    When Realiza un click en el tab  "plan de entrenamiento"
    Then No se visualiza sus planes de entrenamiento
    And Aparece un mensaje "No tiene ningún plan de entrenamiento asignado"

  Scenario: Cuando estoy registrado como entrenador
    Given Cuando un usuario se encuentra en la pestaña de perfil
    When Realiza un click en el tab  "plan de entrenamiento"
    Then Visualiza sus planes de entrenamiento