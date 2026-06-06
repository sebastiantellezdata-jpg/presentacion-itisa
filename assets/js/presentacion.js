/* ══════════════════════════════════════════════════
   ÍNDICE — metadata de slides (fuente única de verdad)
   Para agregar/quitar slides: modifica este array +
   el HTML del slide. Los dots y el índice se regeneran
   automáticamente.
   cat: 'corp'|'unidad'|'portafolio'|'sistema'
══════════════════════════════════════════════════ */
/* ── SLIDES_META — fuente única de orden y metadatos ──
   Orden coincide con el DOM. isChild:true = sub-item anidado en el índice.          */
const SLIDES_META = [
  { id:'p_cov',  title:'Portada',               sub:'GRUPO ITISA · Presentación Ejecutiva', cat:'sistema'    },
  { id:'p_idx',  title:'Contenido v1',           sub:'Tabla de contenido (tono claro)',       cat:'sistema'    },
  { id:'p_idx2', title:'Contenido v2',           sub:'Tabla de contenido (tono oscuro)',      cat:'sistema'    },
  /* ── Corporativo ── */
  { id:'p0',     title:'¿Quiénes Somos?',        sub:'Grupo corporativo 100% Mexicano',       cat:'corp'       },
  { id:'p7',     title:'El Grupo',                sub:'Estructura corporativa',                 cat:'corp'       },
  { id:'p8',     title:'Visión Industrial',        sub:'Un grupo de largo plazo',               cat:'corp'       },
  { id:'p1',     title:'Récords y Cifras',        sub:'Los récords de nuestras unidades',      cat:'corp'       },
  { id:'p5',     title:'75 Años de Historia',     sub:'Trayectoria e hitos del grupo',         cat:'corp'       },
  { id:'p_map',  title:'Centros de Producción',   sub:'Infraestructura industrial nacional',   cat:'corp'       },
  { id:'p18',    title:'Nuestros Clientes',        sub:'Principales clientes y alianzas',       cat:'corp'       },
  { id:'p19',    title:'Certificaciones',          sub:'Reconocimientos y certificaciones',      cat:'corp'       },
  { id:'p2',     title:'Proyectos Icónicos',       sub:'Definiendo la infraestructura de México',cat:'corp'      },
  /* ── Unidades de Negocio ── */
  /* Prefabricados — estructura tipo TUMEX */
  { id:'p9',        title:'ITISA Prefabricados',  sub:'Unidad de negocio',                    cat:'unidad'                                       },
  { id:'p10',       title:'Capacidades',          sub:'Capacidad industrial',                  cat:'unidad', isChild:true                         },
  { id:'p_pf_cif',  title:'Cifras Relevantes',    sub:'Datos operativos clave',                cat:'unidad', isChild:true                         },
  { id:'p_pf_esp',  title:'Productos y Servicios', sub:'Líneas técnicas y catálogo',           cat:'unidad', isChild:true                         },
  { id:'p_pf_prod', title:'Catálogo de Productos', sub:'Trabes · Losas · Columnas · Pilotes', cat:'unidad', isChild:true, isGrandchild:true       },
  { id:'p_pp_pf',   title:'Portafolio de Proyectos', sub:'Proyectos representativos',          cat:'unidad', isChild:true, isGrandchild:true       },
  /* Durmientes — estructura tipo TUMEX */
  { id:'p11',       title:'ITISA Durmientes',     sub:'Unidad de negocio',                    cat:'unidad'                                       },
  { id:'p12',       title:'Capacidades',          sub:'Capacidad industrial',                  cat:'unidad', isChild:true                         },
  { id:'p_dur_cif', title:'Cifras Relevantes',    sub:'Datos operativos clave',                cat:'unidad', isChild:true                         },
  { id:'p_dur_esp', title:'Productos y Servicios', sub:'Líneas técnicas y catálogo',           cat:'unidad', isChild:true                         },
  { id:'p_dur_prod',title:'Catálogo de Productos', sub:'Monobloque · Biacodo · Anclajes',     cat:'unidad', isChild:true, isGrandchild:true       },
  { id:'p_pp_dur',  title:'Portafolio de Proyectos', sub:'Proyectos representativos',          cat:'unidad', isChild:true, isGrandchild:true       },
  /* Vías Férreas — estructura tipo TUMEX */
  { id:'p13',       title:'ITISA Vías Férreas',   sub:'Unidad de negocio',                    cat:'unidad'                                       },
  { id:'p14',       title:'Capacidades',          sub:'Capacidad industrial',                  cat:'unidad', isChild:true                         },
  { id:'p_vf_cif',  title:'Cifras Relevantes',    sub:'Datos operativos clave',                cat:'unidad', isChild:true                         },
  { id:'p_vf_esp',  title:'Productos y Servicios', sub:'Líneas técnicas y servicios',          cat:'unidad', isChild:true                         },
  { id:'p_vf_prod', title:'Catálogo de Servicios', sub:'Instalación · Mantenimiento',         cat:'unidad', isChild:true, isGrandchild:true       },
  { id:'p_pp_vf',   title:'Portafolio de Proyectos', sub:'Proyectos representativos',          cat:'unidad', isChild:true, isGrandchild:true       },
  { id:'p_tx_cov',  title:'TUMEX',                     sub:'Unidad de negocio',                    cat:'unidad'                  },
  { id:'p_tx_p0',  title:'Capacidades',           sub:'Capacidad industrial de clase mundial', cat:'unidad', isChild:true  },
  { id:'p_tx_p1',  title:'Cifras Relevantes',     sub:'Escala industrial probada',             cat:'unidad', isChild:true  },
  { id:'p_tx_p2',  title:'Productos y Proyectos', sub:'Proyectos que hablan por nosotros',     cat:'unidad', isChild:true  },
  { id:'p_tx_prod', title:'Productos',            sub:'Catálogo y especificaciones',          cat:'unidad', isChild:true, isGrandchild:true },
  { id:'p_pp_tx',   title:'Portafolio de Proyectos', sub:'Proyectos hidráulicos e industriales', cat:'unidad', isChild:true, isGrandchild:true },
  /* ── Portafolio (cada unidad tiene su propio portafolio 3 tiers) ── */
  /* ── Sistema ── */
  { id:'p_galeria',      title:'Galería',           sub:'Fotos y video de instalaciones y proyectos', cat:'corp'       },
  { id:'p_proj_detail',title:'Proyecto',          sub:'Detalle del proyecto seleccionado',      cat:'sistema'    },
  { id:'p20',          title:'Contacto',          sub:'GRUPO ITISA · Información',              cat:'sistema'    },
];

/* ── ENGINE ── */
/* SL sigue el orden de SLIDES_META (no el DOM) — slides son position:absolute */
const META_ORDER = SLIDES_META.map(m => m.id);
const SL  = Array.from(document.querySelectorAll('.slide'))
  .sort((a,b) => {
    const ai = META_ORDER.indexOf(a.id), bi = META_ORDER.indexOf(b.id);
    return (ai === -1 ? 1e9 : ai) - (bi === -1 ? 1e9 : bi);
  });
const PB  = document.getElementById('pbar');
const PC  = document.getElementById('pgc');
const PV  = document.getElementById('pv');
const NX  = document.getElementById('nx');
const dotsNav = document.getElementById('dots-nav');
const N   = SL.length;
let cur   = 0, busy = false;
const D   = 420;

/* ── Generar dots dinámicamente desde los slides ── */
SL.forEach((slide, i) => {
  const meta  = SLIDES_META.find(m => m.id === slide.id) || {};
  const btn   = document.createElement('button');
  btn.className  = 'dot' + (i === 0 ? ' on' : '') + (meta.isChild ? ' dot-child' : '');
  btn.dataset.i  = i;
  if(meta.title) btn.dataset.title = meta.title;
  btn.addEventListener('click', () => goTo(i));
  dotsNav.appendChild(btn);
});
const DT = Array.from(dotsNav.querySelectorAll('.dot'));

/* ── Índice v1 — 3 columnas · fondo claro ── */
(function buildIndex() {
  const body = document.getElementById('idx-body');
  if(!body) return;

  const SYSTEM_IDS = new Set(['p_cov','p_idx','p_idx2','p_proj_detail','p20']);
  /* Excluir items hijo — Cap. y Portafolio sub-items no aparecen en el índice.
     El índice muestra SOLO los títulos principales de cada sección.      */
  const items = SLIDES_META.filter(m => !SYSTEM_IDS.has(m.id));

  const groups = [
    { key:'corp',       label:'Corporativo'         },
    { key:'unidad',     label:'Unidades de Negocio' },
    { key:'portafolio', label:'Portafolio'           },
  ];

  const contactIdx = SL.findIndex(s => s.id === 'p20');
  const contactBtn = contactIdx > -1
    ? `<button class="idx-contact" onclick="goTo(${contactIdx})">Contacto →</button>` : '';

  let cols = ''; let seq = 1;
  groups.forEach(g => {
    const grouped = items.filter(m => m.cat === g.key);
    if(!grouped.length) return;
    let itemsHtml = '';

    if(g.key === 'unidad') {
      /* Unidades: agrupar verticalmente (padre + Cap + Port) dentro de sub-columnas horizontales */
      let currentGroup = '', groups2 = '';
      grouped.forEach(m => {
        const slideIdx = SL.findIndex(s => s.id === m.id);
        if(slideIdx < 0) return;
        const num = String(seq++).padStart(2,'0');
        const item = `<button class="idx-item${m.isChild?' idx-child':''}${m.isGrandchild?' idx-grandchild':''}" onclick="goTo(${slideIdx})" aria-label="${m.title}"><span class="idx-num">${num}</span><div class="idx-info"><div class="idx-ttl">${m.title}</div><div class="idx-sub">${m.sub}</div></div></button>`;
        if(!m.isChild) {
          if(currentGroup) groups2 += `<div class="idx-unit-group">${currentGroup}</div>`;
          currentGroup = item;
        } else { currentGroup += item; }
      });
      if(currentGroup) groups2 += `<div class="idx-unit-group">${currentGroup}</div>`;
      itemsHtml = groups2;
      cols += `<div class="idx-group idx-group--unidad"><div class="idx-group-label">${g.label}</div><div class="idx-items">${itemsHtml}</div></div>`;
    } else {
      grouped.forEach(m => {
        const slideIdx = SL.findIndex(s => s.id === m.id);
        if(slideIdx < 0) return;
        const num = String(seq++).padStart(2,'0');
        itemsHtml += `<button class="idx-item" onclick="goTo(${slideIdx})" aria-label="${m.title}"><span class="idx-num">${num}</span><div class="idx-info"><div class="idx-ttl">${m.title}</div><div class="idx-sub">${m.sub}</div></div></button>`;
      });
      cols += `<div class="idx-group"><div class="idx-group-label">${g.label}</div><div class="idx-items">${itemsHtml}</div></div>`;
    }
  });

  body.innerHTML = `
    <div class="idx-header">
      <div>
        <div class="idx-eyebrow"><span class="idx-eye-line"></span>Presentación Ejecutiva</div>
        <h2 class="idx-h-title">Contenido</h2>
        <span class="idx-title-line"></span>
      </div>
      ${contactBtn}
    </div>
    <div class="idx-wrap">${cols}</div>`;
})();

