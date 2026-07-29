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

  cta: {
    primary: 'empecemos un proyecto →',
    secondary: 'ver el stack',
  },

  heroField: {
    kicker: `${profile.name.toLowerCase()} — buenos aires · remoto`,
    headline: ['Web y mobile,', 'de punta a punta.'],
    body: 'Desarrollador full stack en Buenos Aires — React y TypeScript adelante, NestJS y PostgreSQL detrás, React Native cuando el producto necesita una app. Movés el cursor: cada nodo es parte del stack.',
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
