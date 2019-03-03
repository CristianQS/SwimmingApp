Feature: Modified a Training Plan

    Scenario: Cuando estoy registrado como entrenador, y modifico de manera correcta un entreno
      Given Cuando estoy visualizando los planes de entrenamiento
      When Realiza un click en el botón "modificar" del entrenamiento
      And Aparece un modal con un formulario donde realizará los cambios
      And Le dará al botón de aceptar para confirmar dichos cambios
      Then Visualiza la modificación de los planes de entrenamiento

  Scenario: Cuando estoy registrado como entrenador, y modifico de manera incorrecta un plan de entrenamiento
      Given Cuando estoy visualizando los planes de entrenamiento
      When Realiza un click en el botón "modificar" del entrenamiento
      And Aparece un modal con un formulario donde realizará los cambios
      And Le dará al botón de aceptar para confirmar dichos cambios
      Then Se ponen con borde rojo los campos que no cumplen las condiciones