/* ── Índice v2 — 3 columnas oscuro ── */
(function buildIndex2() {
  const body = document.getElementById('idx2-body');
  if(!body) return;

  const SYSTEM_IDS = new Set(['p_cov','p_idx','p_idx2','p_proj_detail','p20']);
  const items = SLIDES_META.filter(m => !SYSTEM_IDS.has(m.id));

  const groups = [
    { key:'corp',       label:'Corporativo'         },
    { key:'unidad',     label:'Unidades de Negocio' },
    { key:'portafolio', label:'Portafolio'           },
  ];

  const contactIdx = SL.findIndex(s => s.id === 'p20');
  const contactBtn = contactIdx > -1
    ? `<button class="idx2-contact" onclick="goTo(${contactIdx})">Contacto →</button>` : '';

  let cols = ''; let seq = 1;
  groups.forEach(g => {
    const grouped = items.filter(m => m.cat === g.key);
    if(!grouped.length) return;
    let itemsHtml = '';

    if(g.key === 'unidad') {
      let currentGroup2 = '', groups2 = '';
      grouped.forEach(m => {
        const slideIdx = SL.findIndex(s => s.id === m.id);
        const num = String(seq++).padStart(2,'0');
        const item = `<button class="idx2-item${m.isChild?' idx2-child':''}${m.isGrandchild?' idx2-grandchild':''}" onclick="goTo(${slideIdx})" aria-label="${m.title}"><span class="idx2-num">${num}</span><div class="idx2-info"><div class="idx2-ttl">${m.title}</div><div class="idx2-sub">${m.sub}</div></div></button>`;
        if(!m.isChild) {
          if(currentGroup2) groups2 += `<div class="idx2-unit-group">${currentGroup2}</div>`;
          currentGroup2 = item;
        } else { currentGroup2 += item; }
      });
      if(currentGroup2) groups2 += `<div class="idx2-unit-group">${currentGroup2}</div>`;
      cols += `<div class="idx2-col idx2-col--unidad"><div class="idx2-col-label">${g.label}</div><div class="idx2-items">${groups2}</div></div>`;
    } else {
      grouped.forEach(m => {
        const slideIdx = SL.findIndex(s => s.id === m.id);
        const num = String(seq++).padStart(2,'0');
        itemsHtml += `<button class="idx2-item" onclick="goTo(${slideIdx})" aria-label="${m.title}"><span class="idx2-num">${num}</span><div class="idx2-info"><div class="idx2-ttl">${m.title}</div><div class="idx2-sub">${m.sub}</div></div></button>`;
      });
      cols += `<div class="idx2-col"><div class="idx2-col-label">${g.label}</div><div class="idx2-items">${itemsHtml}</div></div>`;
    }
  });

  body.innerHTML = `
    <div class="idx2-header">
      <div>
        <div class="idx2-eyebrow"><span class="idx2-eye-line"></span>Presentación Ejecutiva</div>
        <h2 class="idx2-title">Contenido</h2>
        <span class="idx2-title-line"></span>
      </div>
      ${contactBtn}
    </div>
    <div class="idx2-wrap">${cols}</div>`;
})();

function goTo(i) {
  if(busy||i===cur||i<0||i>=N)return; busy=true;
  const f=SL[cur], t=SL[i];
  f.classList.add('fo'); f.classList.remove('on');
  setTimeout(()=>{
    f.classList.remove('fo');
    t.classList.add('on','fi');
    setTimeout(()=>t.classList.remove('fi'), D+60);
  }, D-20);
  cur=i;
  DT.forEach((d,j)=>d.classList.toggle('on', j===cur));
  PB.style.width=`${((cur+1)/N)*100}%`;
  PC.textContent=`${cur+1} / ${N}`;
  PV.disabled=cur===0; NX.disabled=cur===N-1;
  // ctrs() cuando se llega a slides con contadores
  const slideId = SL[cur] && SL[cur].id;
  if(slideId==='p0' || slideId==='p_tx_p0' || slideId==='p_tx_p1'
     || slideId==='p10' || slideId==='p12' || slideId==='p14'
     || slideId==='p_pf_cif' || slideId==='p_dur_cif' || slideId==='p_vf_cif') ctrs('#' + slideId);
  // Re-disparar animación escalonada de portadas (su) al entrar
  if(slideId==='p_cov' || slideId==='p_tx_cov' || slideId==='p9' || slideId==='p11' || slideId==='p13') {
    const slide = SL[cur];
    slide.querySelectorAll('.c0-logo-sec, .c0-title, .c0-desc, .c0-spec-block, .c0-footer').forEach(el => {
      el.style.animation = 'none';
      void el.offsetHeight; // reflow para forzar reinicio
      el.style.animation = '';
    });
  }
  setTimeout(()=>{busy=false;}, D+70);
}
window.goTo=goTo;
PV.addEventListener('click',()=>goTo(cur-1));
NX.addEventListener('click',()=>goTo(cur+1));
document.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight'||e.key==='ArrowDown') goTo(cur+1);
  if(e.key==='ArrowLeft' ||e.key==='ArrowUp')   goTo(cur-1);
});
let tx=0;
document.addEventListener('touchstart',e=>{tx=e.touches[0].clientX},{passive:true});
document.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>46)dx<0?goTo(cur+1):goTo(cur-1);},{passive:true});

