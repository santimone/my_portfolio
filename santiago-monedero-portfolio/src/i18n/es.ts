import { profile } from '../data/profile'
import type { Dict } from './types'

export const es: Dict = {
  meta: {
    title: `${profile.name} — Desarrollador full stack, web y mobile`,
    description:
      'Desarrollo full stack con React, TypeScript, NestJS, PostgreSQL y Prisma, además de apps React Native para iOS, Android y Android TV. Freelance, desde Buenos Aires.',
  },

  nav: {
    stack: 'stack',
    services: 'servicios',
    how: 'cómo funciona',
    work: 'trabajos',
    hire: 'contratame',
  },

  lang: {
    switchLabel: 'Idioma',
    en: 'EN',
    es: 'ES',
  },

  appearance: {
    night: 'noche',
    day: 'día',
    toDay: 'Cambiar a modo día',
    toNight: 'Cambiar a modo noche',
  },

  cta: {
    primary: 'empecemos un proyecto →',
    secondary: 'ver el stack',
  },

  heroField: {
    kicker: `${profile.name.toLowerCase()} — buenos aires · remoto`,
    headline: ['Web y mobile,', 'de punta a punta.'],
    body: 'Desarrollador full stack en Buenos Aires — React y TypeScript adelante, NestJS y PostgreSQL detrás, React Native cuando el producto necesita una app. Movés el cursor: cada nodo es parte del stack.',
    panelLabel:
      'Panel shoji de madera iluminado desde atrás. Al mover el cursor, la luz lo sigue y cada nodo de la celosía muestra una parte del stack.',
  },

  stack: {
    eyebrow: '01 — el stack',
    heading: 'El stack con el que trabajo',
    views: { tree: 'árbol', depth: 'nivel', graph: 'grafo' },
    itemsSuffix: 'ítems',
    graphHint: 'arrastrá cualquier nodo para explorar el stack',
    groups: [
      {
        dir: 'frontend/',
        items: [
          { name: 'React', note: 'a diario' },
          { name: 'TypeScript', note: 'a diario' },
          { name: 'JavaScript ES6+', note: 'a diario' },
          { name: 'HTML5 / CSS3', note: 'grid, flex' },
          { name: 'Bootstrap', note: 'UI rápida' },
        ],
      },
      {
        dir: 'backend/',
        items: [
          { name: 'NestJS', note: 'modular' },
          { name: 'Express.js', note: 'APIs livianas' },
          { name: 'Node.js', note: 'runtime' },
          { name: 'diseño REST', note: 'validación' },
          { name: 'webhooks', note: 'pagos' },
        ],
      },
      {
        dir: 'data/',
        items: [
          { name: 'PostgreSQL', note: 'esquema, queries' },
          { name: 'Prisma', note: 'migraciones' },
          { name: 'Sanity.io', note: 'CMS headless' },
          { name: 'Mercado Pago', note: 'integración' },
        ],
      },
      {
        dir: 'mobile/',
        items: [
          { name: 'React Native', note: 'a diario' },
          { name: 'Expo + EAS', note: 'builds, OTA' },
          { name: 'Android TV / tvOS', note: 'navegación por foco' },
          { name: 'pipelines nativos', note: 'firmas, stores' },
          { name: 'estado offline', note: 'persistencia' },
        ],
      },
      {
        dir: 'tooling/',
        items: [
          { name: 'Git', note: 'a diario' },
          { name: 'Bash / shell', note: 'automatización' },
          { name: 'VS Code', note: 'mi casa' },
          { name: 'Figma', note: 'handoff' },
          { name: 'Python', note: 'scripting' },
          { name: 'C / C++', note: 'fundamentos' },
        ],
      },
    ],
    depth: [
      {
        key: 'rn',
        name: 'React Native + Expo',
        label: 'a diario · producción',
        note: 'Apps multiplataforma en las stores, módulos nativos propios, pipelines de build con EAS.',
      },
      {
        key: 'react',
        name: 'React',
        label: 'a diario · producción',
        note: 'Arquitectura de componentes, estado y performance en apps web en producción.',
      },
      {
        key: 'ts',
        name: 'TypeScript',
        label: 'a diario · producción',
        note: 'Estructuras tipadas, contratos de API y esquemas de Prisma.',
      },
      {
        key: 'node',
        name: 'Node.js / Express',
        label: 'producción',
        note: 'Servicios REST, middleware, autenticación e integraciones con terceros.',
      },
      {
        key: 'nest',
        name: 'NestJS',
        label: 'producción',
        note: 'Arquitectura modular, inyección de dependencias y validación por DTO.',
      },
      {
        key: 'pg',
        name: 'PostgreSQL + Prisma',
        label: 'producción',
        note: 'Modelado relacional, migraciones y caminos de escritura de alto volumen.',
      },
      {
        key: 'tv',
        name: 'Interfaces para Android TV',
        label: 'publicado',
        note: 'Navegación espacial por foco, control remoto y layouts a tres metros.',
      },
      {
        key: 'cms',
        name: 'Sanity / CMS headless',
        label: 'publicado',
        note: 'Modelado de contenido desacoplado de la interfaz.',
      },
      {
        key: 'git',
        name: 'Git / Bash / CI',
        label: 'a diario',
        note: 'Disciplina de ramas, automatización con shell y scripts de release.',
      },
      {
        key: 'systems',
        name: 'Python · C · C++',
        label: 'de apoyo',
        note: 'Scripting, manejo de datos y fundamentos de sistemas.',
      },
    ],
  },

  services: {
    eyebrow: '02 — servicios',
    heading: 'Lo que puedo construir para vos',
    items: [
      {
        num: '/01',
        title: 'Aplicaciones web',
        body: 'Front ends en React y TypeScript, desde un producto de cara al cliente hasta el panel de administración y las vistas de reportes que usa tu equipo todos los días.',
        tags: ['React', 'TypeScript'],
      },
      {
        num: '/02',
        title: 'APIs y backends',
        body: 'Servicios en NestJS o Express con contratos tipados, entrada validada y un esquema de PostgreSQL diseñado en función de las consultas que va a tener que responder.',
        tags: ['NestJS', 'Prisma', 'PostgreSQL'],
      },
      {
        num: '/03',
        title: 'Apps mobile, del cero a la store',
        body: 'Una app React Native sobre Expo, publicada en iOS y Android, incluyendo el pipeline de build, la firma de código y las actualizaciones OTA.',
        tags: ['React Native', 'Expo', 'EAS'],
      },
      {
        num: '/04',
        title: 'Pagos e integraciones',
        body: 'Mercado Pago y pasarelas similares integradas de punta a punta: preferencias, redirecciones, webhooks, idempotencia y los estados de error que vienen después.',
        tags: ['Mercado Pago', 'webhooks'],
      },
      {
        num: '/05',
        title: 'Apps para Smart TV y Android TV',
        body: 'Interfaces manejadas por control remoto, con navegación espacial por foco y layouts pensados para verse desde el otro lado del living.',
        tags: ['Android TV', 'navegación por foco'],
      },
      {
        num: '/06',
        title: 'Sitios manejados por contenido',
        body: 'Sanity u otro CMS headless detrás de un front React rápido, para que tu equipo publique contenido sin un desarrollador y sin un deploy.',
        tags: ['Sanity.io', 'React'],
      },
    ],
  },

  trace: {
    eyebrow: '03 — un pedido, de punta a punta',
    heading: 'Seguí un solo pedido a través de todo el stack',
    stages: [
      {
        num: '01',
        name: 'Cliente',
        tech: 'React · React Native',
        headline: 'Un formulario en el navegador, o un toque en la app',
        body: 'La misma lógica de interfaz corre en React en la web y en React Native en iOS, Android y Android TV. La validación, las actualizaciones optimistas y el estado offline se resuelven antes de que el pedido salga del cliente.',
        file: 'src/checkout/Checkout.tsx',
        code: 'const submit = async () => {\n  setPending(true)\n  const res = await api.post(\n    "/orders", { items, method }\n  )\n  goTo("status", { id: res.id })\n}',
      },
      {
        num: '02',
        name: 'Capa de API',
        tech: 'NestJS · Express',
        headline: 'Un endpoint tipado que valida antes de aceptar',
        body: 'Los módulos de NestJS mantienen la superficie chica: un controlador, un DTO que valida el body y un servicio dueño de las reglas. Nada llega a la base de datos con una forma que no esperaba.',
        file: 'src/orders/orders.controller.ts',
        code: '@Post()\n@UsePipes(new ValidationPipe())\ncreate(@Body() dto: CreateOrderDto) {\n  return this.orders.create(dto)\n}',
      },
      {
        num: '03',
        name: 'Lógica de negocio',
        tech: 'Capa de servicios',
        headline: 'Donde viven las reglas del producto',
        body: 'Precios, disponibilidad, creación de la intención de pago y reintentos. Es la capa que vale la pena escribir con cuidado, porque cada cliente de la API hereda las decisiones que se toman acá.',
        file: 'src/orders/orders.service.ts',
        code: 'async create(dto: CreateOrderDto) {\n  const total = price(dto.items)\n  const pay = await mp.preference(total)\n  return this.db.order.create({\n    data: { ...dto, total, ref: pay.id }\n  })\n}',
      },
      {
        num: '04',
        name: 'Capa de datos',
        tech: 'Prisma · PostgreSQL',
        headline: 'Un esquema pensado para la próxima feature',
        body: 'Los modelos de Prisma describen las tablas, las migraciones las mueven hacia adelante sin romper nada, y los índices se eligen según las consultas que la aplicación realmente ejecuta.',
        file: 'prisma/schema.prisma',
        code: 'model Order {\n  id      String  @id @default(cuid())\n  total   Decimal\n  status  Status  @default(PENDING)\n  ref     String  @unique\n  @@index([status, createdAt])\n}',
      },
      {
        num: '05',
        name: 'De vuelta al cliente',
        tech: 'Webhooks · OTA',
        headline: 'La pasarela responde y el cliente se actualiza',
        body: 'Mercado Pago publica el resultado en un webhook, la orden cambia de estado y tanto la app web como la mobile lo reflejan. Expo OTA entrega los arreglos de mobile sin esperar la revisión de la store.',
        file: 'src/payments/webhook.controller.ts',
        code: '@Post("mp")\nasync webhook(@Body() body: MpEvent) {\n  await this.orders.settle(body.data.id)\n  return { received: true }\n}',
      },
    ],
  },

  work: {
    eyebrow: '04 — trabajos seleccionados',
    heading: 'Trabajos recientes, dentro de lo que permite el NDA',
    intro:
      'Casi todo lo que hice pertenece a empleadores y clientes, así que cada entrada describe el problema y lo que construí — sin logos ni capturas.',
    labels: { problem: 'problema', approach: 'qué hice', stack: 'stack' },
    own: {
      heading: 'Proyectos propios',
      sub: 'mis apps, cada una con su temática particular',
      viewCase: 'ver el caso →',
      close: 'cerrar',
      sampleData: 'datos de ejemplo',
      projects: [
        {
          id: 'al-cierre',
          kicker: 'proyecto propio · 2026 · diseño, backend y frontend',
          title: 'Al Cierre',
          tagline: 'Cuánto llevo gastado antes de que cierre la tarjeta.',
          problem:
            'Las alertas de consumo llegan por mail, el resumen llega en PDF con contraseña después del cierre y Mercado Pago está aparte. No había una vista del ciclo de facturación en curso.',
          approach:
            'Una web app que junta dos tarjetas de crédito y Mercado Pago, corrige rechazos, duplicados, reversas y cuotas, y muestra el gasto por ciclo y por rubro. Los parsers y las reglas de reconciliación están testeados en Node.',
          tags: ['Google Apps Script', 'Google Sheets', 'Gmail', 'Drive', 'Mercado Pago API', 'pdf.js', 'HTML/CSS/JS', 'clasp', 'Node (tests)'],
          note: 'la app y el repo son privados: tienen datos financieros reales',
          detail: {
            meta: [
              { k: 'Tipo', v: 'Proyecto propio, de uso personal' },
              { k: 'Rol', v: 'Diseño, backend y frontend' },
              { k: 'Año', v: '2026' },
              { k: 'Corre en', v: 'Google Apps Script + Sheets, sin servidor propio' },
            ],
            sections: [
              {
                heading: 'El problema',
                body: 'Cada compra con tarjeta manda un mail de alerta en el momento. El resumen llega recién después del cierre, en un PDF con contraseña, y Mercado Pago tiene su propia app. Para saber cuánto llevaba gastado en el ciclo había que sumar a mano, y los mails no cuentan todo: hay rechazos, compras repetidas, reversas y cuotas que el mail no aclara.',
              },
              {
                heading: 'De dónde sale cada número',
                items: [
                  { k: 'Alertas por mail', v: 'Cada 30 minutos lee Gmail y parsea las alertas de los dos procesadores de pago, cada uno con su formato.' },
                  { k: 'Resumen del banco', v: 'El PDF viene encriptado. Se abre en el navegador con pdf.js y se cruza con las alertas: saldo, pago mínimo y el cuadro de cuotas a vencer.' },
                  { k: 'Mercado Pago', v: 'Todos los días a las 6 pide a la API el reporte de dinero en cuenta, lo baja a Drive y lo importa. Los reintegros se descuentan solos.' },
                ],
              },
              {
                heading: 'Un solo recálculo',
                items: [
                  { k: 'Guardar lo leído', v: 'Cada mail o movimiento queda guardado una vez, con lo extraído. Es la fuente de verdad y evita duplicar.' },
                  { k: 'Reconciliar', v: 'Rechazos, duplicados, reversas, devoluciones, cuotas y cobros posiblemente repetidos.' },
                  { k: 'Asignar al ciclo', v: 'Cada movimiento cae en su ciclo según la fecha de cierre real, no la del calendario.' },
                  { k: 'Mostrar y avisar', v: 'La web app lee el resultado y los viernes a las 9 llega un resumen por mail.' },
                ],
              },
              {
                heading: 'Lo que el mail no dice',
                body: 'Las alertas no son el resumen. Todo lo que la app corrige queda en una lista de observaciones para revisar: un posible cobro repetido, una compra rechazada que no suma, una reversa ya descontada o una compra que se presenta después del cierre y pasa al ciclo siguiente.',
              },
              {
                heading: 'Decisiones',
                items: [
                  { k: 'Sheets como base de datos', v: 'Cero costo, se puede abrir y corregir a mano, y la app respeta esas correcciones en cada recálculo.' },
                  { k: 'Solo el dueño entra', v: 'La web app se publica con acceso restringido y además chequea el mail de quien la abre. El token de Mercado Pago vive en las propiedades del script.' },
                  { k: 'Lógica pura, testeada en Node', v: 'Parsers, reconciliación y ciclos no tocan servicios de Google, así que corren en Node con tests sin dependencias.' },
                  { k: 'Recalcular siempre desde cero', v: 'Lo leído se guarda una vez y lo que se muestra se regenera entero. Cambiar una regla y reprocesar meses de mails es un botón.' },
                ],
              },
              {
                heading: 'Diseño',
                body: 'La rama del ciclo: una flor por día que pasó, del tamaño de lo que se gastó ese día, y pimpollos para los días que faltan hasta el cierre. Las inversiones se dibujan como una flor en la que cada pétalo es su parte del total.',
              },
            ],
            tradeoffs: {
              heading: 'Por qué Apps Script y no un backend',
              prosHeading: 'Lo que resolvió',
              pros: [
                { k: 'Gmail sin OAuth propio', v: 'El script corre como el dueño de la cuenta y lee el correo directo, sin registrar una app OAuth ni pasar la verificación de Google.' },
                { k: 'Tareas programadas incluidas', v: 'Los triggers reemplazan a un cron: Gmail cada 30 minutos, Mercado Pago a las 6 y el resumen los viernes a las 9.' },
                { k: 'Login gratis', v: 'Acceso solo para el dueño, sin armar usuarios, sesiones ni contraseñas.' },
                { k: 'Costo cero', v: 'No hay hosting, base de datos ni dominio que pagar.' },
              ],
              consHeading: 'Lo que se resignó',
              cons: [
                { k: 'Límites de ejecución', v: 'Cada ejecución tiene minutos contados. Las importaciones largas usan un lock y guardan el trabajo en pasos.' },
                { k: 'Sin npm en el servidor', v: 'pdf.js corre en el navegador.' },
                { k: 'Deploy más manual', v: 'La web app sirve una versión fija: después de cada clasp push hay que redeployar.' },
                { k: 'Tests separados', v: 'La lógica de negocio vive en archivos que no usan servicios de Google, para poder correrla en Node.' },
              ],
              verdict:
                'Para una sola persona con datos privados, la cuenta cierra a favor de Apps Script. Para varios usuarios, convendría un backend convencional.',
            },
          },
        },
        {
          id: 'creator-hub',
          kicker: 'proyecto propio · 2026 · beta cerrada',
          title: 'Creator Hub',
          tagline: 'Subí un video una vez. Publicalo en tres redes.',
          problem:
            'Publicar el mismo clip vertical en tres redes era subirlo tres veces, convertirlo a mano, programar donde la API no deja y comparar el rendimiento en tres paneles que miden distinto.',
          approach:
            'Una web app para streamers en Cloudflare Workers: el video se sube una vez a R2, FFmpeg lo convierte solo si hace falta, un workflow por red lo publica o programa con reintentos, y un recolector lee las métricas para compararlas por horas desde la publicación.',
          tags: ['Cloudflare Workers', 'Hono', 'D1 + Drizzle', 'R2', 'Queues · Workflows · Cron', 'Containers + FFmpeg', 'React 19 + Vite', 'Tailwind 4', 'TanStack Query', 'TypeScript + zod', 'Vitest + Biome'],
          note: 'beta cerrada para un grupo chico de streamers',
          detail: {
            meta: [
              { k: 'Tipo', v: 'App web, beta cerrada para streamers' },
              { k: 'Rol', v: 'Diseño, backend y frontend' },
              { k: 'Año', v: '2026' },
              { k: 'Corre en', v: 'Cloudflare Workers, con FFmpeg en un contenedor' },
            ],
            sections: [
              {
                heading: 'El problema',
                body: 'Un streamer que recorta un momento del directo quiere subirlo a las tres redes de video vertical. Eso era abrir tres apps, cargar el mismo texto con los límites de cada una, exportar el video en el formato que pide cada red y, al final, mirar tres paneles que miden las vistas de forma distinta.',
                items: [
                  { k: 'Subir tres veces', v: 'Mismo archivo, tres subidas. Si venía en horizontal o en HEVC, había que convertirlo a mano.' },
                  { k: 'Programar a mano', v: 'Instagram no deja programar por API: publicar a las 18 h en las tres redes dependía de estar frente a la compu.' },
                  { k: 'Comparar a ojo', v: 'Un Reel de hace dos días contra un Short de hace una semana no dice nada.' },
                ],
              },
              {
                heading: 'Cómo funciona',
                items: [
                  { k: 'Subida desde el navegador', v: 'El archivo viaja en partes de 32 MB a R2. Una parte que falla se reintenta sola, y la subida se rechaza antes del primer byte si no entra en el cupo.' },
                  { k: 'Clips de Twitch', v: 'Se importa un clip del canal, se recorta y se pasa a vertical con la cámara arriba y el juego abajo.' },
                  { k: 'Leer y convertir', v: 'Una cola manda el archivo a un contenedor con FFmpeg. Si ya es 1080×1920 en H.264, sale tal cual; si no, se encuadra sobre un fondo desenfocado.' },
                  { k: 'Publicar', v: 'Un workflow por red y por intento: preparar, subir, esperar que la red lo procese y confirmar, con hasta 3 reintentos.' },
                  { k: 'Medir', v: 'Cada hora las primeras 48 h, cada día hasta los 30 y cada semana hasta los 90, guardando las horas que pasaron desde la publicación.' },
                ],
              },
              {
                heading: 'Tres piezas que hacen el trabajo pesado',
                items: [
                  { k: 'Seguimiento por red', v: 'Cada red publica por su cuenta y nunca dos veces: antes de reintentar se consulta la red con el ID guardado. Solo se reintentan los errores temporales.' },
                  { k: 'Comparador', v: 'Pone cada publicación en el mismo eje de horas desde que salió, así un Reel de las 21 h y un Short de las 18 h se comparan parejo, y elige un ganador por criterio.' },
                  { k: 'Cupos y frenos', v: 'R2 es gratis hasta 10 GB y Cloudflare no corta el servicio, solo avisa. Así que la app se frena sola: cupo por cuenta, tope global, minutos de FFmpeg y la cuota diaria de YouTube.' },
                ],
              },
              {
                heading: 'Decisiones',
                items: [
                  { k: 'Un solo Worker', v: 'Sirve la API y la web en el mismo dominio, con cookie HttpOnly y sin CORS. Login con Twitch o Google, y cada alta la aprueba un admin.' },
                  { k: 'Programar es cambiar una fecha', v: 'Un Cron por minuto despacha los trabajos vencidos. Reprogramar, también arrastrando en el calendario, es editar una fecha.' },
                  { k: 'Adaptadores simulados primero', v: 'Cada red tiene un adaptador falso con los mismos estados y errores que el real, para probar los casos raros.' },
                  { k: 'Tokens cifrados', v: 'Los accesos a cada red se guardan con AES-256-GCM y una versión de clave para poder rotarla.' },
                  { k: 'Null, no cero', v: 'Lo que una red no informa queda vacío con su motivo. TikTok no da vistas diarias de la cuenta, así que no se suman.' },
                  { k: 'Monorepo tipado', v: 'Tipos y esquemas zod compartidos entre la API y la web, y unos 300 tests con Vitest sobre el runtime de Workers.' },
                ],
              },
            ],
          },
        },
      ],
      alCierre: {
        cycle: 'Ciclo de octubre',
        range: '26/09 al 29/10 · datos de ejemplo',
        start: 'Inicio sáb 26/09',
        close: 'Cierre jue 29/10',
        todaySummary: 'Día {day} de {total} · llevás gastado en el ciclo',
        daySpent: 'gasto del día',
        dayNone: 'sin gasto',
        dayFuture: 'todavía no llegó',
        todayTag: 'hoy',
        bud: 'pimpollo',
        hint: 'Una flor por día que pasó, del tamaño de lo gastado ese día, y pimpollos hasta el cierre. Pasá el cursor por una flor.',
      },
      creatorHub: {
        clip: 'Clutch 1v4 en la final',
        publish: 'Publicar en las 3 redes',
        publishing: 'publicando…',
        restart: 'volver a empezar',
        cloudNote: 'Podés cerrar la pestaña: la publicación sigue en la nube. Datos de ejemplo.',
        status: {
          ready: 'Lista',
          preparing: 'Preparando',
          uploading: 'Subiendo',
          processing: 'Publicando',
          published: 'Publicado',
        },
        notes: {
          ready: 'Esperando que toques Publicar',
          preparing: 'Leyendo el video con ffprobe',
          uploading: 'Subida reanudable desde R2',
          processing: 'La red está procesando el video',
          publishedYouTube: '1 intento · subida reanudable desde R2',
          publishedInstagram: '1 intento · el video bajó de un link firmado',
          privateTikTok: 'Se publicó en privado: la app todavía está en revisión por TikTok',
        },
      },
    },
    clientsHeading: 'Para clientes y empleadores',
    cases: [
      {
        num: '01',
        title: 'Sistema de predicciones en vivo con seguimiento',
        meta: 'Escrituras de alto volumen · evaluación en tiempo real',
        problem:
          'Miles de personas enviando predicciones durante un evento en vivo, todas para guardar, puntuar y mostrar de vuelta mientras el evento seguía en curso.',
        approach:
          'Diseñé un esquema de PostgreSQL para envíos de alto volumen y armé el camino de evaluación que puntúa las entradas y actualiza las posiciones en tiempo real.',
        tags: ['PostgreSQL', 'Node.js', 'React', 'Prisma'],
      },
      {
        num: '02',
        title: 'Pasarela de pagos integrada a una plataforma de gestión',
        meta: 'Mercado Pago · webhooks · NestJS',
        problem:
          'Las transacciones se conciliaban a mano, así que el estado siempre estaba desactualizado y los errores eran caros de corregir.',
        approach:
          'Implementé el flujo de pago de punta a punta — creación de la preferencia, manejo de la redirección y listeners de webhook que mueven la orden entre estados de forma automática e idempotente.',
        tags: ['NestJS', 'Mercado Pago', 'webhooks', 'PostgreSQL'],
      },
      {
        num: '03',
        title: 'CMS headless detrás de una plataforma de marketing',
        meta: 'Sanity.io · front end en React',
        problem:
          'Cada cambio de contenido requería un desarrollador y un deploy, lo que volvía lento al equipo y convertía al desarrollador en cuello de botella.',
        approach:
          'Integré Sanity.io como capa de contenido, modelé los esquemas según cómo escribe realmente el equipo y desacoplé la administración de la interfaz de la aplicación.',
        tags: ['Sanity.io', 'React', 'TypeScript'],
      },
      {
        num: '04',
        title: 'App multiplataforma publicada en iOS y Android',
        meta: 'React Native · Expo · producto de cara al cliente',
        problem:
          'Un cliente necesitaba un solo producto en las dos stores, con un equipo chico y sin la opción de mantener dos bases de código nativas.',
        approach:
          'Construí y publiqué una app React Native sobre Expo, con componentes de UI propios, estado persistido y un pipeline nativo que resuelve la firma y el envío a las stores.',
        tags: ['React Native', 'Expo', 'EAS', 'TypeScript'],
      },
      {
        num: '05',
        title: 'Interfaz para Smart TV pensada para el control remoto',
        meta: 'React Native para Android TV · UI a tres metros',
        problem:
          'La TV es otro producto: no hay touch, hay un D-pad y alguien mirando a tres metros. Los layouts y el foco pensados para mobile no se trasladan.',
        approach:
          'Desarrollé una app React Native para Android TV resolviendo navegación espacial por foco, mapeo del control remoto y layouts optimizados para pantallas grandes y distancia de visión larga.',
        tags: ['React Native', 'Android TV', 'navegación por foco'],
      },
    ],
  },

  about: {
    eyebrow: '05 — sobre mí',
    heading: 'Las partes de un proyecto que asumo',
    paragraphs: [
      'Pipelines de build, máquinas de estado de webhooks, migraciones de esquema, navegación por foco en un control remoto — las partes de un proyecto que son fáciles de postergar y caras de hacer mal. Ese es el trabajo en el que soy bueno, y es la razón por la que los clientes siguen después del primer proyecto.',
      'Full-time trabajo en mobile: React Native y Expo, publicados en iOS, Android y Android TV. Lo freelance es sobre todo web y full stack: React y TypeScript adelante, NestJS o Express detrás, PostgreSQL y Prisma debajo, Sanity para contenido y Mercado Pago cuando hay pagos de por medio.',
    ],
    facts: [
      { k: 'full-time', v: 'Desarrollador mobile' },
      { k: 'freelance', v: 'Web y full stack, disponible' },
      { k: 'ubicación', v: `Buenos Aires · ${profile.utcOffsetLabel}` },
      { k: 'idiomas', v: 'Español · Inglés' },
    ],
    terminalEyebrow: 'probalo — escribí un comando',
  },

  terminal: {
    title: 'guest@portfolio — zsh',
    welcome: 'Bienvenido. Esta terminal funciona — escribí `help` para ver los comandos.',
    helpIntro: 'comandos disponibles:',
    help: [
      { cmd: 'whoami', desc: 'quién está detrás de esta página' },
      { cmd: 'stack', desc: 'todo con lo que trabajo' },
      { cmd: 'web', desc: 'el lado web y full stack' },
      { cmd: 'mobile', desc: 'la especialización mobile' },
      { cmd: 'projects', desc: 'lo que construí' },
      { cmd: 'rates', desc: 'cómo funcionan los contratos' },
      { cmd: 'contact', desc: 'cómo contactarme' },
      { cmd: 'sudo hire', desc: 'el camino rápido' },
      { cmd: 'lang', desc: 'cambiar español / inglés' },
      { cmd: 'clear', desc: 'limpiar la pantalla' },
    ],
    whoami: [
      'Desarrollador full stack — web y mobile, freelance y por contrato.',
      'React y TypeScript adelante; NestJS, PostgreSQL y Prisma detrás.',
    ],
    web: [
      'React + TypeScript — apps web, paneles de administración y reportes.',
      'APIs en NestJS o Express con contratos tipados y entrada validada,',
      'PostgreSQL y Prisma debajo, Sanity cuando hay contenido de por medio.',
    ],
    mobile: [
      'React Native + Expo — iOS, Android, Android TV.',
      'Módulos nativos propios, builds con EAS, actualizaciones OTA, envío a stores,',
      'persistencia offline y navegación espacial por foco para controles remotos.',
    ],
    stackHint: 'frontend/  backend/  data/  mobile/  tooling/',
    projectsNote: 'Los detalles están en la sección de trabajos — casi todo está bajo NDA.',
    rates: [
      'alcance fijo  — entregable definido, precio cerrado',
      'retainer      — bloque mensual de horas, respuesta prioritaria',
      'consultoría   — por hora, revisiones de arquitectura y desbloqueos',
    ],
    contactLocation: `Buenos Aires · ${profile.utcOffsetLabel} · remoto · ES/EN`,
    sudoPrompt: '[sudo] password for guest: ********',
    sudoGranted: 'acceso concedido.',
    sudoWhere: `Bajá al formulario de contacto, o escribime a ${profile.email}.`,
    ls: 'frontend/  backend/  data/  mobile/  tooling/',
    exit: 'no hay de dónde salir — es una sola página',
    notFound: 'zsh: command not found:',
    tryHelp: 'probá `help`',
    hints: ['help', 'whoami', 'stack', 'web', 'mobile', 'projects', 'sudo hire'],
    doom: {
      boot: [
        'si corre en una tostadora, acá también.',
        'montando DOOM1.WAD (shareware, 1993) ... ok',
      ],
      title: 'DOOM (1993) — episodio shareware',
      controls: 'WASD para moverte · mouse o ←/→ gira · Ctrl dispara · Espacio abre puertas · Esc = menú del juego',
      close: 'cerrar',
      failed: 'DOOM no pudo arrancar — no cargaron los archivos del juego. Recargá la página y probá de nuevo.',
    },
  },

  availability: {
    eyebrow: '06 — disponibilidad',
    heading: 'Cómo funcionan los contratos',
    items: [
      {
        kind: 'proyecto',
        status: 'abierto',
        price: 'Alcance fijo',
        body: 'Entregable definido, precio definido. Ideal cuando ya sabés qué necesitás y querés un número cerrado antes de empezar.',
        points: [
          'Alcance y estimación antes de cualquier factura',
          'Builds de demo cada semana',
          '30 días de arreglos después de la entrega',
        ],
      },
      {
        kind: 'retainer',
        status: 'limitado',
        price: 'Mensual',
        body: 'Un bloque de horas reservado cada mes para trabajo continuo — features, mantenimiento y releases.',
        points: [
          'Respuesta prioritaria',
          'Releases incluidos',
          'Las horas no usadas se pasan una vez',
        ],
        featured: true,
      },
      {
        kind: 'consultoría',
        status: 'abierto',
        price: 'Por hora',
        body: 'Revisiones de arquitectura, destrabar un build o un release que no sale, o una segunda opinión antes de comprometerte con un camino.',
        points: ['Async o por llamada', 'Recomendaciones por escrito', 'Sin mínimo de contratación'],
      },
    ],
  },

  contact: {
    eyebrow: '07 — contacto',
    headline: ['Contame qué', 'estás construyendo.'],
    body: 'Con un párrafo alcanza. Te respondo con un alcance, un plazo y una evaluación honesta de si soy la persona indicada.',
    labels: {
      email: 'Email',
      whatsapp: 'WhatsApp',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      instagram: 'Instagram',
      based: 'ubicación',
      languages: 'idiomas',
    },
    basedValue: `Buenos Aires · ${profile.utcOffsetLabel} · remoto`,
    languagesValue: 'Español · Inglés',
    form: {
      name: 'nombre',
      namePlaceholder: 'Ada Lovelace',
      email: 'email',
      emailPlaceholder: 'vos@empresa.com',
      needs: 'qué necesitás',
      needOptions: ['App web', 'API / backend', 'App mobile', 'App de TV', 'Todavía no sé'],
      project: 'el proyecto',
      projectPlaceholder: 'Qué es, para quién, y para cuándo lo querés en producción.',
      submit: 'enviar →',
      sending: 'enviando…',
      sentRoute: 'POST /api/contact',
      sentStatus: '200 OK',
      sentGreeting: 'Listo,',
      sentBody: 'Ya está en mi casilla. Te respondo en uno o dos días.',
      handoffBody:
        'Se te debería haber abierto el cliente de correo con el mensaje listo — dale enviar ahí y me llega.',
      sendAnother: 'enviar otro',
      errorStatus: '502 Bad Gateway',
      errorBody: 'No salió. Mandámelo por email — mismo mensaje, un clic.',
      errorRetry: 'reintentar',
      errorMailto: 'abrir el email →',
    },
  },

  footer: {
    built: `© ${profile.year} ${profile.name} — diseñado y construido desde cero`,
  },
}
