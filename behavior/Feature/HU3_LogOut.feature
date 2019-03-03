Feature: Log Out

  Scenario: El usuario quiere cerrar la sesión en la aplicación
    Given Un usuario que se encuentra con la sesión iniciada en la página de pefil de usuario
    When Click al icono de ajustes
    And Selecciona la opción de "Cerrar Sesión"
    Then Se cierra la sesión