/* ── MAPA INTERACTIVO DE MÉXICO ── */
(function(){
  const CDN = 'https://cdn.jsdelivr.net/gh/VictorCazanave/svg-maps@master/packages/mexico/mexico.svg';
  const map = document.getElementById('mx-map');
  const tip = document.getElementById('mx-tooltip');
  const lbl = document.getElementById('mx-state-lbl');
  if(!map) return;

  /* ── Datos de plantas (6 ubicaciones) ──
     Fórmula de calibración (2 puntos confirmados del path SVG real):
       Mexicali  BCN (32.66°N,115.47°W) → SVG (110.74, 19.39) [BCN path northernmost tip]
       AGS center (21.88°N,102.30°W)    → SVG (390.53, 309.79) [AGS path start]
     Escala: 21.25 px/°lon · 26.94 px/°lat
     Tijuana: 1.55° al OESTE de Mexicali → x = 110.74 − 32.9 = 78; y = 19.39 + 3.8 = 23
     type 'mobile' = planta móvil (marcador hueco con trazo punteado)
     type 'fixed'  = planta fija permanente (marcador sólido)                            */
  /* ── Plantas: cargadas desde contenido.js (CONTENIDO_PLANTS) ── */
  const PLANTS = (typeof window.CONTENIDO_PLANTS !== 'undefined')
    ? window.CONTENIDO_PLANTS
    : {};  // fallback vacío si contenido.js no está disponible

  /* ── Zoom suave con animación de viewBox ── */
  const VB0 = '0 0 793 498';
  let zoomed = false;

  function animVB(tgt, dur) {
    dur = dur || 400;
    const a = (map.getAttribute('viewBox') || VB0).split(' ').map(Number);
    const b = tgt.split(' ').map(Number);
    const t0 = performance.now();
    (function step(now) {
      const t = Math.min((now-t0)/dur, 1);
      const e = t<.5 ? 2*t*t : -1+(4-2*t)*t;
      map.setAttribute('viewBox', a.map((v,i)=>v+(b[i]-v)*e).join(' '));
      if(t<1) requestAnimationFrame(step);
    })(t0);
  }

  function resetZoom() {
    animVB(VB0);
    zoomed = false;
    map.classList.remove('mx-zoomed','mx-dim');
    map.querySelectorAll('.mx-city').forEach(g=>g.classList.remove('mx-ac'));
    map.querySelectorAll('[id^="st_"]').forEach(p=>p.classList.remove('mx-hl'));
    const c=document.getElementById('mx-card'); if(c) c.classList.remove('vis');
    if(lbl){lbl.textContent='— Selecciona un estado —';lbl.style.color='rgba(255,255,255,.32)';}
  }

  /* ── Mostrar card de planta ── */
  function showCard(p) {
    const c = document.getElementById('mx-card'); if(!c) return;
    document.getElementById('mxc-kick').textContent = p.kick || 'ITISA PREFABRICADOS';
    document.getElementById('mxc-name').textContent = p.city;
    document.getElementById('mxc-loc').textContent  = p.name;
    const pl = document.getElementById('mxc-prod-label'); if(pl) pl.textContent = p.prodLabel || '';
    const me = document.getElementById('mxc-mensual');    if(me) me.textContent = p.mensual;
    const an = document.getElementById('mxc-anual');      if(an) an.textContent = p.anual;

    // Badge tipo (Fijo / Móvil)
    const tipoEl = document.getElementById('mxc-tipo');
    if(tipoEl) {
      tipoEl.textContent = p.tipo || '';
      tipoEl.className   = 'mxc-tag mxc-tag--tipo-' + (p.tipo || 'Fijo');
    }

    // Tags de productos
    const tagsEl = document.getElementById('mxc-prod-tags');
    if(tagsEl && p.productos) {
      tagsEl.innerHTML = p.productos.map(prod => {
        const cls = prod === 'TUMEX'      ? 'mxc-tag mxc-tag--TUMEX'
                  : prod === 'Durmientes' ? 'mxc-tag mxc-tag--Durmientes'
                  :                        'mxc-tag mxc-tag--pref';
        return '<span class="' + cls + '">' + prod + '</span>';
      }).join('');
    }
    c.classList.add('vis');
  }

  /* ── Helpers de colisión ── */
  function pillBB(pill) {
    return {
      x: parseFloat(pill.getAttribute('x')),
      y: parseFloat(pill.getAttribute('y')),
      r: parseFloat(pill.getAttribute('x')) + parseFloat(pill.getAttribute('width')),
      b: parseFloat(pill.getAttribute('y')) + parseFloat(pill.getAttribute('height')),
    };
  }
  function bbsOverlap(a, b, gap) {
    gap = gap || 3;
    return !(a.r + gap < b.x || b.r + gap < a.x || a.b + gap < b.y || b.b + gap < a.y);
  }

  /* ── Reposicionar pines y aplicar estilo Fijo / Móvil ── */
  function repositionPins() {
    const placed = []; // lista de { pill, g } para detección de colisiones

    Object.entries(PLANTS).forEach(([id, p]) => {
      const g  = map.querySelector('#'+id);
      const st = map.querySelector('#st_'+p.state);
      if(!g) return;
      let cx, cy;
      if(p.absX !== undefined) {
        cx = p.absX; cy = p.absY;
      } else if(st) {
        try { const bb=st.getBBox(); cx=bb.x+bb.width*p.rx; cy=bb.y+bb.height*p.ry; }
        catch(e){ console.warn('getBBox error',id,e); return; }
      } else { return; }

      /* Reposicionar todos los círculos */
      g.querySelectorAll('circle').forEach(c=>{c.setAttribute('cx',cx);c.setAttribute('cy',cy);});

      /* Aplicar estilo según tipo */
      const circles = g.querySelectorAll('circle');
      if(p.type === 'mobile') {
        // Planta móvil → anillo punteado hueco + punto central pequeño
        if(circles[1]){
          circles[1].setAttribute('fill','rgba(74,143,212,.10)');
          circles[1].setAttribute('stroke','#60a5fa');
          circles[1].setAttribute('stroke-width','2');
          circles[1].setAttribute('stroke-dasharray','3.5 2');
          circles[1].removeAttribute('filter');
        }
        if(circles[2]){ circles[2].setAttribute('fill','#60a5fa'); circles[2].setAttribute('r','2.5'); circles[2].removeAttribute('filter'); }
      } else if(p.type === 'corporate') {
        // Sede corporativa — disco dorado/ámbar más pequeño (r=6, no r=9)
        if(circles[1]){
          circles[1].setAttribute('fill','#F59E0B');
          circles[1].setAttribute('r','6');
          circles[1].removeAttribute('stroke-dasharray');
          circles[1].setAttribute('stroke','none');
          circles[1].removeAttribute('filter');
        }
        if(circles[2]){ circles[2].setAttribute('fill','#fff'); circles[2].setAttribute('r','2.5'); }
        // Pulse circle también más pequeño
        if(circles[0]){ circles[0].setAttribute('r','6'); circles[0].setAttribute('stroke','#F59E0B'); }
      } else {
        // Planta fija → disco sólido sin filtro SVG (el filtro crea región rectangular visible)
        if(circles[1]){
          circles[1].setAttribute('fill','#4A8FD4');
          circles[1].removeAttribute('stroke-dasharray');
          circles[1].setAttribute('stroke','none');
          circles[1].removeAttribute('filter');
        }
        if(circles[2]){ circles[2].setAttribute('fill','#fff'); circles[2].setAttribute('r','3.5'); circles[2].removeAttribute('filter'); }
      }
      g.dataset.type = p.type || 'fixed';

      /* Etiquetas + pill */
      const lbl1 = g.querySelector('.mx-lbl-state');
      const lbl2 = g.querySelector('.mx-lbl-city');

      const PIN_GAP    = 12;
      const PILL_PAD_X = 7;
      const PILL_H     = 22;

      // Estimación de ancho: 5.2px/char bold-8, 4.2px/char regular-7
      const stateW = p.name.toUpperCase().length * 5.2 + PILL_PAD_X * 2;
      const cityW  = p.city.length * 4.2 + PILL_PAD_X * 2;
      const pillW  = Math.ceil(Math.max(stateW, cityW, 44));

      // Dirección: labelDir en PLANTS > regla automática (cerca del borde derecho → izquierda)
      const nearTop  = cy < 50;
      const goLeft   = p.labelDir === 'left'  ? true
                     : p.labelDir === 'right' ? false
                     : cx > 580;

      let pillX, textX, anchor;
      if(goLeft) {
        anchor = 'end';   pillX = cx - PIN_GAP - pillW; textX = cx - PIN_GAP - PILL_PAD_X;
      } else {
        anchor = 'start'; pillX = cx + PIN_GAP;         textX = cx + PIN_GAP + PILL_PAD_X;
      }
      const pillY = nearTop ? cy + PIN_GAP : cy - PILL_H / 2 - 2;
      const ly1   = pillY + 9.5;
      const ly2   = pillY + 18.5;

      if(lbl1){ lbl1.setAttribute('x',textX); lbl1.setAttribute('y',ly1); lbl1.setAttribute('text-anchor',anchor); lbl1.setAttribute('font-size','8'); lbl1.setAttribute('letter-spacing','0.6'); }
      if(lbl2){ lbl2.setAttribute('x',textX); lbl2.setAttribute('y',ly2); lbl2.setAttribute('text-anchor',anchor); lbl2.setAttribute('font-size','7'); }

      // Crear/actualizar pill rect
      const ns = 'http://www.w3.org/2000/svg';
      let pill = g.querySelector('.mx-pill');
      if(!pill) {
        pill = document.createElementNS(ns,'rect');
        pill.classList.add('mx-pill');
        pill.setAttribute('rx','4'); pill.setAttribute('ry','4');
        const first = g.querySelector('.mx-lbl-state');
        if(first) g.insertBefore(pill,first); else g.appendChild(pill);
      }
      pill.setAttribute('x',pillX); pill.setAttribute('y',pillY);
      pill.setAttribute('width',pillW); pill.setAttribute('height',PILL_H);

      placed.push({ pill, g, lbl1, lbl2, cx, cy });
    });

    /* ── Detección y resolución genérica de colisiones ──
       Hasta 4 iteraciones: si dos pills se enciman, empuja el más sur/este hacia abajo. */
    for(let iter = 0; iter < 4; iter++) {
      let resolved = true;
      for(let i = 0; i < placed.length; i++) {
        for(let j = i+1; j < placed.length; j++) {
          const a = placed[i], b = placed[j];
          if(!bbsOverlap(pillBB(a.pill), pillBB(b.pill))) continue;
          resolved = false;

          // Mover el pin con mayor cy (más al sur en el mapa) hacia abajo
          const target = b.cy >= a.cy ? b : a;
          const bb = pillBB(target.pill);
          const other = target === b ? a : b;
          const otherBB = pillBB(other.pill);

          // Calcular cuánto hay que mover (overlap vertical + gap)
          const shift = otherBB.b - bb.y + 4;

          // Aplicar desplazamiento al pill y a sus textos
          target.pill.setAttribute('y', bb.y + shift);
          [target.lbl1, target.lbl2].forEach(t => {
            if(t) t.setAttribute('y', parseFloat(t.getAttribute('y')) + shift);
          });
        }
      }
      if(resolved) break;
    }
  }

  /* ── Inicializar handlers en los pines (INMEDIATO, sin esperar CDN) ── */
  function initCityPins() {
    map.addEventListener('click', function(e){
      if(zoomed && (e.target===map || !e.target.closest('.mx-city'))) resetZoom();
    });

    Object.entries(PLANTS).forEach(([id, p]) => {
      const g = map.querySelector('#'+id);
      if(!g) return;

      g.addEventListener('mouseenter', function(){
        if(zoomed) return;
        map.classList.add('mx-dim');
        g.classList.add('mx-ac');
        const st=map.querySelector('#st_'+p.state); if(st) st.classList.add('mx-hl');
        showCard(p);
        if(lbl){lbl.textContent=p.city+', '+p.name;lbl.style.color='#60a5fa';}
        if(tip) tip.classList.remove('vis');
      });

      g.addEventListener('mouseleave', function(){
        if(zoomed) return;
        map.classList.remove('mx-dim');
        g.classList.remove('mx-ac');
        const st=map.querySelector('#st_'+p.state); if(st) st.classList.remove('mx-hl');
        const c=document.getElementById('mx-card'); if(c) c.classList.remove('vis');
        if(lbl){lbl.textContent='— Selecciona un estado —';lbl.style.color='rgba(255,255,255,.32)';}
      });

      g.addEventListener('click', function(e){
        e.stopPropagation();
        if(zoomed){ resetZoom(); return; }
        const st = map.querySelector('#st_'+p.state);
        if(!st){ console.warn('state not loaded yet for',p.state); return; }
        try {
          const bb  = st.getBBox();
          const pad = 50;
          animVB(`${bb.x-pad} ${bb.y-pad} ${bb.width+2*pad} ${bb.height+2*pad}`);
          zoomed = true;
          map.classList.add('mx-zoomed','mx-dim');
          g.classList.add('mx-ac');
          st.classList.add('mx-hl');
          showCard(p);
          if(lbl){lbl.textContent='Click en el mapa para volver';lbl.style.color='rgba(255,200,100,.7)';}
        } catch(err){console.warn('zoom error',err);}
      });
    });

    document.addEventListener('keydown', e=>{ if(e.key==='Escape'&&zoomed) resetZoom(); });
  }

  /* ── Inicialización de estados (CDN) ── */
  function initStateHover() {
    const mr = ()=>map.closest('.smap-map').getBoundingClientRect();
    map.querySelectorAll('[id^="st_"]').forEach(path=>{
      const name=path.dataset.name||'';
      path.addEventListener('mouseenter',function(){
        if(zoomed) return;
        this.classList.add('mx-active');
        if(tip){tip.textContent=name;tip.classList.add('vis');}
        if(lbl){lbl.textContent=name;lbl.style.color='rgba(255,255,255,.85)';}
      });
      path.addEventListener('mousemove',function(e){
        if(!tip||zoomed) return;
        const r=mr(); let tx=e.clientX-r.left+14,ty=e.clientY-r.top-10;
        if(tx+160>r.width) tx=e.clientX-r.left-160;
        tip.style.left=tx+'px'; tip.style.top=ty+'px';
      });
      path.addEventListener('mouseleave',function(){
        this.classList.remove('mx-active');
        if(tip) tip.classList.remove('vis');
        if(!zoomed&&lbl){lbl.textContent='— Selecciona un estado —';lbl.style.color='rgba(255,255,255,.32)';}
      });
    });
  }

  /* ── Filtros de la leyenda lateral ── */
  function initFilters() {
    let active = null; // { type, value }

    function applyFilter(type, value) {
      // Segundo click en el mismo filtro → reset
      if(active && active.type === type && active.value === value) {
        resetLegendFilter(); return;
      }
      active = { type, value };

      const matchIds = Object.entries(PLANTS)
        .filter(([, p]) => {
          if(type === 'tipo')     return p.type === value;      // 'fixed' | 'mobile'
          if(type === 'producto') return Array.isArray(p.productos) && p.productos.includes(value);
          return true;
        })
        .map(([id]) => id);

      Object.keys(PLANTS).forEach(id => {
        const g = map.querySelector('#' + id);
        if(!g) return;
        if(matchIds.includes(id)) {
          g.classList.remove('mx-flt-dim'); g.classList.add('mx-flt-hl');
        } else {
          g.classList.add('mx-flt-dim'); g.classList.remove('mx-flt-hl');
        }
      });

      document.querySelectorAll('[data-filter-type]').forEach(el => {
        el.classList.toggle('smap-filter-active',
          el.dataset.filterType === type && el.dataset.filterValue === value);
      });
    }

    function resetLegendFilter() {
      active = null;
      Object.keys(PLANTS).forEach(id => {
        const g = map.querySelector('#' + id);
        if(g) g.classList.remove('mx-flt-dim', 'mx-flt-hl');
      });
      document.querySelectorAll('[data-filter-type]').forEach(el => el.classList.remove('smap-filter-active'));
    }

    document.querySelectorAll('[data-filter-type]').forEach(el => {
      el.addEventListener('click', function(e) {
        e.stopPropagation();
        applyFilter(this.dataset.filterType, this.dataset.filterValue);
      });
    });
  }

  /* ── ARRANQUE ── */
  initCityPins(); // Inmediato: no depende del CDN
  initFilters();  // Filtros de la leyenda

  fetch(CDN)
    .then(r=>r.text())
    .then(svg=>{
      const doc=new DOMParser().parseFromString(svg,'image/svg+xml');
      const frag=document.createDocumentFragment();
      doc.querySelectorAll('path').forEach(p=>{
        const el=document.createElementNS('http://www.w3.org/2000/svg','path');
        el.setAttribute('d',p.getAttribute('d'));
        el.setAttribute('id','st_'+p.getAttribute('id'));
        el.dataset.name=p.getAttribute('aria-label')||'';
        frag.appendChild(el);
      });
      const loading=document.getElementById('mx-loading');
      if(loading) loading.remove();
      const first=map.querySelector('.mx-city');
      if(first) map.insertBefore(frag,first); else map.appendChild(frag);
      repositionPins();   // Reubica pines con posiciones exactas basadas en estados reales
      initStateHover();   // Activa tooltip de estados
    })
    .catch(()=>{
      const l=document.getElementById('mx-loading');
      if(l) l.setAttribute('fill','rgba(74,143,212,.18)');
      console.warn('Mexico states CDN unavailable — city pins still interactive');
    });
})();

