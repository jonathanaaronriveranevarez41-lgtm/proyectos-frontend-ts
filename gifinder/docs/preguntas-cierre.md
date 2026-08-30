got
# Preguntas de cierre EC1 F1 A1

## 1. ¿Qué función cumple Node.js en el entorno de desarrollo?
Permite ejecutar herramientas de JavaScript y utilidades de construcción (como Vite y PNPM) fuera del navegador web.

## 2. ¿Qué es PNPM y qué responsabilidad tiene?
Es el gestor de paquetes encargado de administrar e instalar las dependencias declaradas en package.json de forma eficiente.

## 3. ¿Qué problema resuelve Vite durante el desarrollo?
Ofrece un servidor local con recarga en tiempo real (HMR) y compila el código optimizado para producción.

## 4. ¿Por qué se seleccionó la plantilla Vanilla con TypeScript?
Para reforzar las bases nativas de manipulación del DOM y el tipado estático antes de utilizar frameworks complejos.

## 5. ¿Cuál es la diferencia entre pnpm install, pnpm dev y pnpm build?
`pnpm install` descarga dependencias, `pnpm dev` ejecuta el servidor de pruebas y `pnpm build` genera la versión final compilada en `dist`.

## 6. ¿Qué información contiene package.json?
Metadatos del proyecto, scripts de ejecución y la lista de dependencias necesarias.

## 7. ¿Por qué debe conservarse pnpm-lock.yaml en el repositorio?
Asegura que todos los colaboradores instalen exactamente las mismas versiones de paquetes.

## 8. ¿Por qué node_modules no debe subirse a GitHub?
Es un directorio pesado que puede regenerarse automáticamente ejecutando `pnpm install`.

## 9. ¿Cuál es la función de main.ts?
Es el punto de entrada principal donde se inicializa la lógica de la aplicación y se inyecta el HTML en el DOM.

## 10. ¿Qué ventaja ofrece separar el código en components, models, services, styles y utils?
Mantiene una arquitectura organizada, modular y escalable mediante la separación de responsabilidades.

## 11. ¿Qué diferencia existe entre el código fuente almacenado en src y los archivos generados en dist?
`src` alberga el código fuente legible de desarrollo, mientras que `dist` guarda los archivos minificados y optimizados para producción.

## 12. ¿Qué error o dificultad encontraste durante la configuración y cómo lo resolviste?
Se gestionó la navegación de carpetas dentro del entorno de la terminal y la limpieza de los componentes demo iniciales.

## 13. ¿Cómo comprobaste que el repositorio puede ejecutarse en otro equipo?
Clonando el proyecto en una ubicación alternativa, instalando paquetes con `pnpm install` y ejecutando `pnpm dev`.

## 14. ¿Qué aprendizaje de esta actividad será necesario para continuar desarrollando GIFinder?
La gestión de la estructura modular, los scripts de PNPM y la configuración inicial de Vite con TypeScript.