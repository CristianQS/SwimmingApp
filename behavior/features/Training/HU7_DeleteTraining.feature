Feature: Delete a training

  Scenario: Cuando estoy registrado como entrenador
    Given Cuando estoy visualizando los entrenos
    When Le doy al botón de eliminar
    Then Se elimina el entreno que ya no será visible en la vista de entrenos