/* ══════════════════════════════════════════════════════
   PORTFOLIO CAROUSEL + PROJECT DETAIL
   Arquitectura: cada portafolio (.spc) renderiza un
   carrusel CSS scroll-snap. Click en tarjeta →
   showProjectDetail(unit, idx) popula la slide
   p_proj_detail y navega a ella vía goTo().
══════════════════════════════════════════════════════ */

/* ── Proyectos: cargados desde contenido.js (CONTENIDO_PROJECTS) ── */
const PORT_PROJECTS = (typeof window.CONTENIDO_PROJECTS !== 'undefined')
  ? window.CONTENIDO_PROJECTS
  : { pf:[], dur:[], vf:[], tx:[] };  // fallback vacío

const UNIT_LABELS = { pf:'ITISA Prefabricados', dur:'ITISA Durmientes', vf:'ITISA Vías Férreas', tx:'TUMEX' };

/* ── Mostrar detalle de un proyecto ── */
window._pdOrigin = 0;

function showProjectDetail(unit, idx) {
  const proj = PORT_PROJECTS[unit] && PORT_PROJECTS[unit][idx];
  if(!proj) return;
  window._pdOrigin = cur;
  const unitLabel = UNIT_LABELS[unit] || 'GRUPO ITISA';

  document.getElementById('pd-unit-kick').textContent = unitLabel;
  document.getElementById('pd-title').textContent     = proj.title;
  document.getElementById('pd-desc').textContent      = proj.desc;
  document.getElementById('pd-year').textContent      = proj.year;
  document.getElementById('pd-loc').textContent       = proj.loc;
  document.getElementById('pd-client').textContent    = proj.client;
  document.getElementById('pd-nav-unit').textContent  = unitLabel;
  document.getElementById('pd-nav-sub').textContent   = proj.title;

  const specsEl = document.getElementById('pd-specs');
  if(specsEl) specsEl.innerHTML = proj.specs.map(
    ([k,v]) => `<div class="s4-si"><span class="spk">${k}</span><span class="spv">${v}</span></div>`
  ).join('');

  const detailIdx = SL.findIndex(s => s.id === 'p_proj_detail');
  if(detailIdx > -1) goTo(detailIdx);
}
window.showProjectDetail = showProjectDetail;

