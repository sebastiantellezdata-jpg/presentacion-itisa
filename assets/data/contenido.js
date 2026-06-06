/* ══════════════════════════════════════════════════════════════════════
   CONTENIDO.JS — Datos editables de GRUPO ITISA · Presentación Ejecutiva
   ══════════════════════════════════════════════════════════════════════

   ┌─────────────────────────────────────────────────────────────────┐
   │  CÓMO EDITAR ESTE ARCHIVO                                       │
   │                                                                 │
   │  1. Abre este archivo en cualquier editor de texto.             │
   │  2. Modifica los valores entre comillas '...' o "...".          │
   │  3. NO cambies los nombres de las variables (mayúsculas).       │
   │  4. Guarda y recarga el navegador para ver los cambios.         │
   │                                                                 │
   │  Secciones:                                                     │
   │    A. EMPRESA        — nombre, contacto, año de fundación       │
   │    B. PLANTS         — centros de producción en el mapa         │
   │    C. PORT_PROJECTS  — proyectos por unidad de negocio          │
   │    D. PORT_TIERS     — clasificación de proyectos en tiers      │
   │    E. MEDIOS         — rutas de fotos y videos (próximamente)   │
   └─────────────────────────────────────────────────────────────────┘
══════════════════════════════════════════════════════════════════════ */


/* ══════════════════════════════════════════════════════════════════════
   A. DATOS DE LA EMPRESA
   ══════════════════════════════════════════════════════════════════════
   Edita aquí el nombre, contacto y año de fundación del grupo.
   Estos valores se usan en el slide de Contacto y pie de página.      */

var EMPRESA = {
  nombre:       'GRUPO ITISA',
  fundacion:    '1948',                        // Año de fundación
  sitio:        'https://www.itisa.com.mx/',
  email:        'contacto@grupoitisa.com.mx',
  telefono:     '+52 (55) 1234-5678',
  ciudad:       'Ciudad de México, México',
  descripcion:  '75 años construyendo la infraestructura de México',
};


/* ══════════════════════════════════════════════════════════════════════
   B. PLANTAS / CENTROS DE PRODUCCIÓN
   ══════════════════════════════════════════════════════════════════════
   Cada clave (ci_bc, ci_son, etc.) es un pin en el mapa interactivo.

   Campos:
     state      — código de estado SVG (bcn, son, nle, nay, mex, tla…)
     name       — nombre del estado
     city       — ciudad de la planta
     type       — 'fixed' (permanente) | 'mobile' (temporal/proyectos)
     tipo       — etiqueta visible: 'Fijo' | 'Móvil'
     productos  — array de unidades que operan: 'Prefabricados', 'TUMEX',
                  'Durmientes', 'Vías Férreas'
     mensual    — capacidad mensual (texto, ej: '9,500 m³' o '—')
     anual      — capacidad anual  (texto, ej: '114,000 m³' o '—')
     kick       — etiqueta de encabezado en la tarjeta del mapa
     prodLabel  — descripción corta de producción en la tarjeta

   Posición en el mapa:
     Si la planta tiene coordenadas absolutas en el SVG usa absX/absY.
     Si no, usa rx/ry (fracción del bounding-box del estado: 0.0–1.0).   */

