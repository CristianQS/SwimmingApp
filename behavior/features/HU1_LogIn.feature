Feature: Log in
  As usuario
  quiero poder abrir sesion en el portal web
  So acceder al contenido de la aplicacion

  Scenario: Acceder con el nombre de usuario y una contraseña correcta
    Given Accedemos a lá página de acceso de la página web "http://localhost:8080/#/auth/login"
    And observamos la página de "front"
    When Rellenamos los campos del formulario con "cris" y "prueba1"
    And Pulsamos en el botón con el id "btn_login"
    Then Se le envía a la página "http://localhost:8080/#/profile"

  Scenario: Acceder con el nombre de usuario y una contraseña incorrecta
    Given Accedemos a lá página de acceso de la página web "http://localhost:8080/#/auth/login"
    And observamos la página de "front"
    When Rellenamos los campos del formulario con "cris" y "prueba"
    And Pulsamos en el botón con el id "btn_login"
    Then Se le envía a la página "http://localhost:8080/#/auth/login"

  Scenario: Acceder con un nombre de usuario incorrecto y una contraseña correcta
    Given Accedemos a lá página de acceso de la página web "http://localhost:8080/#/auth/login"
    And observamos la página de "front"
    When Rellenamos los campos del formulario con "crisa" y "prueba1"
    And Pulsamos en el botón con el id "btn_login"
    Then Se le envía a la página "http://localhost:8080/#/auth/login"

  Scenario: Acceder con un nombre de usuario incorrecto y una contraseña incorrecta
    Given Accedemos a lá página de acceso de la página web "http://localhost:8080/#/auth/login"
    And observamos la página de "front"
    When Rellenamos los campos del formulario con "crisa" y "prueba"
    And Pulsamos en el botón con el id "btn_login"
    Then Se le envía a la página "http://localhost:8080/#/auth/login"

  #Scenario: Olvidar la contraseña
    #Given Accedemos a lá página de acceso de la página web "http://127.0.0.1:8080/"
    #And observamos la página de inicio de sesión
    #When Pulsamos en el link que pone "¿Se te ha olvidado la contraseña?"
    #Then Se le envia un correo al usuario, que tendrá un link que lo llevará a una página para restablecer dicha contraseña

  Scenario: Crear una nueva cuenta
    Given Accedemos a lá página de acceso de la página web "http://localhost:8080/#/auth/login"
    When Pulsamos en el botón con el id "btn_signup"
    Then Se le envía a la página "http://localhost:8080/#/signup"