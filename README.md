# API Series

Esta api sirve para obtener datos como genero, fecha de lanzamiento o fecha de finanlizacion entre otros datos

## Funcionamiento

### Obtener todas las series

Para otener todas las series debe consultar la siguiente rura:

http://localhost:3000/api/all

En esta ruta obtendra datos como titulo, fecha relevantes de la serie

### Consultar datos sobre una serie en particular

Para obtener datos sobre una serie en particular solo es necsario pasar el nombre de la serie

http://localhost:3000/api/serie/[Nombre de la Serie]

Por ejemplo:
1. http://localhost:3000/api/serie/Breaking%20Bad
2. http://localhost:3000/api/serie/Breaking

Ambos funcionaran de la misma manera trayendo el resultado mas cercano

### Contribuí con nuestra api

Realizando un pedido post a la siguiente ruta podras contribuir a nuestra cominidad

http://localhost:3000/api/serie/new/create

Ademas, deberas pasar los siguientes paramtros:

- title
- release_date (debe ser con el formato fecha YYYY/MM/DD ej. 2017/12/20)
- end_date (debe ser con el formato fecha YYYY/MM/DD ej. 2017/12/20)