var PLANTS = {

  ci_bc: {
    state: 'bcn',
    name:  'Baja California',
    city:  'Tijuana',
    absX:  59,   absY: 25,          // coordenadas absolutas en el SVG del mapa
    type:  'mobile',
    tipo:  'Móvil',
    productos:  ['Prefabricados'],
    kick:       'ITISA',
    prodLabel:  'Producción de Estructura Prefabricada',
    mensual:    '7,500 m³',
    anual:      '90,000 m³',
  },

  ci_son: {
    state: 'son',
    name:  'Sonora',
    city:  'Nogales',
    absX:  196,  absY: 57,
    type:  'mobile',
    tipo:  'Móvil',
    productos:  ['Prefabricados'],
    kick:       'ITISA',
    prodLabel:  'Producción de Estructura Prefabricada',
    mensual:    '2,500 m³',
    anual:      '30,000 m³',
  },

  ci_nle: {
    state: 'nle',
    name:  'Nuevo León',
    city:  'Cadereyta',
    rx: 0.52, ry: 0.48,             // posición relativa dentro del estado
    type:  'mobile',
    tipo:  'Móvil',
    productos:  ['Prefabricados'],
    kick:       'ITISA',
    prodLabel:  'Producción de Estructura Prefabricada',
    mensual:    '5,500 m³',
    anual:      '66,000 m³',
  },

  ci_nay: {
    state: 'nay',
    name:  'Nayarit',
    city:  'Tepic',
    rx: 0.48, ry: 0.48,
    type:  'mobile',
    tipo:  'Móvil',
    productos:  ['Prefabricados'],
    kick:       'ITISA',
    prodLabel:  'Producción de Estructura Prefabricada',
    mensual:    '—',
    anual:      '—',
  },

  ci_mex: {
    state:     'mex',
    name:      'Estado de México',
    city:      'Tecamac',
    rx: 0.64, ry: 0.22,
    type:      'fixed',
    tipo:      'Fijo',
    productos: ['Prefabricados', 'TUMEX'],
    labelDir:  'left',              // etiqueta hacia la izquierda del pin
    kick:      'ITISA',
    prodLabel: 'Producción de Estructura Prefabricada',
    mensual:   '9,500 m³',
    anual:     '114,000 m³',
  },

  ci_tla: {
    state:     'tla',
    name:      'Tlaxcala',
    city:      'Panzacola',
    rx: 0.50, ry: 0.50,
    type:      'fixed',
    tipo:      'Fijo',
    productos: ['Prefabricados', 'Durmientes'],
    labelDir:  'right',
    kick:      'ITISA',
    prodLabel: 'Producción de Estructura Prefabricada',
    mensual:   '—',
    anual:     '—',
  },

  /* ── Para agregar una nueva planta, copia un bloque de arriba
     y cambia la clave (ci_XXX) y los valores. ────────────────── */

};


/* ══════════════════════════════════════════════════════════════════════
   C. PROYECTOS POR UNIDAD DE NEGOCIO
   ══════════════════════════════════════════════════════════════════════
   Cada unidad tiene su propio array de proyectos.
   Unidades disponibles:  pf (Prefabricados) · dur (Durmientes)
                          vf (Vías Férreas)  · tx  (TUMEX)

   Campos por proyecto:
     title   — nombre del proyecto
     client  — cliente / contratante
     year    — año de ejecución
     loc     — ubicación geográfica
     desc    — descripción de 1-2 líneas (se muestra en el detalle)
     specs   — array de pares [['Etiqueta', 'Valor'], ...]
               máximo 4 pares recomendado                              */

