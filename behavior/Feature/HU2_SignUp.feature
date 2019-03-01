Feature: Sign Up

  Scenario: Un nuevo usuario, no rellena todos los campos
    Given Accedemos a lá página de registrarse "http://127.0.0.1:8080/"
    When Nos falta que rellenar algunos de los campos del formulario"
    And Pulsamos en el botón de registrarse
    Then Salta un mensaje de error  diciendo "tiene que rellenar los campos que se encuentra en rojo"
    And Se ponen con borde rojo los campos que no cumplen las condiciones

  Scenario: Un nuevo usuario, rellena los campos de manera incorrecta
    Given Accedemos a lá página de registrarse "http://127.0.0.1:8080/"
    When Rellenamos algunos de los campos del formulario de manera incorrecta"
    And Pulsamos en el botón de registrarse
    Then Salta un mensaje de error  diciendo "tiene que rellenar los campos que se encuentra en rojo"
    And Se ponen con borde rojo los campos que no cumplen las condiciones

  Scenario: Un nuevo usuario, rellena los campos de con un nombre de usuario ya cogido
    Given Accedemos a lá página de registrarse "http://127.0.0.1:8080/"
    When Rellenamos el campo de nombre de usuario del formulario con un nombre ya cogido
    And Pulsamos en el botón de registrarse
    Then Salta un mensaje de error  diciendo "Este nombre de usuario ya exite, coja otro"
    And Se ponen con borde rojo el campo de nombre de usuario

  Scenario: Un nuevo usuario, rellena los campos de manera correcta
    Given Accedemos a lá página de registrarse "http://127.0.0.1:8080/"
    When Rellenamos los campos del formulario de manera correcta"
    And Pulsamos en el botón de registrarse
    Then Se ha creado un nuevo usuario
    And  Nos lleva a la página principal de la aplicación

  Scenario: Un nuevo usuario, se arrepiente de registrarse
    Given Accedemos a lá página de registrarse "http://127.0.0.1:8080/"
    When  Pulsamos en el botón de cancelar
    Then Nos lleva a la página de inicio de sesión