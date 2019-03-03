Feature: Add a training Plan

  Scenario: Cuando estoy registrado como entrenador
    Given Cuando estoy visualizando los planes de entrenamiento
    When Le doy al botón de añadir
    And Aparece un modal con un formulario donde se creará el plan de entrenanmiento
    And Le dará al botón de aceptar para confirmar la creación del plan de entrenamiento
    Then Se creará un nuevo plan de entrenamiento que será visible en la vista de planes de entrenamiento
