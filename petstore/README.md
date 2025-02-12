React + TypeScript + Vite

Este template proporciona una configuración mínima para usar React con Vite, incluyendo HMR (Hot Module Replacement) y algunas reglas de ESLint para mejorar la calidad del código.

🚀 Características

Configuración rápida con Vite.

Soporte para TypeScript.

Dos opciones de plugins oficiales para React:

@vitejs/plugin-react: Usa Babel para Fast Refresh.

@vitejs/plugin-react-swc: Usa SWC para Fast Refresh.

Configuración flexible de ESLint para mantener un código limpio y consistente.

📦 Instalación

Para empezar con este template, clona el repositorio e instala las dependencias:

npm install # o yarn install o pnpm install

🚀 Inicio del Proyecto

Ejecuta el servidor de desarrollo con:

npm run dev # o yarn dev o pnpm dev

Abre http://localhost:5173 en tu navegador para ver la aplicación en ejecución.

🔧 Configuración de ESLint

Si estás desarrollando una aplicación para producción, se recomienda actualizar la configuración de ESLint para habilitar reglas con verificación de tipos:

Configura la propiedad parserOptions en eslint.config.js:

export default tseslint.config({
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
},
})

Reemplaza tseslint.configs.recommended por tseslint.configs.recommendedTypeChecked o tseslint.configs.strictTypeChecked.

Opcionalmente, agrega ...tseslint.configs.stylisticTypeChecked para mejorar la coherencia del estilo.

✨ Instalación de eslint-plugin-react

Para mejorar la validación de React en ESLint, instala el plugin correspondiente:

npm install eslint-plugin-react --save-dev

Luego, actualiza eslint.config.js:

import react from 'eslint-plugin-react'

export default tseslint.config({
settings: { react: { version: '18.3' } },
plugins: {
react,
},
rules: {
...react.configs.recommended.rules,
...react.configs['jsx-runtime'].rules,
},
})

📄 Estructura del Proyecto

📂 mi-proyecto
├── 📁 src # Código fuente
│ ├── 📄 main.tsx # Punto de entrada
│ ├── 📄 App.tsx # Componente principal
│ ├── 📁 components # Componentes reutilizables
│ ├── 📁 assets # Recursos estáticos
│ ├── 📁 styles # Estilos globales
├── 📄 index.html # Archivo raíz HTML
├── 📄 tsconfig.json # Configuración de TypeScript
├── 📄 vite.config.ts # Configuración de Vite
├── 📄 package.json # Dependencias y scripts
└── 📄 README.md # Documentación

🛠️ Scripts Disponibles

npm run dev: Inicia el servidor de desarrollo.

npm run build: Genera la versión optimizada para producción.

npm run preview: Previsualiza la versión de producción.

npm run lint: Ejecuta ESLint para analizar el código.

🎯 Contribuciones

Si deseas contribuir, por favor sigue estos pasos:

Haz un fork del repositorio.

Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).

Realiza tus cambios y haz commit (git commit -m 'Añadir nueva funcionalidad').

Sube los cambios a tu fork (git push origin feature/nueva-funcionalidad).

Abre un pull request en el repositorio original.
