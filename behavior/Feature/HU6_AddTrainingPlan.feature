Feature: Add a training Plan

  Scenario: Cuando estoy registrado como entrenador, y creo de manera correcta un entreno
    Given Cuando estoy visualizando los planes de entrenamiento
    When Le doy al botón de añadir
    And Aparece un modal con un formulario donde se creará el plan de entrenanmiento
    And Le dará al botón de aceptar para confirmar la creación del plan de entrenamiento
    Then Se creará un nuevo plan de entrenamiento que será visible en la vista de planes de entrenamiento

  Scenario: Cuando estoy registrado como entrenador, y creo de manera incorrecta un plan de entrenamiento
      Given Cuando estoy visualizando los planes de entrenamiento
      When Realiza un click en el botón "modificar" del entrenamiento
      And Aparece un modal con un formulario donde realizará los cambios
      And Le dará al botón de aceptar para confirmar dichos cambios
      Then Se ponen con borde rojo los campos que no cumplen las condiciones

