Feature: Delete a training Plan

  Scenario: Cuando estoy registrado como entrenador
    Given Cuando estoy visualizando los planes de entrenamiento
    When Le doy al botón de eliminar
    Then Se elimina el plan de entrenamiento que ya no será visible en la vista de planes de entrenamiento