var PORT_PROJECTS = {

  /* ── PREFABRICADOS ─────────────────────────────────────────────── */
  pf: [
    {
      title:  'Viaducto Bicentenario',
      client: 'SCT',
      year:   '2021',
      loc:    'Estado de México',
      desc:   'Estructura prefabricada para viaducto urbano de alta capacidad con trabes preesforzadas de gran longitud.',
      specs: [
        ['Tipo',       'Trabes preesforzadas'],
        ['Longitud',   '18 km'],
        ['Capacidad',  '50,000 veh/día'],
        ['Concreto',   'F\'c 45 MPa'],
      ],
    },
    {
      title:  'Estadio Akron',
      client: 'GNP / Grupo Omnilife',
      year:   '2020',
      loc:    'Guadalajara, Jal.',
      desc:   'Elementos prefabricados para cubierta y estructura de tribuna del Estadio Akron.',
      specs: [
        ['Tipo',        'Losas + Vigas'],
        ['Capacidad',   '49,850 esp.'],
        ['Superficie',  '35,000 m²'],
        ['Norma',       'NMX-C-155'],
      ],
    },
    {
      title:  'Hospital PEMEX Veracruz',
      client: 'PEMEX',
      year:   '2021',
      loc:    'Veracruz',
      desc:   'Paneles y elementos estructurales prefabricados para hospital de especialidades PEMEX.',
      specs: [
        ['Tipo',         'Muros + Losas'],
        ['Área',         '22,000 m²'],
        ['Zona sísmica', 'III'],
        ['Certif.',      'ISO 9001'],
      ],
    },
    {
      title:  'Torre Virreyes',
      client: 'PINFRA',
      year:   '2018',
      loc:    'CDMX',
      desc:   'Elementos de fachada y estructura prefabricada para edificio corporativo de altura en Paseo de la Reforma.',
      specs: [
        ['Tipo',      'Fachada prefab.'],
        ['Pisos',     '32'],
        ['Área',      '45,000 m²'],
        ['Material',  'Concreto arquitectónico'],
      ],
    },
    {
      title:  'Parque Industrial MTY',
      client: 'DESC',
      year:   '2022',
      loc:    'Monterrey, NL',
      desc:   'Naves industriales prefabricadas de gran claro para parque industrial de clase mundial.',
      specs: [
        ['Tipo',        'Nave industrial'],
        ['Claro libre', '24 m'],
        ['Área',        '120,000 m²'],
        ['Sistema',     'Marco rígido'],
      ],
    },
    {
      title:  'Bodega Logística FEMSA',
      client: 'FEMSA',
      year:   '2023',
      loc:    'Tlalnepantla, EdoMex',
      desc:   'Centro de distribución logística con estructura prefabricada de alta eficiencia.',
      specs: [
        ['Tipo',            'Centro distribución'],
        ['Palet positions', '80,000'],
        ['Área',            '55,000 m²'],
        ['ISO',             '9001·14001'],
      ],
    },
  ],

  /* ── DURMIENTES ────────────────────────────────────────────────── */
  dur: [
    {
      title:  'Tren Maya — Durmientes',
      client: 'FONATUR',
      year:   '2023',
      loc:    'Península de Yucatán',
      desc:   'Fabricación e instalación de durmientes de concreto preesforzado para el Tren Maya, tramos 4 y 7.',
      specs: [
        ['Cantidad',  '>5M durmientes'],
        ['Tramos',    '4 y 7'],
        ['Norma',     'AREMA'],
        ['Concreto',  'F\'c 50 MPa'],
      ],
    },
    {
      title:  'CPKC Red Norte',
      client: 'CPKC',
      year:   '2022',
      loc:    'Corredor norte-centro',
      desc:   'Reposición masiva de durmientes para mantenimiento y modernización de líneas CPKC.',
      specs: [
        ['Cantidad',  '1.2M durmientes'],
        ['Longitud',  '800 km'],
        ['Tipo',      'Monobloque'],
        ['Norma',     'AREMA 1-2'],
      ],
    },
    {
      title:  'Ferromex Corredor',
      client: 'Ferromex',
      year:   '2021',
      loc:    'Jalisco – Nayarit',
      desc:   'Durmientes para rehabilitación de vía en corredor Ferromex occidente.',
      specs: [
        ['Cantidad',  '600K durmientes'],
        ['Tipo',      'Biacodo'],
        ['Trocha',    '1,435 mm'],
        ['Servicio',  'Carga pesada'],
      ],
    },
    {
      title:  'Ferrosur Red Sur',
      client: 'Ferrosur',
      year:   '2020',
      loc:    'Oaxaca – Veracruz',
      desc:   'Proyecto de mantenimiento preventivo con durmientes de hormigón preesforzado en red Ferrosur.',
      specs: [
        ['Cantidad',   '400K durmientes'],
        ['Tipo',       'Monobloque'],
        ['Norma',      'AREMA'],
        ['V. diseño',  '130 km/h'],
      ],
    },
    {
      title:  'Exportación LATAM',
      client: 'Colombia · Chile',
      year:   '2019',
      loc:    'Colombia · Chile',
      desc:   'Exportación de durmientes certificados a proyectos ferroviarios en Colombia y Chile.',
      specs: [
        ['Destinos',  '2 países'],
        ['Cantidad',  '200K durmientes'],
        ['Tipo',      'Monobloque'],
        ['Certif.',   'INVIAS · EFE'],
      ],
    },
  ],

  /* ── VÍAS FÉRREAS ──────────────────────────────────────────────── */
  vf: [
    {
      title:  'Tren Maya Tramo 4',
      client: 'FONATUR',
      year:   '2023',
      loc:    'Quintana Roo',
      desc:   'Instalación de vías férreas para el Tramo 4 del Tren Maya, incluyendo obra civil y señalización.',
      specs: [
        ['Longitud',   '170 km'],
        ['Tipo vía',   'Balastada + Placa'],
        ['V. diseño',  '160 km/h'],
        ['Norma',      'UIC'],
      ],
    },
    {
      title:  'CPKC Corredor Norte',
      client: 'CPKC',
      year:   '2022',
      loc:    'MTY – Cd. Juárez',
      desc:   'Rehabilitación y construcción de infraestructura ferroviaria en corredor norte CPKC.',
      specs: [
        ['Longitud',   '450 km'],
        ['Tipo',       'Carga pesada'],
        ['Carga máx.', '286,000 lb'],
        ['Norma',      'AREMA'],
      ],
    },
    {
      title:  'Tren Maya Tramo 7',
      client: 'SEDENA',
      year:   '2024',
      loc:    'Yucatán',
      desc:   'Construcción de infraestructura ferroviaria para el Tramo 7 del Tren Maya en proceso.',
      specs: [
        ['Longitud', '230 km'],
        ['Tipo',     'Mixto pasaj./carga'],
        ['Puentes',  '8 estructuras'],
        ['Estado',   'En proceso'],
      ],
    },
    {
      title:  'Ferromex Occidente',
      client: 'Ferromex',
      year:   '2021',
      loc:    'Jal. – Nay.',
      desc:   'Renovación total de infraestructura de vía y subestructura ferroviaria en corredor occidente.',
      specs: [
        ['Longitud',   '200 km'],
        ['Tipo',       'Renovación total'],
        ['Traviesas',  '1.2M pzas'],
        ['Norma',      'AREMA 4'],
      ],
    },
    {
      title:  '19 Puentes Ferroviarios',
      client: 'SCT / Varios',
      year:   '2020',
      loc:    'Nacional',
      desc:   'Diseño y construcción de 19 puentes ferroviarios en distintas regiones del país.',
      specs: [
        ['Cantidad',    '19 puentes'],
        ['Tipo',        'Concreto / Mixtos'],
        ['Claro máx.',  '90 m'],
        ['Carga',       'Cooper E-80'],
      ],
    },
  ],

  /* ── TUMEX ─────────────────────────────────────────────────────── */
  tx: [
    {
      title:  'Agua Saludable La Laguna',
      client: 'SIIAO / CONAGUA',
      year:   '2023',
      loc:    'Torreón, Coah.',
      desc:   'Tubería de acero de gran diámetro para el acueducto Agua Saludable para La Laguna, proyecto estratégico nacional.',
      specs: [
        ['Diámetro',  '138"'],
        ['Longitud',  '360 km'],
        ['Presión',   '24 kg/cm²'],
        ['Recub.',    'Epoxi + Polietileno'],
      ],
    },
    {
      title:  'Acueducto TJ–Valle Guadalupe',
      client: 'CESPT / IBWC',
      year:   '2023',
      loc:    'Tijuana, BC',
      desc:   'Tubería SAW para acueducto internacional Tijuana–Valle de Guadalupe.',
      specs: [
        ['Diámetro',  '48"'],
        ['Longitud',  '68 km'],
        ['Norma',     'AWWA C-200'],
        ['Certif.',   'API Q1+5L'],
      ],
    },
    {
      title:  'Acueducto Monterrey VI',
      client: 'SADM',
      year:   '2022',
      loc:    'Monterrey, NL',
      desc:   'Línea de conducción de agua potable para la zona metropolitana de Monterrey.',
      specs: [
        ['Diámetro',  '96"'],
        ['Longitud',  '180 km'],
        ['Flujo',     '12 m³/s'],
        ['Recub.',    'Epoxi fusion bond'],
      ],
    },
    {
      title:  'PEMEX Línea Hidráulica',
      client: 'PEMEX',
      year:   '2021',
      loc:    'Tabasco – Veracruz',
      desc:   'Tubería para sistema de transporte de hidrocarburo en zona sur PEMEX.',
      specs: [
        ['Diámetro',  '30"'],
        ['Longitud',  '95 km'],
        ['Presión',   '175 PSI'],
        ['Certif.',   'API 5L PSL2'],
      ],
    },
    {
      title:  'Sistema Hidráulico CDMX',
      client: 'SACMEX',
      year:   '2020',
      loc:    'Ciudad de México',
      desc:   'Rehabilitación del sistema de conducción de agua potable en zona metropolitana de CDMX.',
      specs: [
        ['Diámetro',  '72"'],
        ['Longitud',  '42 km'],
        ['Norma',     'NOM-001-SESH'],
        ['Recub.',    'Polietileno'],
      ],
    },
    {
      title:  'Gasoducto Industrial NL',
      client: 'SENER / CFE',
      year:   '2019',
      loc:    'Nuevo León',
      desc:   'Tubería para conducción de gas natural en corredor industrial del norte del país.',
      specs: [
        ['Diámetro',  '36"'],
        ['Longitud',  '120 km'],
        ['Presión',   '1,440 PSI'],
        ['Certif.',   'API 5L X-70'],
      ],
    },
  ],

  /* ── Para agregar un proyecto nuevo, copia uno de los bloques
     anteriores al array correcto (pf, dur, vf o tx) y edita
     sus valores. Los cambios se reflejan automáticamente en los
     carruseles y en el slide de detalle. ─────────────────────── */
};


