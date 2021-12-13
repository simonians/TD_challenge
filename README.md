# TD_challenge

El challenge consta de la creación de una API que permita la gestión de clientes para una empresa de venta de motocicletas online. 
La API fue creada con Node.js y la base de datos gestionada con MySQL. El proyecto se esta deployado en AWS usando los servicios que otorga la versión gratuita de Amazon. 
Al mismo se puede acceder a través del siguiente enlace: [API-MotorbikeOnlineShop]("").
El sistema permite: 
- [Obtener todos los clientes]()
- [Obtener un cliente por id]()
- [Obtener todos los clientes ordenados por su crédito disponible]()
- [Crear un nuevo cliente]()
- [Insertar en un cliente un determinado crédito disponible]()
- [Eliminar un cliente]()
- [Actualizar la información de un cliente]()

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


## Infraestructura
La infraestructura fue diseñada en AWS conteniendo los principales servicios para estructura de red, servidores, almacenamiento externo, bases de datos y seguridad.

### AWS: 
Implementación de instancias comprendidas en free-tier:
  * EC2: el sistema operativo es un Ubuntu, t2.micro, vpc, key privada, security groups correspondientes para acceso publico y privado, instalación de web server, instalación de paquetes y scripts necesarios para la ejecución de la aplicación.
  * RDS: Base de datos MySQL, SGs correspndientes, tablas y relaciones, conexión a EC2, conexión a instancia desde Workbench.

### Docker:
- Dockerfile
- Docker-compose


## Correr el proyecto localmente: 

### Observaciones:
"Todos los comandos aquí tipeados son válidos para una máquina con sistema operativo linux. En caso de correr el proyecto en cualquier otro sistema operativo, buscar los comandos equivalentes". 

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

### Primer uso
1) Clonar este repositorio. Para esto, correr el siguiente comando en la teminal de tu computadora:
```
git clone https://github.com/simonians/TD_challenge.git 
```
2) Ingresar al proyecto con el comando 
```
cd TD_challenge
```
3) 
