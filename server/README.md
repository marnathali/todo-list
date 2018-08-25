## TUTORIAL

1) configura el entorno de trabajo.
 -Instala nodejs + npm + express
  - realiza la configuracion inicial del server. ubicado en app.js y bin/www
  -Instala sequelize cli
   -crea el archivo .sequelizerc y configura los path que vas a requerir:
    -config
    -models
    -seeders
    -migrations
  Ejecuta sequelize init y los directorios serán creados.
  2) Crea la BD 
   - actualiza config.json con el usuario, contraseña, nombre de la bd, puerto y dialecto de la base de datos que hayas creado.
   3) Creamos los modelos y los archivos de migracion con sequelize cli.
    - Luego realizamos la migracion ejecutando: `sequelize db:migrate`

   4) Crea los controladores
     -creamos una carpeta para todos los controladores, en donde estaran un archivo.js por cado controlador, por cada modelo. ademas un index.js donde exportaremos todos nuestros contraladores para tener todo en un solo lugar (es solo por motivos de organizacion).
     -creamos una carpeta llamada routes en server donde tendremos un archivo index.js en el que creamos nuestros endpoints 
   

