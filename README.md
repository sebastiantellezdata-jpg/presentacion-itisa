# GRUPO ITISA — Presentación Ejecutiva

Presentación interactiva de diapositivas para GRUPO ITISA.  
Construida en HTML/CSS/JS puro — sin dependencias, funciona offline y en GitHub Pages.

---

## Estructura del proyecto

```
presentacion-itisa/
├── index.html                  ← Estructura de slides (no editar)
├── README.md                   ← Este archivo
└── assets/
    ├── data/
    │   └── contenido.js        ← ✏️  EDITAR AQUÍ: textos, proyectos, fotos
    ├── js/
    │   └── presentacion.js     ← Motor de la presentación (no editar)
    ├── css/
    │   └── estilos.css         ← Estilos visuales (no editar)
    ├── fotos/
    │   ├── portada/            ← Foto principal de cada portada
    │   ├── corporativo/        ← Fotos generales del grupo
    │   ├── galeria/            ← Fotos del slide Galería
    │   └── proyectos/          ← Una foto por proyecto
    └── videos/
        └── recorrido-planta.mp4 (ejemplo)
```

---

## Cómo editar el contenido

**Todo el contenido editable está en `assets/data/contenido.js`.**  
Abre ese archivo con cualquier editor de texto (VS Code, Notepad++, etc.) y sigue las instrucciones de cada sección.

### A · Datos de la empresa

```js
const EMPRESA = {
  nombre:    'GRUPO ITISA',
  fundacion: '1948',
  sitio:     'https://www.itisa.com.mx/',
  email:     'contacto@grupoitisa.com.mx',
  telefono:  '+52 (55) 1234-5678',
};
```

Cambia los valores entre comillas. Los cambios se reflejan en el slide de Contacto.

---

### B · Plantas en el mapa

Cada planta es un pin interactivo en el mapa de México.

```js
ci_mex: {
  city:    'Tecamac',          // ciudad que aparece en la tarjeta
  tipo:    'Fijo',             // 'Fijo' o 'Móvil'
  mensual: '9,500 m³',        // capacidad mensual
  anual:   '114,000 m³',      // capacidad anual
  productos: ['Prefabricados', 'TUMEX'],
},
```

Para **agregar una planta nueva**, copia un bloque existente, cambia la clave (`ci_XXX`) y los valores.

---

### C · Proyectos

Los proyectos están agrupados por unidad de negocio:  
`pf` (Prefabricados) · `dur` (Durmientes) · `vf` (Vías Férreas) · `tx` (TUMEX)

```js
{
  title:  'Nombre del proyecto',
  client: 'Cliente / Contratante',
  year:   '2024',
  loc:    'Ciudad, Estado',
  desc:   'Descripción de 1-2 líneas del proyecto.',
  specs: [
    ['Tipo',     'Valor'],
    ['Longitud', '100 km'],
    ['Norma',    'AREMA'],
    ['Certif.',  'ISO 9001'],
  ],
},
```

Para **agregar un proyecto nuevo**, copia el bloque al array de la unidad correspondiente (`pf`, `dur`, `vf` o `tx`) y edita sus valores. Luego actualiza `PORT_TIERS` (sección D) con su índice nuevo.

---

### D · Clasificación de proyectos (tiers)

Controla qué proyectos aparecen en cada fila del carrusel.  
Los números son el **índice** del proyecto en el array (empieza en 0).

```js
pf: {
  tier1: [0, 1],    // Proyectos Insignia (fila superior)
  tier2: [2, 3, 4], // Proyectos Representativos
  tier3: [5],       // Proyectos Complementarios
},
```

Si agregas un proyecto al final del array `pf`, su índice será el siguiente número. Agrégalo al tier que corresponda.

---

### E · Fotos y video (fondos de slides)

Coloca tus imágenes en la carpeta `assets/fotos/` y escribe la ruta en `contenido.js`:

```js
const MEDIOS = {
  portada:         'assets/fotos/portada/planta-tecamac.jpg',
  bg_quienes:      'assets/fotos/corporativo/instalaciones.jpg',
  portada_prefab:  'assets/fotos/portada/prefabricados.jpg',
  portada_dur:     'assets/fotos/portada/durmientes.jpg',
  portada_vf:      'assets/fotos/portada/vias-ferreas.jpg',
  portada_tx:      'assets/fotos/portada/tumex.jpg',
};
```