/* ══════════════════════════════════════════════════════════════════════
   D. CLASIFICACIÓN DE PROYECTOS POR TIERS
   ══════════════════════════════════════════════════════════════════════
   Define qué proyectos van en cada fila del carrusel de portafolio.
   Los números son el ÍNDICE del proyecto en el array PORT_PROJECTS.
   (El primer proyecto tiene índice 0, el segundo 1, y así sucesivamente.)

   tier1 → Proyectos Insignia        (mayor impacto, fila superior)
   tier2 → Proyectos Representativos (referencias técnicas clave)
   tier3 → Proyectos Complementarios (cartera diversificada)

   IMPORTANTE: Si agregas un proyecto nuevo al final de PORT_PROJECTS,
   agrégalo también aquí con su nuevo índice.                          */

var PORT_TIERS = {

  pf: {
    tier1: [0, 1],       // Viaducto Bicentenario · Estadio Akron
    tier2: [2, 3, 4],    // Hospital PEMEX · Torre Virreyes · Parque Industrial MTY
    tier3: [5],          // Bodega Logística FEMSA
  },

  dur: {
    tier1: [0, 1],       // Tren Maya · CPKC Red Norte
    tier2: [2, 3],       // Ferromex Corredor · Ferrosur Red Sur
    tier3: [4],          // Exportación LATAM
  },

  vf: {
    tier1: [0, 2],       // Tren Maya Tramo 4 · Tren Maya Tramo 7
    tier2: [1, 3],       // CPKC Corredor Norte · Ferromex Occidente
    tier3: [4],          // 19 Puentes Ferroviarios
  },

  tx: {
    tier1: [0, 2],       // Agua Saludable La Laguna · Acueducto Monterrey VI
    tier2: [1, 3],       // Acueducto TJ–Valle Guadalupe · PEMEX Línea Hidráulica
    tier3: [4, 5],       // Sistema Hidráulico CDMX · Gasoducto Industrial NL
  },

};


