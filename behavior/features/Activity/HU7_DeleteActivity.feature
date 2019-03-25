Feature: Delete a training Plan

  Scenario: Cuando estoy registrado como entrenador
    Given Cuando estoy visualizando las actividades
    When Le doy al botón de eliminar
    Then Se elimina la actividad que ya no será visible en la vista de actividades