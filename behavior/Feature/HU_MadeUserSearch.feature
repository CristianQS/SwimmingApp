Feature: Made User Search

  Scenario: Cuando realizamos una búsqueda exitosa
    Given El nadador se encuentra en la vista de búsqueda
    When El nadador rellena el text-field
    And Le da al botón de buscar
    Then Aparece un listado que cumplan con lo escrito en la búsqueda

  Scenario: Cuando realizamos una búsqueda fallida
    Given El nadador se encuentra en la vista de búsqueda
    When El nadador rellena el text-field
    And Le da al botón de buscar
    Then No aparece ningún listado
    And Aparece un mensaje de error "No se ha encontrado a ningún usuario"