| Clave              | Slide donde aparece                        |
|--------------------|--------------------------------------------|
| `portada`          | Portada principal (panel derecho)          |
| `bg_quienes`       | ¿Quiénes Somos? — fondo a sangre           |
| `bg_vision`        | Visión Industrial — foto derecha           |
| `bg_proyectos`     | Proyectos Icónicos — fondo                 |
| `bg_pf_productos`  | Prefabricados · Productos y Servicios      |
| `bg_pf_cap`        | Prefabricados · Capacidades                |
| `bg_dur_productos` | Durmientes · Productos y Servicios         |
| `bg_dur_cap`       | Durmientes · Capacidades                   |
| `bg_vf_productos`  | Vías Férreas · Productos y Servicios       |
| `bg_vf_cap`        | Vías Férreas · Capacidades                 |
| `bg_tx_productos`  | TUMEX · Productos                          |
| `bg_tx_cap`        | TUMEX · Capacidades                        |

Deja el valor como `''` (cadena vacía) para mantener el placeholder azul.

Para **video de portada** (reemplaza la foto principal):

```js
video_portada: 'assets/videos/recorrido-planta.mp4',
```

---

### F · Galería multimedia

Las fotos del slide Galería se configuran en el array `GALERIA_FOTOS`:

```js
const GALERIA_FOTOS = [
  { src:'assets/fotos/galeria/planta.jpg', cap:'Planta Tecamac', unidad:'Prefabricados' },
  { src:'assets/fotos/galeria/tren.jpg',   cap:'Tren Maya · Tramo 4', unidad:'Vías Férreas' },
];
```

Valores válidos para `unidad`: `Prefabricados` · `Durmientes` · `Vías Férreas` · `TUMEX` · `Corporativo`

Para el **video de la galería**:

```js
const GALERIA_VIDEO = {
  src:    'https://www.youtube.com/embed/TU_VIDEO_ID',  // YouTube, Vimeo o .mp4 local
  titulo: 'GRUPO ITISA · 2024',
  desc:   'Recorrido por nuestras instalaciones',
};
```

---

## Cómo cargar el logo

1. Abre la presentación en el navegador.
2. Haz clic en el área del logo (esquina superior izquierda).
3. Selecciona el archivo `.png` o `.svg` del logo.

El logo se aplica automáticamente a todos los slides.

---

## Cómo navegar la presentación

| Acción                   | Control                          |
|--------------------------|----------------------------------|
| Siguiente slide          | → flecha derecha o clic en `→`   |
| Slide anterior           | ← flecha izquierda o clic en `←` |
| Ir a un slide específico | Clic en el punto (•) del menú    |
| Modo herramientas        | Clic en ⚙ (esquina inferior)     |
| Pantalla completa        | F11 o botón del navegador        |

---

## Publicar en GitHub Pages

1. Crea un repositorio en [github.com](https://github.com) (público o privado con Pages activo).
2. Sube todos los archivos del proyecto manteniendo la estructura de carpetas.
3. Ve a **Settings → Pages → Source → Deploy from branch → main / (root)**.
4. En 1-2 minutos tu presentación estará disponible en:  
   `https://TU-USUARIO.github.io/presentacion-itisa/`

> **Importante:** cada vez que modifiques `contenido.js` y hagas commit, GitHub Pages se actualiza automáticamente en ~1 minuto.

---

## Formatos de imagen recomendados

| Uso              | Formato  | Tamaño recomendado  |
|------------------|----------|---------------------|
| Fotos de fondo   | JPG/WEBP | 1920 × 1080 px      |
| Fotos de galería | JPG/WEBP | 1200 × 800 px       |
| Fotos de proyectos | JPG    | 800 × 600 px        |
| Logo             | PNG/SVG  | fondo transparente  |

Comprime las imágenes antes de subir para mantener la presentación rápida.  
Herramienta gratuita: [squoosh.app](https://squoosh.app)

---

## Solución de problemas

**Las fotos no cargan**  
Verifica que la ruta en `contenido.js` sea exactamente igual al nombre del archivo, incluyendo mayúsculas y extensión.  
Correcto: `'assets/fotos/galeria/Planta-Tecamac.jpg'`  
Incorrecto: `'assets/fotos/galeria/planta-tecamac.jpg'` (si el archivo tiene mayúscula)

**El slide Galería aparece vacío**  
Revisa que `GALERIA_FOTOS` tenga al menos un item con `src` no vacío.

**Los proyectos no aparecen en el carrusel**  
Verifica que los índices en `PORT_TIERS` correspondan a posiciones reales en `PORT_PROJECTS`.

**La presentación no carga en GitHub Pages**  
Asegúrate de que la rama sea `main` y que `index.html` esté en la raíz del repositorio (no dentro de una subcarpeta).

---

*GRUPO ITISA · Desde 1948 · [www.itisa.com.mx](https://www.itisa.com.mx)*
