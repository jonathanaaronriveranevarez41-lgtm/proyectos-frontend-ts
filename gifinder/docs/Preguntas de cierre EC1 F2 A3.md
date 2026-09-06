
# Preguntas de cierre EC1 F2 A3

## 1. ¿Qué significa refactorizar una aplicación?
Refactorizar consiste en reorganizar y mejorar la estructura interna del código fuente sin alterar su comportamiento externo observable.

## 2. ¿Por qué el proyecto se dividió en módulos?
Se dividió en módulos para aplicar el principio de responsabilidad única, facilitar la escalabilidad, mejorar la mantenibilidad y reutilizar componentes de forma limpia.

## 3. ¿Cuál es la responsabilidad de main.ts?
Su función es actuar como orquestador principal: inicializar la aplicación, construir el DOM, registrar los listeners de eventos y coordinar la comunicación entre los componentes y servicios.

## 4. ¿Qué diferencias existen entre una interfaz, un tipo unión y una enumeración?
- **Interfaz (`interface`):** Define un contrato de tipo para describir la forma y estructura de un objeto.
- **Tipo Unión (`type`):** Limita el valor asignable a un conjunto específico de datos simples (ejemplo: `'g' | 'pg'`).
- **Enumeración (`enum`):** Una estructura de código ejecutable que agrupa constantes con nombres descriptivos asignados a valores.

## 5. ¿Para qué se utiliza import type?
Indica explícitamente a TypeScript que la importación se usa únicamente para la comprobación de tipos y debe ser eliminada completamente durante la transpilación a JavaScript.

## 6. ¿Dónde se aplicaron la desestructuración, spread y rest?
- **Desestructuración:** Se aplicó en `createGifCard` y `renderGifDetail` para extraer propiedades de los objetos GIF, y en `gif-detail.ts` para separar etiquetas.
- **Spread (`...`):** Se utilizó en `searchGifs` para concatenar las etiquetas al arreglo de búsqueda y para crear una copia limpia de la colección (`[...collection]`).
- **Rest (`...`):** Se usó en `gif-detail.ts` (`const [mainTag, ...secondaryTags] = tags`) para agrupar todas las etiquetas secundarias restantes.

## 7. ¿Por qué searchGifs recibe la colección como parámetro?
Para ser una función pura e independiente que no dependa del estado global del sistema, facilitando su reutilización y pruebas.

## 8. ¿Por qué findGifById puede devolver undefined?
Porque busca en el arreglo un elemento mediante su ID único y, en caso de no coincidir o no existir, el método `.find()` devuelve `undefined`. Esto exige validar la existencia antes de manipular el elemento.

## 9. ¿Qué función cumple data-gif-id?
Es un atributo de datos HTML personalizado que almacena la identificación única del GIF directamente en el botón del DOM para ser recuperado mediante eventos.

## 10. ¿Qué es la delegación de eventos?
Es una técnica de optimización que consiste en asignar un solo listener al contenedor padre (`gallery`) en lugar de añadir un listener a cada botón individualmente.

## 11. ¿Por qué el estado Loading podría no observarse?
Debido a que la consulta se realiza sobre un arreglo local en memoria, la ejecución sincrónica es tan veloz que el renderizado cambia a `Success` de manera imperceptible para el ojo humano.

## 12. ¿Qué dificultad se presentó durante la refactorización y cómo se resolvió?
Al extraer la enumeración `RequestStatus`, TypeScript marcó advertencias por reglas del compilador. Se solucionó configurando `"erasableSyntaxOnly": false` en el archivo `tsconfig.json`.