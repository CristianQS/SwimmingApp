Feature: Add a training

Scenario: Cuando estoy registrado como entrenador, y creo de manera correcta un entreno
    Given Cuando estoy visualizando los entrenos
    When Le doy al botón de añadir
    And Aparece un modal con un formulario donde se creará un entreno
    And Le dará al botón de aceptar para confirmar la creación de un entreno
    Then Se creará un entreno que será visible en la vista de entrenos

  Scenario: Cuando estoy registrado como entrenador, y creo de manera incorrecta un entreno
      Given Cuando estoy visualizando los entrenos
      When Realiza un click en el botón "añadir"
      And Aparece un modal con un formulario donde se creará un entreno
      And Le dará al botón de aceptar para confirmar la creación de un entreno
      Then Se ponen con borde rojo los campos que no cumplen las condiciones



