# 🐶 Pepstore

Pepstore es una aplicación web para la gestión de mascotas, desarrollada con **React + TypeScript + Vite**. Este proyecto es el resultado de la **prueba técnica de Aitaca** y sigue una arquitectura modular para mejorar la escalabilidad y mantenibilidad del código.

## 🚀 Tecnologías utilizadas

- **Vite** para configuración rápida y desarrollo ágil.
- **React 18** con soporte para TypeScript.
- **Axios** para la gestión de peticiones HTTP.
- **React Router** para la navegación entre páginas.
- **ESLint** con reglas configuradas para mantener un código limpio y estructurado.

## 📦 Instalación

Clona este repositorio e instala las dependencias:

```bash
git clone https://github.com/tuusuario/pepstore.git
cd pepstore
npm install  # o yarn install o pnpm install
```

## 🚀 Levantar el Proyecto

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev  # o yarn dev o pnpm dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación en ejecución.

## 📄 Estructura del Proyecto

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

- `npm run dev` → Inicia el servidor de desarrollo.
- `npm run build` → Genera la versión optimizada para producción.
- `npm run preview` → Previsualiza la versión de producción.
- `npm run lint` → Ejecuta ESLint para analizar el código.

## 🎯 Contribuciones

Este repositorio ha sido desarrollado como parte de la **prueba técnica de Aitaca**, pero si deseas contribuir o revisarlo, sigue estos pasos:

1. Haz un **fork** del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m "Añadir nueva funcionalidad"`).
4. Sube los cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Abre un **pull request** en el repositorio original.
