Feature: Log in
  As usuario
  quiero poder abrir sesion en el portal web
  So acceder al contenido de la aplicacion

  Scenario: Acceder con el nombre de usuario y una contraseña correcta
    Given Accedemos a lá página de acceso de la página web "http://127.0.0.1:8080/"
    And observamos la página de inicio de sesión
    When Rellenamos los campos del formulario con cris y "prueba1"  
    And Pulsamos en el botón de acceder
    Then Se registra con éxito y lo lleva a la página home de la aplicación
  
  Scenario: Acceder con el nombre de usuario y una contraseña incorrecta
    Given Accedemos a lá página de acceso de la página web "http://127.0.0.1:8080/"
    And observamos la página de inicio de sesión
    When Rellenamos los campos del formulario con cris y "prueba"  
    And Pulsamos en el botón de acceder
    Then Aparece un mensaje de error y se marcan los fields en un borde rojo
  
  Scenario: Acceder con un nombre de usuario incorrecto y una contraseña correcta
    Given Accedemos a lá página de acceso de la página web "http://127.0.0.1:8080/"
    And observamos la página de inicio de sesión
    When Rellenamos los campos del formulario con crisa y "prueba1"  
    And Pulsamos en el botón de acceder
    Then Aparece un mensaje de error y se marcan los fields en un borde rojo 
    
  Scenario: Acceder con un nombre de usuario incorrecto y una contraseña incorrecta
    Given Accedemos a lá página de acceso de la página web "http://127.0.0.1:8080/"
    And observamos la página de inicio de sesión
    When Rellenamos los campos del formulario con crisa y "prueba"  
    And Pulsamos en el botón de acceder
    Then Aparece un mensaje de error y se marcan los fields en un borde rojo 
    
  Scenario: Olvidar la contraseña
    Given Accedemos a lá página de acceso de la página web "http://127.0.0.1:8080/"
    And observamos la página de inicio de sesión
    When Pulsamos en el link que pone "¿Se te ha olvidado la contraseña?"
    Then Se le envia un correo al usuario, que tendrá un link que lo llevará a una
          página para restablecer dicha contraseña

  Scenario: Crear una nueva cuenta
    Given Accedemos a lá página de acceso de la página web "http://127.0.0.1:8080/"
    And observamos la página de inicio de sesión
    When Pulsamos en el botón que pone "Registrarse"
    Then Se le envía a la página para crearse una cuenta