/* ══════════════════════════════════════════════════════════════════════
   E. MEDIOS — Fotos y videos (estructura lista para conectar)
   ══════════════════════════════════════════════════════════════════════
   Coloca tus archivos en las carpetas indicadas y actualiza las rutas.
   Formatos soportados: jpg, jpeg, png, webp (fotos) · mp4, webm (video)

   Estructura de carpetas recomendada:
     assets/
       fotos/
         portada/          ← foto principal de portada (p_cov)
         tumex/            ← fotos planta TUMEX
         prefabricados/    ← fotos planta Prefabricados
         durmientes/       ← fotos planta Durmientes
         vias-ferreas/     ← fotos planta Vías Férreas
         proyectos/        ← fotos por proyecto (nombre-del-proyecto.jpg)
       videos/
         portada/          ← video de fondo opcional para portada
         plantas/          ← recorridos de planta                        */

var MEDIOS = {

  /* ════════════════════════════════════════════════════════════════
     CÓMO USAR ESTA SECCIÓN
     ════════════════════════════════════════════════════════════════
     1. Copia tus fotos a la carpeta assets/fotos/ del proyecto.
     2. Escribe la ruta relativa como valor de cada clave.
     3. Deja la cadena vacía '' para mantener el placeholder azul.

     Ejemplo:
       portada: 'assets/fotos/portada/planta-tecamac.jpg',
       bg_quienes: 'assets/fotos/corporativo/obra-aerea.jpg',

     Rutas relativas al index.html (raíz del proyecto).
     Formatos soportados: jpg · jpeg · png · webp
     ════════════════════════════════════════════════════════════════ */

  /* ── PORTADAS ───────────────────────────────────────────────────
     Foto de fondo del panel derecho en cada portada               */
  portada:          '',   // Portada principal  (id: cov-bg)
  portada_prefab:   '',   // Portada Prefabricados  (id: cov-bg-pf)
  portada_dur:      '',   // Portada Durmientes     (id: cov-bg-dur)
  portada_vf:       '',   // Portada Vías Férreas   (id: cov-bg-vf)
  portada_tx:       '',   // Portada TUMEX          (id: cov-bg-tx)

  /* ── FONDOS CON OVERLAY ─────────────────────────────────────────
     Foto a sangre con degradado sobre ella                        */
  bg_quienes:       '',   // ¿Quiénes Somos? — fondo completo  (id: bg1)
  bg_vision:        '',   // Visión Industrial — foto derecha   (id: bg_qs)
  bg_proyectos:     '',   // Proyectos Icónicos — fondo         (id: bg3)

  bg_pf_productos:  '',   // Prefabricados · Productos y Servicios  (id: bg_pf_ps)
  bg_pf_cap:        '',   // Prefabricados · Capacidades            (id: bg_pf_cap)

  bg_dur_productos: '',   // Durmientes · Productos y Servicios     (id: bg_dur_ps)
  bg_dur_cap:       '',   // Durmientes · Capacidades               (id: bg_dur_cap)

  bg_vf_productos:  '',   // Vías Férreas · Productos y Servicios   (id: bg_vf_ps)
  bg_vf_cap:        '',   // Vías Férreas · Capacidades             (id: bg_vf_cap)

  bg_tx_productos:  '',   // TUMEX · Productos página 1             (id: bg_tx1)
  bg_tx_cap:        '',   // TUMEX · Capacidades                    (id: bg_tx3)

  /* ── VIDEO DE PORTADA (opcional) ────────────────────────────────
     Si se define, reemplaza la foto de portada principal con video.
     Formatos: mp4 · webm
     Ejemplo: 'assets/videos/planta-overview.mp4'                  */
  video_portada: '',

  /* ── FOTOS DE PROYECTOS ─────────────────────────────────────────
     Se muestran en las tarjetas del carrusel y en el slide detalle.
     La clave debe coincidir exactamente con el `title` del proyecto
     en PORT_PROJECTS (sensible a mayúsculas).
     Ejemplo: 'Viaducto Bicentenario': 'assets/fotos/proyectos/viaducto.jpg' */
  proyectos: {
    // PREFABRICADOS
    'Viaducto Bicentenario':    '',
    'Estadio Akron':            '',
    'Hospital PEMEX Veracruz':  '',
    'Torre Virreyes':           '',
    'Parque Industrial MTY':    '',
    'Bodega Logística FEMSA':   '',
    // DURMIENTES
    'Tren Maya — Durmientes':   '',
    'CPKC Red Norte':           '',
    'Ferromex Corredor':        '',
    'Ferrosur Red Sur':         '',
    'Exportación LATAM':        '',
    // VÍAS FÉRREAS
    'Tren Maya Tramo 4':        '',
    'CPKC Corredor Norte':      '',
    'Tren Maya Tramo 7':        '',
    'Ferromex Occidente':       '',
    '19 Puentes Ferroviarios':  '',
    // TUMEX
    'Agua Saludable La Laguna': '',
    'Acueducto TJ–Valle Guadalupe': '',
    'Acueducto Monterrey VI':   '',
    'PEMEX Línea Hidráulica':   '',
    'Sistema Hidráulico CDMX':  '',
    'Gasoducto Industrial NL':  '',
  },

};