/* ── Portafolio Global — 3 niveles tipología ── */
(function initAllProjectsCarousel() {
  const body = document.getElementById('ap-body');
  if(!body) return;

  /* Clasificación de marketing:
     INSIGNIA = máximo impacto público, reconocimiento nacional/internacional
     REPRESENTATIVO = referente técnico-sectorial, clientes estratégicos
     COMPLEMENTARIO = diversificación, cartera amplia, relaciones de largo plazo */
  const TIERS = [
    {
      key:1, label:'Proyectos Insignia',
      hint:'Mayor visibilidad nacional · Clientes institucionales · Máximo impacto social',
      items:[
        {unit:'vf',  idx:0, title:'Tren Maya Tramo 4',         client:'FONATUR · 2023'},
        {unit:'tx',  idx:0, title:'Agua Saludable La Laguna',  client:'SIIAO / CONAGUA · 2023'},
        {unit:'pf',  idx:0, title:'Viaducto Bicentenario',     client:'SCT · 2021'},
        {unit:'vf',  idx:2, title:'Tren Maya Tramo 7',         client:'SEDENA · 2024'},
        {unit:'tx',  idx:2, title:'Acueducto Monterrey VI',    client:'SADM · 2022'},
        {unit:'dur', idx:0, title:'Tren Maya — Durmientes',    client:'FONATUR · 2023'},
      ]
    },
    {
      key:2, label:'Proyectos Representativos',
      hint:'Referentes técnicos · Clientes estratégicos privados y gubernamentales',
      items:[
        {unit:'vf',  idx:1, title:'CPKC Corredor Norte',       client:'CPKC · 2022'},
        {unit:'dur', idx:1, title:'CPKC Red Norte',            client:'CPKC · 2022'},
        {unit:'pf',  idx:1, title:'Estadio Akron',             client:'GNP · 2020'},
        {unit:'tx',  idx:1, title:'Acueducto TJ–Valle Guadalupe', client:'CESPT · 2023'},
        {unit:'pf',  idx:2, title:'Hospital PEMEX Veracruz',   client:'PEMEX · 2021'},
        {unit:'tx',  idx:3, title:'PEMEX Línea Hidráulica',    client:'PEMEX · 2021'},
        {unit:'pf',  idx:3, title:'Torre Virreyes',            client:'PINFRA · 2018'},
      ]
    },
    {
      key:3, label:'Proyectos Complementarios',
      hint:'Cartera diversificada · Presencia sectorial amplia · Relaciones de largo plazo',
      items:[
        {unit:'vf',  idx:3, title:'Ferromex Occidente',        client:'Ferromex · 2021'},
        {unit:'dur', idx:2, title:'Ferromex Corredor',         client:'Ferromex · 2021'},
        {unit:'dur', idx:3, title:'Ferrosur Red Sur',          client:'Ferrosur · 2020'},
        {unit:'pf',  idx:4, title:'Parque Industrial MTY',     client:'DESC · 2022'},
        {unit:'tx',  idx:4, title:'Sistema Hidráulico CDMX',   client:'SACMEX · 2020'},
        {unit:'vf',  idx:4, title:'19 Puentes Ferroviarios',   client:'SCT / Varios · 2020'},
        {unit:'pf',  idx:5, title:'Bodega Logística FEMSA',    client:'FEMSA · 2023'},
        {unit:'tx',  idx:5, title:'Gasoducto Industrial NL',   client:'SENER · 2019'},
        {unit:'dur', idx:4, title:'Exportación LATAM',         client:'Colombia · Chile · 2019'},
      ]
    },
  ];

  const phSvg = `<svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`;

  /* Header de la página */
  const headerHtml = `
    <div class="ap-page-hdr">
      <div>
        <div class="ap-page-title">Portafolio de Proyectos</div>
        <div class="ap-page-sub">Infraestructura nacional · Tres niveles de clasificación · Click en un proyecto para ver el detalle</div>
      </div>
      <div class="ap-page-hint">← Arrastra para explorar cada fila</div>
    </div>`;

  /* Filas por tier */
  const tiersHtml = TIERS.map(tier => {
    const cards = tier.items.map((p,i) => `
      <div class="ap-card ap-tier-${tier.key}" onclick="showProjectDetail('${p.unit}',${p.idx})">
        <div class="isl"><label class="ph" id="apc_${tier.key}_${i}">
          <div class="ph-i">${phSvg}</div>
          <button class="ph-b" tabindex="-1">+ Foto</button>
          <input type="file" accept="image/*" onchange="upImg(this,'apc_${tier.key}_${i}')">
        </label></div>
        <div class="ap-ov">
          <div class="ap-name">${p.title}</div>
          <div class="ap-client">${p.client}</div>
        </div>
      </div>`).join('');

    /* controles de carrusel por fila */
    const scrollStep = tier.key === 1 ? '25%' : tier.key === 2 ? '20%' : '16.67%';
    return `
      <div class="ap-tier ap-tier-${tier.key}">
        <div class="ap-tier-hdr">
          <div class="ap-tier-bar"></div>
          <span class="ap-tier-label">${tier.label}</span>
          <span class="ap-tier-count">${tier.items.length} proyectos</span>
        </div>
        <div class="ap-track" id="apt_${tier.key}">${cards}</div>
      </div>`;
  }).join('');

  body.innerHTML = headerHtml + tiersHtml;

  /* Scroll drag suave en cada track (pointer events) */
  body.querySelectorAll('.ap-track').forEach(track => {
    let isDown = false, startX = 0, scrollLeft = 0;
    track.addEventListener('mousedown',  e => { isDown=true; startX=e.pageX-track.offsetLeft; scrollLeft=track.scrollLeft; });
    track.addEventListener('mouseleave', () => isDown=false);
    track.addEventListener('mouseup',    () => isDown=false);
    track.addEventListener('mousemove',  e => {
      if(!isDown) return; e.preventDefault();
      track.scrollLeft = scrollLeft - (e.pageX - track.offsetLeft - startX);
    });
  });
})();

/* ── Portafolio por unidad — diseño 3 tiers (mismo sistema que ap-*) ── */
(function initPortfolioCarousels() {

  /* Clasificación por tier: cargada desde contenido.js (CONTENIDO_TIERS) */
  const PORT_TIERS = (typeof window.CONTENIDO_TIERS !== 'undefined')
    ? window.CONTENIDO_TIERS
    : { pf:{tier1:[],tier2:[],tier3:[]}, dur:{tier1:[],tier2:[],tier3:[]},
        vf:{tier1:[],tier2:[],tier3:[]}, tx:{tier1:[],tier2:[],tier3:[]} };

  const TIER_META = [
    { key:1, label:'Proyectos Insignia',         hint:'Mayor impacto y visibilidad' },
    { key:2, label:'Proyectos Representativos',  hint:'Referencias técnicas clave'  },
    { key:3, label:'Proyectos Complementarios',  hint:'Cartera diversificada'       },
  ];

  const portSlides = [
    { id:'p_pp_pf',  unit:'pf',  title:'Prefabricados',  nav:'ITISA Prefabricados' },
    { id:'p_pp_dur', unit:'dur', title:'Durmientes',      nav:'ITISA Durmientes'    },
    { id:'p_pp_vf',  unit:'vf',  title:'Vías Férreas',   nav:'ITISA Vías Férreas'  },
    { id:'p_pp_tx',  unit:'tx',  title:'TUMEX',           nav:'TUMEX'               },
  ];

  const UNIT_SUBS = {
    pf:  'Concreto prefabricado y preesforzado para infraestructura · México',
    dur: 'Durmientes ferroviarios para carga, pasajeros y metro · México y LATAM',
    vf:  'Construcción e instalación de infraestructura ferroviaria · Tren Maya · CPKC · SCT',
    tx:  'Tubería de acero para infraestructura hidráulica · Oil &amp; Gas · Industrial · México y LATAM',
  };

  const phSvg = `<svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`;

  portSlides.forEach(({ id, unit, title, nav }) => {
    const slide = document.getElementById(id);
    if(!slide) return;
    const projects = PORT_PROJECTS[unit] || [];
    const tiers    = PORT_TIERS[unit] || { tier1:[], tier2:[], tier3:[] };

    /* Generar filas de tiers */
    const tiersHtml = TIER_META.map(tm => {
      const indices = tiers[`tier${tm.key}`] || [];
      if(!indices.length) return '';

      const cards = indices.map((idx,i) => {
        const p = projects[idx];
        if(!p) return '';
        const pid = `pp_${unit}_t${tm.key}_${i}`;
        return `
          <div class="ap-card ap-tier-${tm.key}" onclick="showProjectDetail('${unit}',${idx})">
            <div class="isl"><label class="ph" id="${pid}">
              <div class="ph-i">${phSvg}</div>
              <button class="ph-b" tabindex="-1">+ Foto</button>
              <input type="file" accept="image/*" onchange="upImg(this,'${pid}')">
            </label></div>
            <div class="ap-ov">
              <div class="ap-name">${p.title}</div>
              <div class="ap-client">${p.client} · ${p.year}</div>
            </div>
          </div>`;
      }).join('');

      return `
        <div class="ap-tier ap-tier-${tm.key}">
          <div class="ap-tier-hdr">
            <div class="ap-tier-bar"></div>
            <span class="ap-tier-label">${tm.label}</span>
            <span class="ap-tier-count">${indices.length} proyectos</span>
          </div>
          <div class="ap-track" id="apt_${unit}_${tm.key}">${cards}</div>
        </div>`;
    }).join('');

    /* Inyectar HTML (nav-lt ya en el HTML del slide) */
    slide.innerHTML = `
      <header class="nav nav-lt">
        <div class="nav-w"><div class="lz" onclick="document.getElementById('LOGO').click()"><img class="li" id="LI_${id}" alt="GRUPO ITISA"><div class="lt"><span class="l-n">ITISA</span><span class="l-s">GRUPO</span></div></div></div>
        <div class="nav-d"><div class="nav-d-col"><span class="t-n">${nav}</span><span class="t-s">Portafolio de Proyectos</span></div></div>
      </header>
      <div id="ap-body" style="position:absolute;top:var(--nav-h);left:0;right:0;bottom:0;display:flex;flex-direction:column;padding:24px 56px 20px;overflow:hidden;">
        <div class="ap-page-hdr">
          <div>
            <div class="ap-page-title">Portafolio de Proyectos</div>
            <div class="ap-page-sub">${UNIT_SUBS[unit] || ''}</div>
          </div>
        </div>
        ${tiersHtml}
      </div>`;

    /* Drag suave en cada track */
    slide.querySelectorAll('.ap-track').forEach(track => {
      let isDown=false, startX=0, sl=0;
      track.addEventListener('mousedown',  e => { isDown=true; startX=e.pageX-track.offsetLeft; sl=track.scrollLeft; });
      track.addEventListener('mouseleave', () => isDown=false);
      track.addEventListener('mouseup',    () => isDown=false);
      track.addEventListener('mousemove',  e => { if(!isDown) return; e.preventDefault(); track.scrollLeft=sl-(e.pageX-track.offsetLeft-startX); });
    });
  });
})();

/* ── Drag suave para tracks de Catálogo de Productos (todas las unidades) ── */
(function initProductTrackDrag() {
  ['p_tx_prod','p_pf_prod','p_dur_prod','p_vf_prod'].forEach(id => {
    const slide = document.getElementById(id);
    if(!slide) return;
    slide.querySelectorAll('.ap-track').forEach(track => {
      let isDown=false, startX=0, sl=0;
      track.addEventListener('mousedown',  e => { isDown=true; startX=e.pageX-track.offsetLeft; sl=track.scrollLeft; });
      track.addEventListener('mouseleave', () => isDown=false);
      track.addEventListener('mouseup',    () => isDown=false);
      track.addEventListener('mousemove',  e => { if(!isDown) return; e.preventDefault(); track.scrollLeft=sl-(e.pageX-track.offsetLeft-startX); });
    });
  });
})();

/* ── Scroll helper para carruseles ── */
function scrollPortTo(trackId, dirOrPage) {
  const track = document.getElementById(trackId);
  if(!track) return;
  const cardW = (track.firstElementChild || {offsetWidth:300}).offsetWidth + 18;
  const step  = cardW * 3; // 3 cards per "page"
  if(typeof dirOrPage === 'number' && (dirOrPage === 1 || dirOrPage === -1)) {
    track.scrollBy({ left: dirOrPage * step, behavior:'smooth' });
  } else {
    track.scrollTo({ left: dirOrPage * step, behavior:'smooth' });
  }
}
window.scrollPortTo = scrollPortTo;

