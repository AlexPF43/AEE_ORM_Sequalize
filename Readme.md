Instalar dependencias necesarias
Ejecutar los siguientes comandos dentro del proyecto:

- npm init -y
- npm install express sequelize mysql2
- npm install dotenv si se va a configurar el archivo .env

Para migrar los datos de la base de datos a la carpeta models mediante el ORM Sequelize ejecutar este comando con la bd activa:
npm install sequelize-auto --save-dev

Iniciar el servidor:
node server.js

Para generar el AutoCRUD se debe ejecutar el siguiente comando con la bd activa:
node autocrud.js

Endpoints de ejemplo:

- GET /api/productos
- GET /api/productos/:id
- POST /api/productos
- PUT /api/productos/:id
- DELETE /api/productos/:id

Para este proyecto podría intersar el uso de un archivo .env para configurar las credenciales de la base de datos.
Para implementar este archivo .env se deben seguir estos pasos:

1. Crear un archivo .env en la raíz del proyecto.
2. Editar el archivo con las siguientes variables de entorno:
   DB_HOST=ipdelabd
   DB_USER=usuario
   DB_PASS=tucontraseña
   DB_NAME=nombrebasededatos

3. Añadir en la primera línea del archivo server.js import "dotenv/config";
4. Añadir en el archivo config/db.js lo siguiente:

const sequelize = new Sequelize(
process.env.DB_NAME,
process.env.DB_USER,
process.env.DB_PASS,
{
host: process.env.DB_HOST,
dialect: "mysql",
logging: false,
}
);