/* ══════════════════════════════════════════════════════════════════════
   F. GALERÍA — Fotos y video del slide dedicado
   ══════════════════════════════════════════════════════════════════════
   Estas imágenes aparecen en el slide "Galería" (id: p_galeria).

   Cada item de GALERIA_FOTOS tiene:
     src   — ruta relativa a la imagen (ej: 'assets/fotos/galeria/planta.jpg')
     cap   — pie de foto (texto corto, aparece en el lightbox)
     unidad — etiqueta de filtro: 'Prefabricados' | 'Durmientes' |
               'Vías Férreas' | 'TUMEX' | 'Corporativo'

   Puedes agregar todos los items que quieras.
   Las fotos vacías (src:'') se muestran como placeholder clicable.    */

var GALERIA_FOTOS = [
  { src:'', cap:'Planta Tecamac · Estado de México',  unidad:'Prefabricados' },
  { src:'', cap:'Línea de producción TUMEX',           unidad:'TUMEX'         },
  { src:'', cap:'Instalación Tren Maya · Tramo 4',     unidad:'Vías Férreas'  },
  { src:'', cap:'Durmientes AREMA · Planta Tlaxcala',  unidad:'Durmientes'    },
  { src:'', cap:'Acueducto Agua Saludable',             unidad:'TUMEX'         },
  { src:'', cap:'Viaducto Bicentenario · Edomex',      unidad:'Prefabricados' },
  { src:'', cap:'Fabricación durmientes UIC 60',        unidad:'Durmientes'    },
  { src:'', cap:'CPKC Corredor Norte',                  unidad:'Vías Férreas'  },
  /* Agrega más items copiando el patrón anterior */
];