/* ── CONTADORES ── */
function ctrs(scope){
  const sel = scope ? `${scope} .ctr` : '#p0 .ctr, #p_tx_p0 .ctr, #p_tx_p1 .ctr, #p10 .ctr, #p12 .ctr, #p14 .ctr, #p_pf_cif .ctr, #p_dur_cif .ctr, #p_vf_cif .ctr';
  document.querySelectorAll(sel).forEach(el=>{
    const to  = parseFloat(el.dataset.to);
    const sfx = el.dataset.sfx || '';
    const sep = 'sep' in el.dataset;
    const dec = parseInt(el.dataset.dec, 10) || 0;
    const dur = 1500, t0 = performance.now();
    (function tick(now){
      const p = Math.min((now-t0)/dur, 1);
      const e = 1 - Math.pow(1-p, 4);
      const v = e * to;
      let txt;
      if(dec > 0) {
        txt = sep
          ? v.toLocaleString('es-MX', { minimumFractionDigits: dec, maximumFractionDigits: dec })
          : v.toFixed(dec);
      } else {
        const iv = Math.floor(v);
        txt = sep ? iv.toLocaleString('es-MX') : String(iv);
      }
      el.textContent = txt + sfx;
      if(p < 1) requestAnimationFrame(tick);
    })(t0);
  });
}
ctrs();

/* ── LOGO ── */
function upLogo(input){
  const f=input.files[0];if(!f)return;
  const r=new FileReader();
  r.onload=ev=>{
    document.querySelectorAll('img.li').forEach(i=>{i.src=ev.target.result;i.classList.add('on');});
    document.querySelectorAll('.lt,.lhint').forEach(h=>h.style.display='none');
  };r.readAsDataURL(f);
}

/* ── FOTOS DE FONDO ── */
function upBg(input,phId,ovId){
  const f=input.files[0];if(!f)return;
  const r=new FileReader();
  r.onload=ev=>{
    const sl=input.closest('.isl');
    const ph=document.getElementById(phId);
    if(!sl){console.warn('upBg: .isl not found for',phId);return;}
    let img=sl.querySelector('img.ld');
    if(!img){img=document.createElement('img');img.className='ld';sl.appendChild(img);}
    img.src=ev.target.result;if(ph)ph.classList.add('hide');
    const ov=document.getElementById(ovId);
    /* Mismo gradiente horizontal para ambas páginas al cargar imagen */
    const grad = 'radial-gradient(ellipse 32% 22% at 100% 0%,rgba(7,17,38,.55)0%,rgba(7,17,38,.20)50%,transparent 100%),linear-gradient(to right,rgba(7,17,38,1.0)0%,rgba(7,17,38,.98)11%,rgba(7,17,38,.96)22%,rgba(7,17,38,.94)33%,rgba(7,17,38,.90)44%,rgba(7,17,38,.75)56%,rgba(7,17,38,.65)67%,rgba(7,17,38,.50)78%,rgba(7,17,38,.30)89%,rgba(7,17,38,.20)100%)';
    if(ov&&(ovId==='ov1'||ovId==='ov3'||ovId==='ov_tx1'||ovId==='ov_tx3')) ov.style.background = grad;
    /* slide 4: el overlay .s4-ov ya maneja el gradiente, no hay ovId */
  };r.readAsDataURL(f);
}

/* ── FOTO PROYECTO ── */
function upImg(input,phId){
  const f=input.files[0];if(!f)return;
  const r=new FileReader();
  r.onload=ev=>{
    /* Busca el contenedor imagen: .isl (slides normales) o .sh-img-slot (línea de tiempo) */
    const sl = input.closest('.isl') || input.closest('.sh-img-slot');
    const ph = document.getElementById(phId);
    if(!sl){console.warn('upImg: no container found for',phId);return;}
    let img = sl.querySelector('img.ld');
    if(!img){
      img = document.createElement('img');
      img.className = 'ld';
      /* Para .sh-img-slot necesita positioning explícito (no hereda de .isl) */
      if(!input.closest('.isl'))
        img.style.cssText='position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:2;';
      sl.appendChild(img);
    }
    img.src=ev.target.result;
    if(ph) ph.classList.add('hide');
    img.onclick=()=>olb(img.src);
  };r.readAsDataURL(f);
}

