# Fede Mazza - Desafío técnico FrontEnd React - Flow

Esta aplicación fue desarrollada para un Desafio de Técnico FrontEnd React – Flow.

En este desafío se plantea el desarrollo de una aplicación de consulta de clima en la que el usuario pueda visualizar el pronóstico actual y el de los próximos 5 días de la ciudad en la que se encuentra, y, a su vez, un selector que permita cambiar entre 5 ciudades preseleccionadas.

* El desafío fue resuelto en React.js,
* Se utilizó el servicio de API de [Open Weather Map](https://openweathermap.org/),
* Se utilizó Geolocalización,
* Se creó un selector con 5 ciudades para mostrar,
* Se realizaron tests unitarios con Vitest,
* El código se alojó en un repositorio público de GitHub,
* Se puede ver la progresión del desarrollo en el historial de commits de este repositorio,
* Se dio un estilo simple, incluido responsive.
* La aplicación está alojada en Vercel.

## :hammer: Tools

* React
* Vite
* Tailwind
* Vitest

## :airplane: Como levantar el proyecto

Se puede clonar el repositorio, instalar las dependecias y correrlo

```
git clone git@github.com:fedeferrelli/flow.git
cd flow 
npm install && npm run dev
```
> En este caso debe tenerse en cuenta que se requiere una APIKEY de Open Weather Map para lo cual se deberá [crear una cuenta](https://home.openweathermap.org/users/sign_in) y acceder a la sección para [generar una APIKEY](https://home.openweathermap.org/api_keys). 

Una vez obtenida la APIKEY, seguir las indicaciones del archivo .env.example 

Alternativamente se puede acceder al demo en siguiente [link](https://flow-fedeferrelli.vercel.app/)

## :milky_way: Desarrollo

### 1.Llamado a la API de Open Weather Map

Bajo la lógica de separación de responsabilidades, la llamada a Open Weather Map se realizó en un fichero separado ([api.jsx](https://github.com/fedeferrelli/flow/blob/main/src/api.jsx)). Se generó una función cuyo método hace el llamado (vía fetch) y gestiona la data recibida para procesarla y retornar la información lista para usar en el resto de la aplicación. La APIKEY esta resguardada en una variable de entorno.

### 2.Geolocalización

Al cargar la aplicación se dispara una función para geolocalizar la ubicación del usuario y se captura la latitud y longitud. Con estos datos se golpea a la api y se muestran los datos del clima.

### 3.Selector - Opciones de Ciudades

Además de ‘Tu ubicación’ el usuario puede acceder a otras 5 ciudades (Barcelona, Buenos Aires, Córdoba, Mar del Plata y Necochea) a través de un Selector ([Selector.jsx](https://github.com/fedeferrelli/flow/blob/main/src/Components/Selector.jsx)). Este selector está construido de manera que, al desplegar las opciones, en primer lugar figure la ciudad que actualmente se está mostrando y, luego, el resto de las ciudades ordenadas alfabéticamente para tener mejor experiencia de usuario.

### 4.Sobre el Clima

Se puede acceder a las condiciones climáticas de cada una de las 5 ciudades preseleccionadas más la ubicación actual:

* fecha,
* temperatura actual,
* temperatura máxima,
* temperatura mínima y
* condiciones (lluvioso, nuboso, etc).

Las condiciones climáticas por cada ciudad pueden verse para el día actual y los próximos 5 días (6 días en total).

Las condiciones actuales se muestran con el componente [CurrentWeather](https://github.com/fedeferrelli/flow/blob/main/src/Components/CurrentWeather.jsx) mientas que el pronóstico de los próximos 5 días se muestran con el componente [Forecast](https://github.com/fedeferrelli/flow/blob/main/src/Components/Forecast.jsx) (el clima de los próximos dos días se muestran como “mañana” y “pasado mañana” para mejorar la experiencia de usuario).

### 5.Loading Component

Para mejorar la experiencia de usuario se creó un componente Loading ([Loading.jsx](https://github.com/fedeferrelli/flow/blob/main/src/Components/Loading.jsx)) para dar feedback al usuario al notificarle que la aplicación está cargando los datos de la ciudad elegida.

## :rainbow: Estilo

Para los estilos se utilizó Tailwind bajo la lógica de mobile-first. Se le dio mayor preponderancia a los datos de día actual y luego, en un orden inferior de preponderancia, al resto de los días. El diseño se ajusta hasta pantallas de 1280*768.

## :heavy_check_mark: Tests

Se realizaron 16 tests de 3 funciones diferentes en tres componentes distintos ([api.test.ts.jsx](https://github.com/fedeferrelli/flow/blob/main/src/api.test.ts), [Selector.test.ts](https://github.com/fedeferrelli/flow/blob/main/src/Components/Selector.test.ts) y [Forecast.test.ts](https://github.com/fedeferrelli/flow/blob/main/src/Components/Forecast.test.ts)). Los tests se realizaron con Vitest, que trabaja con Jest de fondo. Todos los tests pasaron las pruebas.

Para correr los test:

```
npm test
```
## :triangular_flag_on_post: Configuración de Lint

Se configuró esLint ([eslintrc.cjs](https://github.com/fedeferrelli/flow/blob/main/.eslintrc.cjs)) de acuerdo al style-guide Standard más algunas reglas adicionales tales como:

* semi: always
* react/prop-types: off
* ordenar los imports por grupos
* newlines between: always
* sort de props
* padding line between statements