/* Video principal de la galería (pestaña "Video")
   Puede ser un archivo local o una URL de YouTube / Vimeo embed.
   Ejemplos:
     local:   'assets/videos/recorrido-planta.mp4'
     YouTube: 'https://www.youtube.com/embed/XXXXXXXXX'
     Vimeo:   'https://player.vimeo.com/video/XXXXXXXXX'          */
var GALERIA_VIDEO = {
  src:    '',                        // URL o ruta del video
  titulo: 'GRUPO ITISA · 2024',
  desc:   'Recorrido por nuestras instalaciones y proyectos',
};

/* Videos adicionales (aparecen como miniaturas en la lista lateral) */
var GALERIA_VIDEOS_EXTRA = [
  /* { src:'', thumb:'', titulo:'Tren Maya · Tramo 7' }, */
];

/* Exportar */
if (typeof window !== 'undefined') {
  window.CONTENIDO_GALERIA_FOTOS        = GALERIA_FOTOS;
  window.CONTENIDO_GALERIA_VIDEO        = GALERIA_VIDEO;
  window.CONTENIDO_GALERIA_VIDEOS_EXTRA = GALERIA_VIDEOS_EXTRA;
}

/* Exportar al scope global para que presentacion.js los consuma */
if (typeof window !== 'undefined') {
  window.CONTENIDO_EMPRESA    = EMPRESA;
  window.CONTENIDO_PLANTS     = PLANTS;
  window.CONTENIDO_PROJECTS   = PORT_PROJECTS;
  window.CONTENIDO_TIERS      = PORT_TIERS;
  window.CONTENIDO_MEDIOS     = MEDIOS;
}
