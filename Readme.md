# Trabajo de Fin de Grado
---
## Introducción
Este proyecto consiste en una aplicación web responsive para la gestión de entrenamientos de natación, en la cuál se puede cronometrar y visualizar dichos entrenamientos.
___
## Tecnologías Utilizadas

### Frontend
* Vue.js
* Vuex
* Vue Router
* Vuetify

Se ha hecho uso del framework de Vue.js junto con sus librerias, para desarrollar
el frontend de la aplicación.

### Backend
* Django
* Django REST-Framework
* JWT

Se ha desarrollado una API REST, la cuál devuelve un token jwt al usuario una vez
haya iniciado sesión. Este token, se enviará por la cabezera para poder hacer uso 
de la API

### Infraestructura 
* Docker
* Jenkins
* Amazon Web Services

Para desplegar dicha aplicación se ha hecho uso de un EC2 en AWS, en el cuál
se instalado un Jenkins para poder hacer uso de CI/CD. En la fase de despliegue(stage) se ha realizado a través de contenedores Docker, creando previamente un
docker-compose para su posterior uso.

[![Image from Gyazo](https://i.gyazo.com/59db325436004a464460240938c8c353.png)](https://gyazo.com/59db325436004a464460240938c8c353)
