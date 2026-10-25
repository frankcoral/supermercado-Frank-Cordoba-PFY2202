# Supermercado — Sistema de Gestión de Inventario

**Desarrollo Frontend II (PFY2202) · Duoc UC · Semana 1**  
**Actividad formativa 1:** Utilizando tecnologías avanzadas de React en sitios web.

## Descripción del proyecto

Sitio web desarrollado con **React y Vite** para representar la consulta del inventario de un supermercado. La aplicación cuenta con una página principal y dos páginas informativas, conectadas mediante **React Router**. La navegación se realiza desde un **menú inferior**, sin necesidad de recargar la página completa al cambiar de sección.

El proyecto permite consultar un inventario de ejemplo con nombre, categoría, precio, cantidad disponible y estado de stock. Se trata de una **demostración académica de consulta de inventario**: los productos están definidos localmente y, en esta versión, no hay formularios para agregarlos, editarlos o eliminarlos ni conexión a una base de datos.

## Funcionalidades principales

- **Inicio (`/`)**: presenta el supermercado y una tabla de inventario.
- **Quiénes somos (`/quienes-somos`)**: describe el supermercado y su propósito.
- **Contáctanos (`/contactanos`)**: muestra información de contacto y horario de atención ficticios, utilizados con fines académicos.
- **Navegación SPA con React Router**: permite cambiar entre páginas mediante `BrowserRouter`, `Routes`, `Route` y `NavLink`.
- **Menú inferior compartido**: permanece visible en las tres páginas y destaca la ruta activa.
- **Estados de inventario automáticos** según la cantidad de unidades:
  - `0`: **Sin stock**.
  - `1` a `5`: **Stock bajo**.
  - `6` o más: **Disponible**.
- **Precios con formato chileno**, mediante `toLocaleString('es-CL')`.
- **Diseño responsive**: en pantallas pequeñas, la tabla se puede desplazar horizontalmente para consultar todas sus columnas sin desplazar los títulos de la página.

## Tecnologías utilizadas

- HTML5, CSS3 y JavaScript (JSX).
- React 19.
- React Router DOM 7.
- Vite 8.
- ESLint para revisión estática del código.
- Git y GitHub para control de versiones y entrega.

## Estructura principal del proyecto

```text
supermercado/
├── public/
├── src/
│   ├── components/
│   │   ├── MenuInferior.jsx
│   │   └── MenuInferior.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── QuienesSomos.jsx
│   │   ├── Contactanos.jsx
│   │   └── Paginas.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

`App.jsx` define las rutas de la aplicación; `MenuInferior.jsx` implementa la navegación; `Home.jsx` contiene los datos de ejemplo y la tabla de inventario; `Paginas.css` comparte estilos entre las páginas informativas.

## Requisitos previos

Tener instalado **Node.js**, **npm** y **Git**. El proyecto se desarrolló y comprobó localmente en Windows con Node.js `v24.21.0` y npm `11.19.0`.

## Instalación y preparación del ambiente

1. Clonar el repositorio o descargar su contenido como ZIP.
2. Abrir la carpeta del proyecto en **Visual Studio Code**.
3. Abrir una terminal en la carpeta donde está `package.json`.
4. Instalar las dependencias:

```bash
npm install
```

Si Windows PowerShell bloquea `npm.ps1`, usar:

```powershell
npm.cmd install
```

No es necesario reinstalar React Router por separado: se encuentra declarado en las dependencias del proyecto.

## Ejecución local

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

En Windows PowerShell, también se puede utilizar:

```powershell
npm.cmd run dev
```

Abrir la dirección que muestra Vite, normalmente **http://localhost:5173/**.

### Cómo utilizar la aplicación

1. Ingresar a **Inicio** para consultar los productos, precios, existencias y estados de inventario.
2. Usar el menú verde inferior para visitar **Quiénes somos** y **Contáctanos**.
3. Utilizar los botones **Atrás** y **Adelante** del navegador para recorrer el historial de rutas.
4. En dispositivos móviles, desplazar horizontalmente la tabla para visualizar las columnas que no caben en pantalla.

## Validación del proyecto

### Análisis estático con ESLint

```powershell
npm.cmd run lint
```

### Compilación de producción

```powershell
npm.cmd run build
```

La versión compilada se genera en `dist/`, carpeta que no es necesario incluir en el repositorio porque está excluida mediante `.gitignore`.

### Previsualización de la compilación (opcional)

```powershell
npm.cmd run preview
```

**Resultados comprobados durante el desarrollo de Semana 1:**

- `npm.cmd run lint`: finalizó sin errores reportados.
- `npm.cmd run build`: compiló correctamente los 30 módulos.
- Navegación entre las tres rutas y funcionamiento del historial del navegador verificados manualmente.
- Menú inferior y vista móvil comprobados mediante pruebas en Chrome.
- Tabla de productos comprobada en escritorio y en vista móvil, incluyendo su desplazamiento horizontal.

## Relación con la pauta de evaluación

| Criterio | Evidencia en la implementación |
| --- | --- |
| **1. Configura la navegación usando tecnologías de React (50 puntos)** | Configuración de `BrowserRouter`, `Routes`, `Route` y `NavLink`; tres rutas navegables desde el menú inferior, con estado activo e historial funcional. |
| **2. Desarrolla un componente frontend que cumple los requerimientos (50 puntos)** | Sitio de supermercado con Home, dos páginas adicionales, tabla de inventario, estilos CSS, diseño adaptable y componentes React organizados. |


## Repositorio

[GitHub — Front-II---Semana1](https://github.com/frankcoral/supermercado-Frank-Cordoba-PFY2202.git)


## Alcance y observaciones

- Los datos del inventario están definidos como ejemplos en `src/pages/Home.jsx`.
- La información de contacto es ficticia.
- La aplicación ilustra navegación SPA y consulta de stock; no implementa todavía un CRUD, autenticación, almacenamiento persistente ni backend, funcionalidades que **no fueron solicitadas** en esta actividad formativa.

---

**Proyecto académico — Duoc UC · Desarrollo Frontend II · Semana 1**
