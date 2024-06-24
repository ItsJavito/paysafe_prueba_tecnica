# Proyecto de transacciones

Prueba técnica paysafe. 

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Levantar el Programa

Sigue estos pasos para levantar el programa:

1. **Clonar el Repositorio**

   ```sh
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Construir y Levantar los Contenedores**


    ```sh
    docker-compose build --no-cache
    docker-compose up
    ```

    Esto construirá y levantará los contenedores para el frontend, backend y MongoDB, y ejecutará el script de semilla para poblar la base de datos con datos iniciales.

3. El aplicativo estará en el http://localhost:3000