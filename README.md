# ✨ TaskBoard - Proyecto con React y Redux

Este proyecto es un **TaskBoard (Tablón de Tareas)** interactivo desarrollado como parte de la evaluación de la universidad. El objetivo principal es demostrar el manejo del estado global en una aplicación React utilizando **Redux** para todas las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de las tareas.

¡[Puedes ver el repositorio hosteado en GitHub aquí!](https://github.com/Zeth444/Tablon-de-Tareas)

---

## 📸 Vista Previa

¡Así es como se ve el proyecto! Se diseñó con una paleta de colores personalizada (azul profundo y amarillo brillante) para una interfaz limpia, moderna y con personalidad.

[Vista Previa del TaskBoard] https://zeth444.github.io/Tablon-de-Tareas

---

## 🚀 Características Principales

El `TaskBoard` permite a los usuarios gestionar sus tareas diarias con las siguientes funcionalidades, todas manejadas a través del store de Redux:

* **Crear Tareas:** Añade nuevas tareas a la lista.
* **Marcar como Completadas:** Las tareas se pueden marcar como completadas, lo que las tacha visualmente.
* **Eliminar Tareas:** Quita tareas de la lista.
* **Contador Global:** Un contador en la parte superior rastrea las tareas completadas (`X / Y`) en tiempo real.
* **Ordenamiento Automático:** Las tareas completadas se mueven automáticamente al final de la lista para mantener el enfoque en lo pendiente.
* **Estilo Reactivo:** La interfaz de usuario está diseñada con CSS moderno, incluyendo efectos de "brillo" (hover) y un diseño responsivo.

---

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido utilizando tecnologías web modernas:

* **Vite:** Como entorno de desarrollo local rápido y empaquetador de producción.
* **React.js:** Para la construcción de la interfaz de usuario componentizada.
* **Redux:** Para el manejo centralizado del estado global de la aplicación.
* **React-Redux:** Para conectar los componentes de React al store de Redux (`useSelector` y `useDispatch`).
* **Redux Toolkit:** Específicamente `configureStore` para una configuración simplificada del store y conexión con DevTools.
* **CSS Moderno:** Para el diseño y la personalidad de la aplicación (usando variables CSS, Flexbox y efectos de transición).

---

## 🏁 Cómo Ejecutar el Proyecto

Si deseas ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/Zeth444/Tablon-de-Tareas.git](https://github.com/Zeth444/Tablon-de-Tareas.git)
    ```

2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd Tablon-de-Tareas
    ```

3.  **Instala las dependencias:**
    (Esto descargará React, Redux, y todo lo necesario en la carpeta `node_modules`).
    ```bash
    npm install
    ```

4.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

5.  Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación en acción.

---

Desarrollado por **Zeth (Zeth444)** 👾
