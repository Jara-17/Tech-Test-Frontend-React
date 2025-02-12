# Pepstore

Pepstore es una plantilla mínima para desarrollar aplicaciones con **React + TypeScript + Vite**, proporcionando un entorno rápido y optimizado para el desarrollo frontend.

## 🚀 Cómo levantar el proyecto

Sigue estos pasos para iniciar el proyecto en tu entorno local:

1. **Clona el repositorio**

   ```sh
   git clone https://github.com/tu-usuario/Tech-Test-Frontend-React.git
   cd pepstore
   ```

2. **Instala las dependencias**

   ```sh
   npm install  # o yarn install o pnpm install
   ```

3. **Inicia el servidor de desarrollo**

   ```sh
   npm run dev  # o yarn dev o pnpm dev
   ```

4. **Abre la aplicación en tu navegador**  
   Ve a [http://localhost:5173](http://localhost:5173) para ver la aplicación en ejecución.

## 📄 Estructura del Proyecto

La estructura del proyecto sigue la siguiente organización:

```
📂 src
├── 📁 config        # Configuración global (Axios, etc.)
│   ├── axios.config.ts
├── 📁 layouts       # Componentes de diseño principales
│   ├── AppLayout.tsx
├── 📁 pages         # Páginas de la aplicación
│   ├── AddPetView.tsx
│   ├── DashboardView.tsx
│   ├── PetDetailView.tsx
│   ├── UpdatePetView.tsx
├── 📁 shared        # Recursos compartidos
│   ├── 📁 assets   # Imágenes, íconos, etc.
│   │   ├── images
│   │   ├── react.svg
├── 📁 components    # Componentes reutilizables
│   ├── 📁 pets
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── ErrorMessage.tsx
│   │   ├── Modal.tsx
│   │   ├── Navbar.tsx
├── 📁 services      # Servicios y API calls
│   ├── PetstoreAPI.ts
├── 📁 types         # Tipos de TypeScript
│   ├── index.ts
├── 📁 utils         # Funciones y utilidades
│   ├── index.ts
├── index.css        # Estilos globales
├── main.tsx         # Punto de entrada
├── router.tsx       # Configuración de rutas
├── vite-env.d.ts    # Tipado de Vite

```

## 🛠️ Scripts Disponibles

Estos son los comandos principales para manejar el proyecto:

- **`npm run dev`**: Inicia el servidor de desarrollo.
- **`npm run build`**: Genera la versión optimizada para producción.
- **`npm run preview`**: Previsualiza la versión de producción.
- **`npm run lint`**: Ejecuta ESLint para analizar el código.

## 🎯 Contribuciones

Si deseas contribuir a **Pepstore**, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```sh
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commit:
   ```sh
   git commit -m "Añadir nueva funcionalidad"
   ```
4. Sube los cambios a tu fork:
   ```sh
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un **pull request** en el repositorio original.

---

¡Listo! Ahora tienes todo lo necesario para comenzar a trabajar con **Pepstore** 🚀
