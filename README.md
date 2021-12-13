# TD_challenge

El challenge consta de la creación de una API que permita la gestión de clientes para una empresa de venta de motocicletas online. 
La API fue creada con Node.js y la base de datos gestionada con MySQL. El proyecto se esta deployado en AWS usando los servicios que otorga la versión gratuita de Amazon. La url con el proyecto deployado es la siguiente: [```http://ec2-54-152-101-167.compute-1.amazonaws.com/```]("http://ec2-54-152-101-167.compute-1.amazonaws.com/").
Además, los endpoints principales son: : 
- Obtener todos los clientes --> ```GET http://ec2-54-152-101-167.compute-1.amazonaws.com/customers/v1/```
- Obtener un cliente por id --> ``` GET http://ec2-54-152-101-167.compute-1.amazonaws.com/customers/v1/1```
- Obtener todos los clientes ordenados por su crédito disponible --> ```GET http://ec2-54-152-101-167.compute-1.amazonaws.com/customers/v1/sort/1```
- Crear un nuevo cliente --> ```POST http://ec2-54-152-101-167.compute-1.amazonaws.com/customers/v1/```
- Insertar en un cliente un determinado crédito disponible --> ```POST http://ec2-54-152-101-167.compute-1.amazonaws.com/credit/v1/```
- Eliminar un cliente --> ```DELETE http://ec2-54-152-101-167.compute-1.amazonaws.com/customers/v1/{id}```
- Actualizar la información de un cliente --> ```PUT http://ec2-54-152-101-167.compute-1.amazonaws.com/customers/v1/{id}```

## Correr el proyecto localmente: 

### Observaciones:
- Todos los comandos aquí tipeados son válidos para una máquina con sistema operativo linux. En caso de correr el proyecto en cualquier otro sistema operativo, buscar los comandos equivalentes. 

### Requerimientos
1) Tener instalado docker y docker-compose. 
- Para verificar si docker y docker-compose estaban previamente instalado, pueden ejecutarse los siguientes comandos: 
  - docker --version 
  - docker-compose --version
- En caso de no tener previamente instalados docker y docker compose, ejecutar los siguientes comandos: 
  - sudo apt install docker.io
  - sudo apt install docker-compose

2) Tener instalado git previamente
- En caso de no tenerlo previamente instalado, se recomienda la siguiente [documentación](https://www.atlassian.com/es/git/tutorials/install-git)

3) Tener instalado MySQL y Workbench
- En caso de no tenerlos instalados, se recomienda leer la siguiente documentación:
    - [Instalación MySQL](https://dev.mysql.com/doc/refman/8.0/en/general-installation-issues.html) 
    - [Instalación WORKBENCH](https://dev.mysql.com/downloads/workbench/)

4) Abrir el WORKBENCH y crear una conexión local. 

5) Una vez que haya ingresado a su conexión local, abrir y correr el script **MotosOnlie_DataBase.sql** que se encuentra en la carpeta **database** de la ruta principal.

6) Si todo salió bien, configurar los datos de la conexión a su base de datos local en el archivo **databaseConfiguration.js** que se encuentra en el siguiente path del proyecto ``` TD_challenge/src/configurations/databaseConfiguration.js ```.

7) Ya está listo para ejecutarse y comenzar a gestionar la información de los clientes en su base de datos local.

### Primer uso
1) Clonar este repositorio. Para esto, correr el siguiente comando en la teminal de tu computadora:
```
git clone https://github.com/simonians/TD_challenge.git 
```
2) Ingresar al proyecto con el comando 
```
cd TD_challenge
```
3) Otorgar permisos de administración
```
sudo su
```
4) Construir la imágen 
```
docker build -t node-api-motorbikeonline .
```
5) Levantar la imágen en el puerto 80
```
docker run -dp 80:8080 -e PORT=8080 -e HOST=0.0.0.0 node-api-motorbikeonline
```
Ahora, dirigirse en su navegador al endpoint: ``` http://localhost:8080/ ``` y el proyecto debería estar funcionando. Ahora puede usar la API a su gusto. 