/* ── LIGHTBOX ── */
function olb(src){document.getElementById('lb-img').src=src;document.getElementById('lb').classList.add('open')}
function clb(){document.getElementById('lb').classList.remove('open')}
document.getElementById('lb').addEventListener('click',function(e){if(e.target===this)clb()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')clb()});

/* ── PDF EXPORT ── */
function xpdf(o){
  if(!confirm(`PDF ${o==='p'?'Vertical':'Horizontal'} A4\n• Sin márgenes • Escala 100%\n\n¿Continuar?`))return;

  const isP = o === 'p';
  const slideH = isP ? '297mm' : '210mm';

  // 1. Inyectar @page con tamaño y orientación correctos (máxima prioridad)
  let ps = document.getElementById('_xpdf_page');
  if (!ps) { ps = document.createElement('style'); ps.id = '_xpdf_page'; document.head.appendChild(ps); }
  ps.textContent = `@page { size: A4 ${isP ? 'portrait' : 'landscape'}; margin: 0; }`;

  // 2. Clase en body para selectores CSS de orientación
  document.body.className = isP ? 'pp' : 'pl';

  // 3. Estilos inline !important en cada slide (ganan sobre cualquier regla CSS)
  SL.forEach(s => {
    s.style.setProperty('position',   'relative', 'important');
    s.style.setProperty('opacity',    '1',        'important');
    s.style.setProperty('transform',  'none',     'important');
    s.style.setProperty('pointer-events','none',  'important');
    s.style.setProperty('display',    'block',    'important');
    s.style.setProperty('height',     slideH,     'important');
    s.style.setProperty('min-height', slideH,     'important');
    s.style.setProperty('overflow',   'hidden',   'important');
  });

  // 4. Forzar columnas en layouts que el breakpoint @960px podría aplastar
  document.querySelectorAll('.s4-body, .s2-top, .sq-body, .sct-mid, .sa-cols').forEach(el => {
    el.style.setProperty('grid-template-columns', '1fr 1fr', 'important');
  });
  document.querySelectorAll('.sc-cols').forEach(el => {
    el.style.setProperty('grid-template-columns', 'repeat(3,1fr)', 'important');
  });
  document.querySelectorAll('.su-strip, .s2-grid, .s1-strip').forEach(el => {
    el.style.setProperty('grid-template-columns', 'repeat(4,1fr)', 'important');
  });
  document.querySelectorAll('.s2-grid').forEach(el => {
    el.style.setProperty('grid-template-rows', '1fr 1fr', 'important');
  });
  document.querySelectorAll('.sp-grid').forEach(el => {
    el.style.setProperty('grid-template-columns', 'repeat(3,1fr)', 'important');
    el.style.setProperty('grid-template-rows', 'repeat(3,1fr)', 'important');
  });

  // 5. Imprimir
  window.print();

  // 6. Restaurar presentación
  const restaurar = () => {
    document.body.className = '';
    const ps2 = document.getElementById('_xpdf_page');
    if (ps2) ps2.remove();

    SL.forEach((s, idx) => {
      s.style.position    = '';
      s.style.opacity     = '';
      s.style.transform   = '';
      s.style.pointerEvents = '';
      s.style.display     = '';
      s.style.height      = '';
      s.style.minHeight   = '';
      s.style.overflow    = '';
      s.classList.remove('fo', 'fi');
      if (idx === cur) { s.classList.add('on'); } else { s.classList.remove('on'); }
    });

    document.querySelectorAll('.s4-body, .s2-top, .sq-body, .sct-mid, .sa-cols, .sc-cols, .su-strip, .sp-grid, .s2-grid, .s1-strip').forEach(el => {
      el.style.gridTemplateColumns = '';
      el.style.gridTemplateRows = '';
    });

    busy = false;
  };

  window.onafterprint = restaurar;
  setTimeout(restaurar, 1500);
}

/* ══════════════════════════════════════════════════════════════════════
   SLIDE GALERÍA — lógica de grid, lightbox y video
══════════════════════════════════════════════════════════════════════ */
(function initGaleria() {

  /* ── Estado ── */
  let galItems   = [];   // { src, cap, unidad } — puede crecer con uploads manuales
  let galCurrent = 0;    // índice del lightbox
  let galFilter  = 'Todos';

  const FILTROS = ['Todos','Prefabricados','Durmientes','Vías Férreas','TUMEX','Corporativo'];

  /* ── DOM refs ── */
  const grid      = document.getElementById('galGrid');
  const lbEl      = document.getElementById('galLb');
  const lbImg     = document.getElementById('galLbImg');
  const lbCap     = document.getElementById('galLbCap');

  if (!grid) return;  // slide no presente

  /* ── Cargar datos desde contenido.js ── */
  function loadData() {
    const raw = window.CONTENIDO_GALERIA_FOTOS || [];
    galItems = raw.map((it, i) => ({ ...it, _id: i }));
  }

  /* ── Renderizar grid con filtro activo ── */
  function renderGrid() {
    const visible = galFilter === 'Todos'
      ? galItems
      : galItems.filter(it => it.unidad === galFilter);

    grid.innerHTML = '';

    visible.forEach((it, vi) => {
      const card = document.createElement('div');
      card.className = 'sgal-card';
      card.dataset.idx = it._id;

      if (it.src) {
        // Foto real
        const img = document.createElement('img');
        img.src = it.src;
        img.alt = it.cap || '';
        img.loading = 'lazy';
        card.appendChild(img);
      } else {
        // Placeholder
        card.innerHTML = `
          <div class="sgal-card-ph">
            <svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          </div>`;
      }

      // Overlay con caption y unidad
      const ov = document.createElement('div');
      ov.className = 'sgal-card-ov';
      ov.innerHTML = `
        <span class="sgal-card-unit">${it.unidad || ''}</span>
        <span class="sgal-card-cap">${it.cap || ''}</span>`;
      card.appendChild(ov);

      card.addEventListener('click', () => {
        if (it.src) galLbOpen(vi, visible);
      });

      grid.appendChild(card);
    });
  }

  /* ── Barra de filtros ── */
  function buildFilters() {
    const hdr = document.querySelector('#p_galeria .sgal-hdr');
    if (!hdr) return;
    const bar = document.createElement('div');
    bar.className = 'sgal-filters';
    bar.id = 'galFilters';
    FILTROS.forEach(f => {
      const btn = document.createElement('button');
      btn.className = 'sgal-filter' + (f === 'Todos' ? ' on' : '');
      btn.textContent = f;
      btn.addEventListener('click', () => {
        galFilter = f;
        bar.querySelectorAll('.sgal-filter').forEach(b => b.classList.toggle('on', b.textContent === f));
        renderGrid();
      });
      bar.appendChild(btn);
    });
    hdr.insertAdjacentElement('afterend', bar);
  }

  /* ── Lightbox ── */
  let _lbItems = [];
  function galLbOpen(idx, items) {
    _lbItems = items;
    galCurrent = idx;
    lbImg.src = items[idx].src;
    lbCap.textContent = items[idx].cap || '';
    lbEl.classList.add('open');
  }
  function galLbClose() { lbEl.classList.remove('open'); lbImg.src = ''; }
  function galLbNav(dir) {
    const n = _lbItems.length;
    galCurrent = (galCurrent + dir + n) % n;
    const it = _lbItems[galCurrent];
    lbImg.src = it.src;
    lbCap.textContent = it.cap || '';
  }
  window.galLbClose = galLbClose;
  window.galLbNav   = galLbNav;

  /* ── Upload manual desde botón "Agregar foto" ── */
  window.galAddFiles = function(input) {
    const files = Array.from(input.files);
    files.forEach(f => {
      const reader = new FileReader();
      reader.onload = ev => {
        const idx = galItems.length;
        galItems.push({ src: ev.target.result, cap: f.name.replace(/\.[^.]+$/, ''), unidad: 'Corporativo', _id: idx });
        renderGrid();
      };
      reader.readAsDataURL(f);
    });
    input.value = '';
  };

  /* ── Tab fotos / video ── */
  window.galTab = function(tab) {
    document.querySelectorAll('.sgal-tab').forEach(b => b.classList.toggle('on', b.dataset.tab === tab));
    document.getElementById('galPanelFotos').classList.toggle('sgal-panel--hidden',  tab !== 'fotos');
    document.getElementById('galPanelVideos').classList.toggle('sgal-panel--hidden', tab !== 'videos');
    if (tab === 'videos') initVideo();
  };

  /* ── Video ── */
  let videoInit = false;
  function initVideo() {
    if (videoInit) return;
    videoInit = true;
    const v    = window.CONTENIDO_GALERIA_VIDEO || {};
    const main = document.getElementById('galVideoMain');
    const ph   = document.getElementById('galVideoPh');
    const list = document.getElementById('galVideoList');
    if (!main || !v.src) return;

    ph.style.display = 'none';
    const isEmbed = v.src.includes('youtube.com/embed') || v.src.includes('player.vimeo.com');
    if (isEmbed) {
      const ifr = document.createElement('iframe');
      ifr.src = v.src;
      ifr.allow = 'autoplay; fullscreen';
      ifr.allowFullscreen = true;
      ifr.style.cssText = 'width:100%;height:100%;border:none;border-radius:6px;';
      main.appendChild(ifr);
    } else {
      const vid = document.createElement('video');
      vid.src = v.src; vid.controls = true; vid.style.cssText = 'width:100%;height:100%;object-fit:contain;border-radius:6px;';
      main.appendChild(vid);
    }

    // Caption
    if (v.titulo || v.desc) {
      const cap = document.createElement('div');
      cap.className = 'sgal-video-info';
      cap.innerHTML = `<div class="sgal-video-titulo">${v.titulo||''}</div><div class="sgal-video-desc">${v.desc||''}</div>`;
      main.insertAdjacentElement('afterend', cap);
    }

    // Videos extra
    const extras = window.CONTENIDO_GALERIA_VIDEOS_EXTRA || [];
    extras.forEach(ex => {
      if (!ex.src) return;
      const item = document.createElement('div');
      item.className = 'sgal-vlist-item';
      item.innerHTML = `
        <div class="sgal-vlist-thumb">${ex.thumb ? `<img src="${ex.thumb}" alt="">` : '<div class="sgal-vlist-ph"></div>'}</div>
        <span>${ex.titulo||''}</span>`;
      item.addEventListener('click', () => {
        const el = main.querySelector('video,iframe');
        if (el && el.tagName === 'VIDEO') el.src = ex.src;
      });
      list.appendChild(item);
    });
  }

  /* ── Teclado: flechas en lightbox ── */
  document.addEventListener('keydown', e => {
    if (!lbEl.classList.contains('open')) return;
    if (e.key === 'ArrowRight') galLbNav(+1);
    if (e.key === 'ArrowLeft')  galLbNav(-1);
  });

  /* ── Arranque ── */
  loadData();
  buildFilters();
  renderGrid();

})();

/* ══════════════════════════════════════════════════════════════════════
   AUTO-CARGA DE MEDIOS DESDE contenido.js
   Lee CONTENIDO_MEDIOS y aplica las fotos/videos definidos
   sin necesidad de usar el input file manual.
══════════════════════════════════════════════════════════════════════ */
(function autoLoadMedia() {
  const M = window.CONTENIDO_MEDIOS;
  if (!M) return;  // sin datos, nada que hacer

  /* Mapa: clave en MEDIOS → { phId, ovId } */
  const BG_MAP = {
    portada:          { phId: 'cov-bg',      ovId: ''           },
    portada_prefab:   { phId: 'cov-bg-pf',   ovId: ''           },
    portada_dur:      { phId: 'cov-bg-dur',  ovId: ''           },
    portada_vf:       { phId: 'cov-bg-vf',   ovId: ''           },
    portada_tx:       { phId: 'cov-bg-tx',   ovId: ''           },
    bg_quienes:       { phId: 'bg1',          ovId: 'ov1'        },
    bg_vision:        { phId: 'bg_qs',        ovId: ''           },
    bg_proyectos:     { phId: 'bg3',          ovId: 'ov3'        },
    bg_pf_productos:  { phId: 'bg_pf_ps',     ovId: 'ov_pf_ps'  },
    bg_pf_cap:        { phId: 'bg_pf_cap',    ovId: 'ov_pf_cap' },
    bg_dur_productos: { phId: 'bg_dur_ps',    ovId: 'ov_dur_ps' },
    bg_dur_cap:       { phId: 'bg_dur_cap',   ovId: 'ov_dur_cap'},
    bg_vf_productos:  { phId: 'bg_vf_ps',     ovId: 'ov_vf_ps'  },
    bg_vf_cap:        { phId: 'bg_vf_cap',    ovId: 'ov_vf_cap' },
    bg_tx_productos:  { phId: 'bg_tx1',       ovId: 'ov_tx1'    },
    bg_tx_cap:        { phId: 'bg_tx3',       ovId: 'ov_tx3'    },
  };

  /* Helper: inyectar imagen de fondo en un placeholder .isl */
  function injectBg(phId, ovId, src) {
    if (!src) return;
    const ph = document.getElementById(phId);
    if (!ph) return;
    const sl = ph.closest('.isl');
    if (!sl) return;

    let img = sl.querySelector('img.ld');
    if (!img) { img = document.createElement('img'); img.className = 'ld'; sl.appendChild(img); }
    img.src = src;
    ph.classList.add('hide');

    if (ovId) {
      const ov = document.getElementById(ovId);
      if (ov && (ovId === 'ov1' || ovId === 'ov3' || ovId === 'ov_tx1' || ovId === 'ov_tx3')) {
        ov.style.background = 'radial-gradient(ellipse 32% 22% at 100% 0%,rgba(7,17,38,.55)0%,rgba(7,17,38,.20)50%,transparent 100%),linear-gradient(to right,rgba(7,17,38,1.0)0%,rgba(7,17,38,.98)11%,rgba(7,17,38,.96)22%,rgba(7,17,38,.94)33%,rgba(7,17,38,.90)44%,rgba(7,17,38,.75)56%,rgba(7,17,38,.65)67%,rgba(7,17,38,.50)78%,rgba(7,17,38,.30)89%,rgba(7,17,38,.20)100%)';
      }
    }
  }

  /* Helper: inyectar imagen en un placeholder de proyecto (.ph label) */
  function injectImg(phId, src) {
    if (!src) return;
    const ph = document.getElementById(phId);
    if (!ph) return;
    const sl = ph.closest('.isl') || ph.closest('.sh-img-slot');
    if (!sl) return;
    let img = sl.querySelector('img.ld');
    if (!img) { img = document.createElement('img'); img.className = 'ld'; sl.appendChild(img); }
    img.src = src;
    ph.classList.add('hide');
    img.onclick = () => olb(img.src);
  }

  /* 1. Fondos y portadas */
  Object.entries(BG_MAP).forEach(([key, { phId, ovId }]) => {
    if (M[key]) injectBg(phId, ovId, M[key]);
  });

  /* 2. Video de portada (reemplaza foto portada si está definido) */
  if (M.video_portada) {
    const ph  = document.getElementById('cov-bg');
    const sl  = ph && ph.closest('.isl');
    if (sl) {
      let vid = sl.querySelector('video.ld-video');
      if (!vid) {
        vid = document.createElement('video');
        vid.className   = 'ld-video ld';
        vid.autoplay    = true;
        vid.loop        = true;
        vid.muted       = true;
        vid.playsInline = true;
        vid.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;';
        sl.appendChild(vid);
      }
      vid.src = M.video_portada;
      if (ph) ph.classList.add('hide');
    }
  }

  /* 3. Fotos de proyectos — buscar por data-title en las tarjetas */
  if (M.proyectos) {
    /* Tarjetas de carrusel: .ap-name dentro de .ap-card */
    document.querySelectorAll('.ap-card').forEach(card => {
      const nameEl = card.querySelector('.ap-name');
      if (!nameEl) return;
      const title = nameEl.textContent.trim();
      const src   = M.proyectos[title];
      if (!src) return;
      const label = card.querySelector('label.ph');
      if (label) injectImg(label.id, src);
    });

    /* Tarjetas de portafolio tipo sp-card (grid 3×2) */
    document.querySelectorAll('.sp-card').forEach(card => {
      const nameEl = card.querySelector('.sp-name');
      if (!nameEl) return;
      const title = nameEl.textContent.trim();
      const src   = M.proyectos[title];
      if (!src) return;
      const label = card.querySelector('label.ph');
      if (label) injectImg(label.id, src);
    });
  }

})();

/* ── Logo independiente por portada de unidad (cada una carga su propio logo) ── */
function upLogoUnit(input, imgId, phId) {
  const f = input.files[0]; if(!f) return;
  const r = new FileReader();
  r.onload = ev => {
    const img = document.getElementById(imgId);
    const ph  = document.getElementById(phId);
    if(img){ img.src = ev.target.result; img.style.display = 'block'; }
    if(ph) { ph.style.display = 'none'; }
  };
  r.readAsDataURL(f);
}

/* ── PORTADA EDITORIAL: logo (ya no usado para unidades) ── */
function upLogoTumex(input) {
  const f = input.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = ev => {
    /* Sincroniza segundo logo en las 4 portadas de unidades de negocio */
    document.querySelectorAll('.c0-logo-img').forEach(img => {
      img.src = ev.target.result;
      img.style.display = 'block';
    });
    document.querySelectorAll('.c0-logo-ph').forEach(ph => {
      ph.style.display = 'none';
    });
  };
  r.readAsDataURL(f);
}

/* ── Página 1 (portada editorial): toggle datos cliente ── */
function toggleC0Client() {
  const client = document.getElementById('c0Client');
  const btn    = document.getElementById('c0ClientBtn');
  const showing = client.classList.toggle('visible');
  btn.style.display = showing ? 'none' : (toolsVisible ? '' : 'none');
  if (showing) setTimeout(() => client.querySelector('.c0-cv').focus(), 40);
}
/* ── Portada TUMEX: toggle datos cliente ── */
function toggleC0ClientTx() {
  const client = document.getElementById('c0ClientTx');
  const btn    = document.getElementById('c0ClientBtnTx');
  const showing = client.classList.toggle('visible');
  btn.style.display = showing ? 'none' : (toolsVisible ? '' : 'none');
  if (showing) setTimeout(() => client.querySelector('.c0-cv').focus(), 40);
}

/* ── Página 2 (propuesta comercial): toggle datos cliente ── */
function toggleS1Client() {
  const client = document.getElementById('s1Client');
  const btn = document.getElementById('s1ToggleBtn');
  const showing = client.classList.toggle('visible');
  btn.style.display = showing ? 'none' : (toolsVisible ? '' : 'none');
  if (showing) setTimeout(() => client.querySelector('.s1-cv').focus(), 40);
}

/* ── TOGGLE BARRA DE HERRAMIENTAS ── */
/* Ocultos por defecto — el botón ⚙ los muestra */
let toolsVisible = false;
document.getElementById('toggleBtn').classList.add('tools-hidden');
/* "Agregar datos del cliente" oculto por defecto, visible solo con herramientas */
const _s1Btn = document.getElementById('s1ToggleBtn');
if (_s1Btn) _s1Btn.style.display = 'none';

function toggleTools() {
  const bar       = document.getElementById('toolsbar');
  const btn       = document.getElementById('toggleBtn');
  const s1Btn     = document.getElementById('s1ToggleBtn');
  const c0Btn     = document.getElementById('c0ClientBtn');
  const c0BtnTx   = document.getElementById('c0ClientBtnTx');
  toolsVisible = !toolsVisible;
  document.body.classList.toggle('tools-active', toolsVisible);
  bar.style.display = toolsVisible ? 'flex' : 'none';
  if (c0Btn) {
    const c0Open = document.getElementById('c0Client').classList.contains('visible');
    c0Btn.style.display = (toolsVisible && !c0Open) ? '' : 'none';
  }
  if (c0BtnTx) {
    const c0TxOpen = document.getElementById('c0ClientTx').classList.contains('visible');
    c0BtnTx.style.display = (toolsVisible && !c0TxOpen) ? '' : 'none';
  }
  if (s1Btn) {
    const s1Open = document.getElementById('s1Client').classList.contains('visible');
    s1Btn.style.display = (toolsVisible && !s1Open) ? '' : 'none';
  }
  btn.title = toolsVisible ? 'Ocultar herramientas' : 'Mostrar herramientas';
  btn.classList.toggle('tools-hidden', !toolsVisible);
}

/* ══════════════════════════════════════════════════════════════════════
   PANEL EDITOR DE USUARIO
   Permite cambiar cliente y contacto — se guarda en localStorage.
══════════════════════════════════════════════════════════════════════ */
(function initUserEditor() {

  const STORAGE_KEY = 'itisa_user_prefs';

  /* ── Leer preferencias guardadas ── */
  function loadPrefs() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch(e) { return {}; }
  }

  /* ── Guardar preferencias ── */
  function savePrefs(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
    catch(e) { console.warn('localStorage no disponible'); }
  }

  /* ── Aplicar valores a la presentación ── */
  function applyPrefs(p) {
    if (!p) return;

    /* Nombre del cliente — portada principal, portada TUMEX y slide cliente */
    if (p.cliente) {
      document.querySelectorAll('.c0-cv[data-field="cliente"], .s1-cv[data-field="cliente"]')
        .forEach(el => el.textContent = p.cliente);
      /* contenteditable genérico con texto "Nombre del cliente" */
      document.querySelectorAll('.c0-cv[contenteditable], .s1-cv[contenteditable]').forEach(el => {
        if (el.textContent.trim() === 'Nombre del cliente' || el.dataset.field === 'cliente')
          el.textContent = p.cliente;
      });
    }

    /* Fecha */
    if (p.fecha) {
      document.querySelectorAll('.c0-cv[contenteditable]').forEach(el => {
        if (/^\d{4}$/.test(el.textContent.trim()) || el.dataset.field === 'fecha')
          el.textContent = p.fecha;
      });
    }

    /* Email */
    if (p.email) {
      const el = document.getElementById('ct-email');
      if (el) el.textContent = p.email;
    }

    /* Teléfono */
    if (p.tel) {
      const el = document.getElementById('ct-tel');
      if (el) el.textContent = p.tel;
    }
  }

  /* ── Poblar inputs del panel con valores actuales ── */
  function populateInputs(p) {
    const set = (id, val) => { const el = document.getElementById(id); if (el && val) el.value = val; };
    set('ued-cliente', p.cliente || '');
    set('ued-fecha',   p.fecha   || '');
    set('ued-email',   p.email   || (window.CONTENIDO_EMPRESA && window.CONTENIDO_EMPRESA.email) || '');
    set('ued-tel',     p.tel     || (window.CONTENIDO_EMPRESA && window.CONTENIDO_EMPRESA.telefono) || '');
  }

  /* ── Toggle panel ── */
  window.uedToggle = function() {
    const panel    = document.getElementById('uedPanel');
    const backdrop = document.getElementById('uedBackdrop');
    const isOpen   = panel.classList.contains('open');
    panel.classList.toggle('open', !isOpen);
    backdrop.classList.toggle('open', !isOpen);
    if (!isOpen) populateInputs(loadPrefs());
  };

  /* ── Guardar ── */
  window.uedSave = function() {
    const get = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    const prefs = {
      cliente: get('ued-cliente'),
      fecha:   get('ued-fecha'),
      email:   get('ued-email'),
      tel:     get('ued-tel'),
    };
    savePrefs(prefs);
    applyPrefs(prefs);

    /* Mostrar confirmación */
    const saved = document.getElementById('uedSaved');
    if (saved) {
      saved.style.display = 'block';
      saved.style.animation = 'none';
      setTimeout(() => { saved.style.animation = 'uedFade 2s forwards'; }, 10);
      setTimeout(() => { saved.style.display = 'none'; }, 2200);
    }
  };

  /* ── Restablecer ── */
  window.uedReset = function() {
    if (!confirm('¿Restablecer todos los campos a los valores originales?')) return;
    localStorage.removeItem(STORAGE_KEY);
    /* Limpiar inputs */
    ['ued-cliente','ued-fecha','ued-email','ued-tel'].forEach(id => {
      const el = document.getElementById(id); if (el) el.value = '';
    });
    /* Restaurar valores desde contenido.js */
    const emp = window.CONTENIDO_EMPRESA || {};
    const emailEl = document.getElementById('ct-email');
    const telEl   = document.getElementById('ct-tel');
    if (emailEl && emp.email)    emailEl.textContent = emp.email;
    if (telEl   && emp.telefono) telEl.textContent   = emp.telefono;
    /* Restaurar "Nombre del cliente" */
    document.querySelectorAll('.c0-cv[contenteditable], .s1-cv[contenteditable]').forEach(el => {
      if (el.closest('.c0-cf') || el.closest('.s1-cf')) el.textContent = 'Nombre del cliente';
    });
  };

  /* ── Arranque: aplicar prefs guardadas al cargar ── */
  const saved = loadPrefs();
  if (Object.keys(saved).length > 0) applyPrefs(saved);

})();
