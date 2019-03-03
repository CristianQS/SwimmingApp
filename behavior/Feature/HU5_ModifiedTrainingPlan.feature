Feature: Modified a Training Plan
    Scenario: Cuando estoy registrado como entrenador
      Given Cuando estoy visualizando los planes de entrenamiento
      When Realiza un click en el botón "modificar" del entrenamiento
      And Aparece un modal con un formulario donde realizará los cambios
      And Le dará al botón de aceptar para confirmar dichos cambios
      Then Visualiza la modificación de los planes de entrenamiento