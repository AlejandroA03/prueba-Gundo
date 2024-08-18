## Inicio

El backend del proyecto esta generado con Express.js, para iniciarlo solo se necesita usar el comando

```bash
npm start
```

Esta configurado para iniciar en el puerto 3001.

El front fue realizado con Next.js para iniciarlo solo se necesita utilizar el comando

```bash
npm run dev
```

El front se inicia en el puerto 3000 y para el funcionamiento de las peticiones se debe crear una variable de entorno en la carpeta raiz del front .env.local y agregar la variable con el puerto en el que se este ejecutando el back

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001
```



## Base de datos

Para este proyecto se simulo una base de datos estática, en el back se encuentra la carpeta helpers que contiene dos archivos Javascript, uno con 50 alimentos y sus valores nutricionales, y otro con 10 usuarios configurados con diferentes preferencias, igualmente pensando en la escalabilidad del proyecto todos los serivicios estan estructurados como una funcion asincrona y tiene su respectivo manejo de errores.

## Backend

Con respecto al backend se manejo una estructura común de ruta, controladores y servicios, y solo se generaron los servicios necesarios para el cumplimiento de los challenge, en caso de migrar la información a una base de datos dinamica se puede facilmente crear los servicios necesarios para editar, postear y crear tanto usuarios como comida.

## Frontend

Cuenta con un proceso de login, una pestaña donde se renderizan los productos con un sistema de filtros y paginado y un dashboard donde se renderizan las funciones de los dos challenge elegidos, el desafio uno y dos, con las recomendaciones para el usuario.