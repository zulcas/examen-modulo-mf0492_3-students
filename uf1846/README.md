# CatSalut APP

Des de CatSalut nos han mandado implementar una app para gestionar la información sobre los pacientes de la seguridad social. Implementa los diferentes apartados.

En la mayoría de las ocasiones tan solo es necesario modificar o añadir una línea de código para obtener la funcionalidad

[Demo](https://oscarm.tinytake.com/df/16ca641/thumbnail?type=attachments&version_no=0&file_version_no=0&thumbnail_size=preview)

## Apartado A : Obtener la lista de pacientes en formato JSON

Modifica el _endpoint_ `GET /api/patients` para obtener la lista de pacientes de la base de datos en formaot JSON

## Apartado B

- Cuando accedemos a http://localhost:3000 no podemos ver el número de pacientes totales de la base de datos. Modifica el fichero *home.ejs* para arreglar este fallo.

## Apartado C

Actualmente no está funcionando correctamente el comprobar si un paciente existe o no en la base de datos. Modifica el endpoint `GET /check` para conseguirlo. 

<details>
  <summary>Pista</summary>
  <p>1. Necesitas obtener el número de la seguridad social de la query string</p>
  <p>2. Hay que modificar la consulta a la base de datos para realizar la búsqueda del documento usando la información anterior</p>
</details>

## Apartado D

Queremos llevar un registro de las peticiones que se hacen a la base de datos de la seguridad social. Cada vez que se haga una petición, escribe una entrada en el fichero de formato 'YEAR-MONTH-DAY.txt'

### BONUS - No puntuable

1. Añade validación sobre el [SSN Español](https://docs.trellix.com/es-ES/bundle/data-loss-prevention-11.10.x-classification-definitions-reference-guide/page/GUID-AACF0E3A-3089-4578-83EB-3E6C3DB41684.html) en:
  - El formulario
  - El endpoint que realiza la consulta a la base de datos
  - El modelo 
