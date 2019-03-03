Feature: Modified a Training Plan

    Scenario: Cuando estoy registrado como entrenador, y modifico de manera correcta una actividad
      Given Cuando estoy visualizando las actividades
      When Realiza un click en el botón "modificar" del entrenamiento
      And Aparece un modal con un formulario donde realizará los cambios
      And Le dará al botón de aceptar para confirmar dichos cambios
      Then Visualiza la modificación de la actividad

  Scenario: Cuando estoy registrado como entrenador, y modifico de manera incorrecta una actividad
      Given Cuando estoy visualizando las actividades
      When Realiza un click en el botón "modificar" del entrenamiento
      And Aparece un modal con un formulario donde realizará los cambios
      And Le dará al botón de aceptar para confirmar dichos cambios
      Then Se ponen con borde rojo los campos que no cumplen las condiciones