6) Además, con docker stop puede pararse la ejecución


## Endpoints

- Formato mensajes de error:
```
{
    "success": false,
    "message": "message sended",
    "error": {
        "statusCode": ,
        "message": "message sended",
        "error": true
    }
}
```

- Obtener todos: ``` GET ``` a ``` PATH/ ```
  - ``` Status 404 Not Found ``` -> error en la petición de MySQL
  - ``` Status 400 Bad Request ``` -> no hay clientes cargados en la base de datos
  - ``` Status 200 Ok ``` -> listar todos los clientes
  ```
  [
    {
        "id": ,
        "name": "",
        "last_name": ""
    }
  ]
  ```
 
- Obtener un cliente por id: ``` GET ``` a ``` PATH/{id} ```
  - ``` Status 404 Not Found ``` -> error en la petición de MySQL
  - ``` Status 400 Bad Request ``` -> no hay cliente con dicho id
  - ``` Status 200 Ok ``` -> lista el cliente encontrado
  ```
    {
        "id": ,
        "name": "",
        "last_name": ""
    }
  ```
  
- Obtener todos los clientes ordenados por crédito disponible: ``` GET ``` a ``` PATH/sort/{asc} ```
  - Si deseamos ordenardos de forma ascendete el parámetro de la petición debe ser 1. Mientras que si lo hacemos de forma descendente debe ser 0.
  - ``` Status 404 Not Found ``` -> error en la petición de MySQL
  - ``` Status 400 Bad Request ``` -> no hay clientes cargados en la base de datos
  - ``` Status 200 Ok ``` -> listar todos los clientes ordenados según crédito disponible
  ```
   [
    {
        "Available credit": ,
        "Name": "",
        "Last Name": ""
    },
    {
        "Available credit": ,
        "Name": "",
        "Last Name": ""
    }
   ]
  ```
  
- Crear un nuevo cliente en la base de datos: ``` POST ``` a ``` PATH/ ```
  - ``` Status 404 Not Found ``` -> error en la petición de MySQL
  - ``` Status 200 Ok ``` -> Cliente insertado correctamente

- Eliminar un cliente: ``` DELETE ``` a ``` PATH/{id} ```
  - ``` Status 404 Not Found ``` -> error en la petición de MySQL
  - ``` Status 400 Bad Request ``` -> no hay ningún cliente con ese id en la base de datos
  - ``` Status 200 Ok ``` -> Eliminado exitosamente
 
- Actualizar un cliente: ``` PUT ``` a ``` PATH/{id} ```
  - ``` Status 404 Not Found ``` -> error en la petición de MySQL
  - ``` Status 400 Bad Request ``` -> no hay ningún cliente con ese id en la base de datos
  - ``` Status 200 Ok ``` -> Actualizado exitosamente

- Insertar crédito disponible en un cliente: ``` POST ``` a ``` PATH/:customer_id ```
  - ``` Status 404 Not Found ``` -> error en la petición de MySQL
  - ``` Status 400 Bad Request ``` -> no hay ningún cliente con ese id en la base de datos
  - ``` Status 200 Ok ``` -> Crédito insertado de forma correcta


## Infraestructura global 
La infraestructura fue diseñada en AWS conteniendo los principales servicios para estructura de red, servidores, almacenamiento externo, bases de datos y seguridad.

### AWS: 
Implementación de instancias comprendidas en free-tier:
  * EC2: el sistema operativo es un Ubuntu, t2.micro, vpc, key privada, security groups correspondientes para acceso publico y privado, instalación de web server, instalación de paquetes y scripts necesarios para la ejecución de la aplicación.
  * RDS: Base de datos MySQL, SGs correspndientes, tablas y relaciones, conexión a EC2, conexión a instancia desde Workbench.

### Docker:
- Dockerfile
- Docker-compose
