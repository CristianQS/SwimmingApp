Feature: Add a training Plan

  Scenario: Cuando estoy registrado como entrenador, y creo de manera correcta una actividad
    Given Cuando estoy visualizando las actividades
    When Le doy al botón de añadir
    And Aparece un modal con un formulario donde se creará una actividad
    And Le dará al botón de aceptar para confirmar la creación de la actividad
    Then Se creará una nueva actividad que será visible en la vista de actividad

  Scenario: Cuando estoy registrado como entrenador, y creo de manera incorrecta una actividad
      Given Cuando estoy visualizando las actividades
      When Realiza un click en el botón "añadir"
      And Aparece un modal con un formulario donde se creará una actividad
      And Le dará al botón de aceptar para confirmar la creación de la actividad
      Then Se ponen con borde rojo los campos que no cumplen las condiciones

