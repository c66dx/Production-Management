# 🏭 Sistema de Gestión de Producción

[![Angular](https://img.shields.io/badge/Angular-18.2.2-red.svg)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.2-blue.svg)](https://www.typescriptlang.org/)
[![Angular Material](https://img.shields.io/badge/Angular%20Material-18.2.2-purple.svg)](https://material.angular.io/)
[![License](https://img.shields.io/badge/License-Private-yellow.svg)]()

Un sistema integral de gestión de producción desarrollado en Angular que permite administrar la producción diaria, inventario de materias primas, tipos de productos, turnos de empleados y generar reportes detallados.

## ✨ Características

### 🎯 Funcionalidades Principales

- **Dashboard Interactivo**: Visualización de métricas clave de producción en tiempo real
- **Gestión de Producción Diaria**: Registro y seguimiento de la producción por fecha y tipo de producto
- **Control de Inventario**: Administración de materias primas con alertas de stock mínimo
- **Gestión de Empleados**: Control de turnos y horas trabajadas
- **Tipos de Producto**: Categorización y administración de productos (Lácteos, Conservas, Repostería)
- **Sistema de Reportes**: Generación de informes detallados de producción e inventario
- **Interfaz Responsiva**: Diseño adaptable utilizando Angular Material

### 🔧 Características Técnicas

- **Arquitectura Modular**: Estructura organizada por módulos funcionales
- **Lazy Loading**: Carga bajo demanda para optimizar el rendimiento
- **Server-Side Rendering (SSR)**: Soporte para renderizado del lado del servidor
- **Formularios Reactivos**: Validación robusta de datos
- **Servicios RESTful**: Comunicación con API backend
- **Componentes Reutilizables**: Biblioteca de componentes compartidos

## 🛠 Tecnologías

### Frontend
- **Angular 18.2.2** - Framework principal
- **TypeScript 5.5.2** - Lenguaje de programación
- **Angular Material 18.2.2** - Biblioteca de componentes UI
- **RxJS 7.8** - Programación reactiva
- **Angular CDK** - Kit de desarrollo de componentes

### Backend/Datos
- **JSON Server** - Servidor de desarrollo para API REST
- **Express.js** - Servidor para SSR

### Herramientas de Desarrollo
- **Angular CLI 18.2.2** - Herramientas de línea de comandos
- **Karma + Jasmine** - Testing framework
- **TypeScript Compiler** - Compilación de TypeScript

## 🏗 Arquitectura

```
src/
├── app/
│   ├── core/                 # Servicios principales
│   │   └── services/         # Servicios de datos
│   ├── layout/               # Componente de diseño principal
│   ├── material/             # Configuración de Angular Material
│   ├── models/               # Interfaces y modelos de datos
│   ├── modules/              # Módulos funcionales
│   │   ├── dashboard/        # Panel de control
│   │   ├── inventario/       # Gestión de inventario
│   │   ├── materias-primas/  # Administración de materias primas
│   │   ├── produccion-diaria/# Registro de producción
│   │   ├── reportes/         # Sistema de reportes
│   │   ├── shared/           # Componentes compartidos
│   │   ├── tipos-producto/   # Gestión de tipos de producto
│   │   └── turnos-empleados/ # Administración de turnos
│   └── app-routing.module.ts # Configuración de rutas
└── assets/                   # Recursos estáticos
```

## 🚀 Instalación

### Prerrequisitos

- **Node.js** (versión 18 o superior)
- **npm** (versión 8 o superior)
- **Angular CLI** (versión 18 o superior)

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/Production-Management.git
   cd Production-Management
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Instalar Angular CLI globalmente (si no está instalado)**
   ```bash
   npm install -g @angular/cli
   ```

## ⚙️ Configuración

### Variables de Entorno

El proyecto utiliza un archivo `db.json` para simular una base de datos. Asegúrate de que el archivo esté presente en la raíz del proyecto.

### Base de Datos de Desarrollo

El sistema utiliza JSON Server con los siguientes endpoints:

- `/produccion_diaria` - Registros de producción diaria
- `/tipos_producto` - Catálogo de tipos de productos
- `/materias_primas` - Inventario de materias primas
- `/turnos_empleados` - Registro de turnos de empleados

## 🎮 Uso

### Servidor de Desarrollo

```bash
# Iniciar el servidor de desarrollo
ng serve

# La aplicación estará disponible en http://localhost:4200
```

### Construcción para Producción

```bash
# Construir la aplicación
ng build

# Construir para producción
ng build --prod
```

### Servidor SSR

```bash
# Ejecutar con Server-Side Rendering
npm run serve:ssr:production-management
```

### Pruebas

```bash
# Ejecutar pruebas unitarias
ng test

# Ejecutar pruebas con cobertura
ng test --code-coverage
```

## 📦 Módulos

### 📊 Dashboard
- Visualización de métricas de producción total
- Conteo de materias primas disponibles
- Resumen de empleados en turno

### 🏭 Producción Diaria
- **Lista de Producción**: Visualización de todos los registros de producción
- **Formulario de Producción**: Registro de nueva producción con selección de:
  - Tipo de producto
  - Cantidad producida
  - Fecha de producción
  - Materias primas utilizadas

### 📦 Materias Primas
- **Lista de Materias Primas**: Inventario completo con alertas de stock
- **Formulario de Materias Primas**: Gestión de:
  - Nombre del producto
  - Cantidad disponible
  - Stock mínimo
  - Unidad de medida
  - Fechas de ingreso y vencimiento

### 👥 Turnos de Empleados
- **Lista de Turnos**: Registro de todos los turnos trabajados
- **Formulario de Turnos**: Registro de:
  - Nombre del empleado
  - Tipo de turno (Mañana, Tarde, Noche)
  - Fecha del turno
  - Horas trabajadas

### 🏷 Tipos de Producto
- **Lista de Tipos**: Catálogo de categorías de productos
- **Formulario de Tipos**: Administración de categorías:
  - Lácteos
  - Conservas
  - Repostería

### 📈 Reportes
- Generación de informes detallados
- Análisis de producción por períodos
- Reportes de consumo de materias primas

### 🔍 Inventario
- Revisión de inventario en tiempo real
- Alertas de stock bajo
- Control de fechas de vencimiento

## 🔌 API

### Endpoints Principales

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/produccion_diaria` | Obtener todos los registros de producción |
| POST | `/produccion_diaria` | Crear nuevo registro de producción |
| PUT | `/produccion_diaria/:id` | Actualizar registro de producción |
| DELETE | `/produccion_diaria/:id` | Eliminar registro de producción |
| GET | `/materias_primas` | Obtener inventario de materias primas |
| GET | `/tipos_producto` | Obtener catálogo de tipos de producto |
| GET | `/turnos_empleados` | Obtener registros de turnos |

### Modelos de Datos

#### Producción Diaria
```typescript
interface ProduccionDiaria {
  id: number;
  tipo_producto_id: number;
  cantidad_producida: number;
  fecha_produccion: Date;
  materiasPrimasUtilizadas: {
    id: number;
    nombre: string;
    cantidadUsada: number;
    unidad: string;
  }[];
}
```

#### Materia Prima
```typescript
interface MateriaPrima {
  id: string;
  nombre: string;
  cantidad: number;
  stock_minimo: number;
  unidad: string;
  fecha_ingreso?: string;
  fecha_vencimiento?: string;
}
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código

- Utilizar TypeScript estricto
- Seguir las convenciones de Angular
- Documentar componentes y servicios
- Escribir pruebas unitarias
- Utilizar Angular Material para consistencia UI

## 📄 Licencia

Este proyecto es privado y propietario. Todos los derechos reservados.

---

## 🚀 Comandos Útiles

```bash
# Desarrollo
npm start                    # Iniciar servidor de desarrollo
ng serve --open             # Iniciar y abrir en navegador
ng generate component name  # Generar nuevo componente
ng generate service name    # Generar nuevo servicio

# Testing
ng test                     # Ejecutar pruebas
ng test --watch=false      # Ejecutar pruebas una vez
ng e2e                     # Pruebas end-to-end

# Build
ng build                   # Build de desarrollo
ng build --prod           # Build de producción
ng build --aot            # Build con compilación AOT
```

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto, contacta al equipo de desarrollo.

---

**Desarrollado con ❤️ usando Angular y TypeScript**
