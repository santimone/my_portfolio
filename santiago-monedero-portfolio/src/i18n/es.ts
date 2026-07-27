import { profile } from '../data/profile'
import type { Dict } from './types'

export const es: Dict = {
  meta: {
    title: `${profile.name} — Desarrollador mobile y full stack`,
    description:
      'React Native y Expo publicados en iOS, Android y Android TV. Freelance full stack: NestJS, PostgreSQL, Prisma, pagos y CMS headless.',
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
    headline: ['Apps que salen.', 'Backends que aguantan.'],
    body: 'React Native de día, full stack por contrato. Movés el cursor — cada nodo es algo con lo que trabajo.',
  },

  stack: {
    eyebrow: '01 — el stack',
    heading: 'Lo que uso de verdad',
    views: { tree: 'árbol', depth: 'nivel', graph: 'grafo' },
    itemsSuffix: 'ítems',
    graphHint: 'arrastrá cualquier nodo — es física, no decoración',
    groups: [
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
        note: 'Arquitectura de componentes, estado y performance en apps reales de clientes.',
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
        title: 'Apps mobile, del cero a la store',
        body: 'Una app React Native sobre Expo, publicada en iOS y Android — incluyendo el pipeline de build, la firma y las actualizaciones OTA que la mayoría de los presupuestos deja afuera.',
        tags: ['React Native', 'Expo', 'EAS'],
      },
      {
        num: '/02',
        title: 'Apps para Smart TV y Android TV',
        body: 'Interfaces manejadas por control remoto, con navegación por foco de verdad y layouts pensados para una pantalla al otro lado del living. Muy pocos lo hacen bien.',
        tags: ['Android TV', 'navegación por foco'],
      },
      {
        num: '/03',
        title: 'APIs y backends',
        body: 'Servicios en NestJS o Express con contratos tipados, entrada validada y un esquema de PostgreSQL diseñado por alguien que después va a tener que consultarlo.',
        tags: ['NestJS', 'Prisma', 'PostgreSQL'],
      },
      {
        num: '/04',
        title: 'Pagos e integraciones',
        body: 'Mercado Pago y pasarelas similares conectadas como corresponde: preferencias, redirecciones, webhooks, idempotencia y los estados de error que nadie prueba.',
        tags: ['Mercado Pago', 'webhooks'],
      },
      {
        num: '/05',
        title: 'Apps web y dashboards',
        body: 'Front ends en React para quienes manejan el negocio — el panel de administración, la vista de reportes, la herramienta interna que siempre se pospone.',
        tags: ['React', 'TypeScript'],
      },
      {
        num: '/06',
        title: 'Sitios manejados por contenido',
        body: 'Sanity u otro CMS headless detrás de un front React rápido, para que tu equipo edite contenido sin abrir un ticket.',
        tags: ['Sanity.io', 'React'],
      },
    ],
  },

  trace: {
    eyebrow: '03 — un toque, de punta a punta',
    heading: 'Scrolleá para seguir un pedido a través de todo lo que manejo',
    stages: [
      {
        num: '01',
        name: 'App mobile',
        tech: 'React Native · Expo',
        headline: 'Un toque en el teléfono, o un clic en el control del TV',
        body: 'La pantalla es React Native, corriendo el mismo código en iOS, Android y Android TV. La navegación por foco, el estado offline y la UI optimista se resuelven antes de que el pedido salga del dispositivo.',
        file: 'app/screens/Checkout.tsx',
        code: 'const submit = async () => {\n  setPending(true)\n  const res = await api.post(\n    "/orders", { items, method }\n  )\n  navigate("Status", { id: res.id })\n}',
      },
      {
        num: '02',
        name: 'Capa de API',
        tech: 'NestJS · Express',
        headline: 'Un endpoint tipado que rechaza entradas inválidas',
        body: 'Los módulos de NestJS mantienen la superficie chica: un controlador, un DTO que valida el body, un servicio dueño de las reglas. Nada llega a la base de datos con una forma que no esperaba.',
        file: 'src/orders/orders.controller.ts',
        code: '@Post()\n@UsePipes(new ValidationPipe())\ncreate(@Body() dto: CreateOrderDto) {\n  return this.orders.create(dto)\n}',
      },
      {
        num: '03',
        name: 'Lógica de negocio',
        tech: 'Capa de servicios',
        headline: 'Donde vive el producto de verdad',
        body: 'Precios, disponibilidad, creación de la intención de pago, reintentos. Es la capa que vale la pena escribir con cuidado, porque cada cliente de la API hereda las decisiones que se toman acá.',
        file: 'src/orders/orders.service.ts',
        code: 'async create(dto: CreateOrderDto) {\n  const total = price(dto.items)\n  const pay = await mp.preference(total)\n  return this.db.order.create({\n    data: { ...dto, total, ref: pay.id }\n  })\n}',
      },
      {
        num: '04',
        name: 'Capa de datos',
        tech: 'Prisma · PostgreSQL',
        headline: 'Un esquema que sobrevive a la próxima feature',
        body: 'Los modelos de Prisma describen las tablas, las migraciones las mueven hacia adelante sin romper nada, y los índices existen porque alguien pensó la query antes de que se pusiera lenta.',
        file: 'prisma/schema.prisma',
        code: 'model Order {\n  id      String  @id @default(cuid())\n  total   Decimal\n  status  Status  @default(PENDING)\n  ref     String  @unique\n  @@index([status, createdAt])\n}',
      },
      {
        num: '05',
        name: 'De vuelta al dispositivo',
        tech: 'Webhooks · OTA',
        headline: 'La pasarela responde y la app se actualiza sola',
        body: 'Mercado Pago publica el resultado en un webhook, la orden cambia de estado y la app lo refleja. Expo OTA empuja los arreglos a los usuarios sin esperar la revisión de la store.',
        file: 'src/payments/webhook.controller.ts',
        code: '@Post("mp")\nasync webhook(@Body() body: MpEvent) {\n  await this.orders.settle(body.data.id)\n  return { received: true }\n}',
      },
    ],
  },

  work: {
    eyebrow: '04 — trabajos seleccionados',
    heading: 'Bajo NDA, contados con honestidad',
    intro:
      'Casi todo lo que publiqué pertenece a empleadores y clientes, así que acá está la forma del problema y lo que hice al respecto — sin logos ni capturas.',
    labels: { problem: 'problema', approach: 'qué hice', stack: 'stack' },
    cases: [
      {
        num: '01',
        title: 'App multiplataforma publicada en iOS y Android',
        meta: 'React Native · Expo · producto de cara al cliente',
        problem:
          'Un cliente necesitaba un solo producto en las dos stores, con un equipo chico y sin ganas de mantener dos bases de código nativas.',
        approach:
          'Construí y publiqué una app React Native sobre Expo, con componentes de UI propios, estado persistido y un pipeline nativo que resuelve la firma y el envío a las stores.',
        tags: ['React Native', 'Expo', 'EAS', 'TypeScript'],
      },
      {
        num: '02',
        title: 'Interfaz para Smart TV pensada para el control remoto',
        meta: 'React Native para Android TV · UI a tres metros',
        problem:
          'La TV es otro producto: no hay touch, hay un D-pad y alguien mirando a tres metros. Los layouts y el foco pensados para mobile se rompen enseguida.',
        approach:
          'Desarrollé una app React Native para Android TV resolviendo navegación espacial por foco, mapeo del control remoto y layouts optimizados para pantallas grandes y distancia de visión larga.',
        tags: ['React Native', 'Android TV', 'navegación por foco'],
      },
      {
        num: '03',
        title: 'Pasarela de pagos integrada a una plataforma de gestión',
        meta: 'Mercado Pago · webhooks · NestJS',
        problem:
          'Las transacciones se conciliaban a mano, así que el estado siempre estaba desactualizado y los errores costaban plata real.',
        approach:
          'Implementé el flujo de pago de punta a punta — creación de la preferencia, manejo de la redirección y listeners de webhook que mueven la orden entre estados de forma automática e idempotente.',
        tags: ['NestJS', 'Mercado Pago', 'webhooks', 'PostgreSQL'],
      },
      {
        num: '04',
        title: 'Sistema de predicciones en vivo con seguimiento',
        meta: 'Escrituras de alto volumen · evaluación en tiempo real',
        problem:
          'Miles de personas enviando predicciones durante un evento en vivo, todas para guardar, puntuar y mostrar de vuelta mientras el evento seguía en curso.',
        approach:
          'Diseñé un esquema de PostgreSQL a medida para envíos de alto volumen y armé el camino de evaluación que puntúa las entradas y actualiza las posiciones en tiempo real.',
        tags: ['PostgreSQL', 'Node.js', 'React', 'Prisma'],
      },
      {
        num: '05',
        title: 'CMS headless detrás de una plataforma de marketing',
        meta: 'Sanity.io · front end en React',
        problem:
          'Cada cambio de contenido requería un desarrollador y un deploy, lo que volvía lento al equipo y convertía al desarrollador en cuello de botella.',
        approach:
          'Integré Sanity.io como capa de contenido, modelé los esquemas según cómo escribe realmente el equipo y desacoplé la administración de la interfaz de la aplicación.',
        tags: ['Sanity.io', 'React', 'TypeScript'],
      },
    ],
  },

  about: {
    eyebrow: '05 — sobre mí',
    heading: 'Me gustan las partes que otros delegan',
    paragraphs: [
      'Pipelines de build nativos. Navegación por foco en un control remoto. Estados de webhook que solo fallan en producción. Migraciones de esquema que nadie quiere firmar. Ese es el trabajo en el que soy bueno, y es la razón por la que los clientes me siguen llamando después del primer proyecto.',
      'El trabajo full-time es mobile — React Native y Expo, publicados en iOS, Android y Android TV. Lo freelance es lo que el producto necesite: NestJS o Express detrás, PostgreSQL y Prisma debajo, Sanity para contenido y Mercado Pago cuando hay plata de por medio.',
    ],
    facts: [
      { k: 'full-time', v: 'Desarrollador mobile' },
      { k: 'freelance', v: 'Full stack, disponible' },
      { k: 'ubicación', v: `Buenos Aires · ${profile.utcOffsetLabel}` },
      { k: 'idiomas', v: 'Español · Inglés' },
    ],
    terminalEyebrow: 'probalo — escribí un comando',
  },

  terminal: {
    title: 'guest@portfolio — zsh',
    welcome: 'Bienvenido. Esta terminal es de verdad — probá `help`.',
    helpIntro: 'comandos disponibles:',
    help: [
      { cmd: 'whoami', desc: 'quién está detrás de esta página' },
      { cmd: 'stack', desc: 'todo con lo que trabajo' },
      { cmd: 'mobile', desc: 'la especialización mobile' },
      { cmd: 'projects', desc: 'lo que publiqué' },
      { cmd: 'rates', desc: 'cómo funcionan los contratos' },
      { cmd: 'contact', desc: 'cómo contactarme' },
      { cmd: 'sudo hire', desc: 'el camino rápido' },
      { cmd: 'lang', desc: 'cambiar español / inglés' },
      { cmd: 'clear', desc: 'limpiar la pantalla' },
    ],
    whoami: [
      'Desarrollador mobile full-time. Freelance full stack, por contrato.',
      'React Native de día; NestJS, Postgres y Prisma cuando el proyecto necesita todo.',
    ],
    mobile: [
      'React Native + Expo — iOS, Android, Android TV.',
      'Módulos nativos propios, builds con EAS, actualizaciones OTA, envío a stores,',
      'persistencia offline y navegación espacial por foco para controles remotos.',
    ],
    stackHint: 'mobile/  frontend/  backend/  data/  tooling/',
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
    ls: 'mobile/  frontend/  backend/  data/  tooling/',
    exit: 'no hay a dónde ir, esta es toda la página',
    notFound: 'zsh: command not found:',
    tryHelp: 'probá `help`',
    hints: ['help', 'whoami', 'stack', 'mobile', 'projects', 'sudo hire'],
  },

  availability: {
    eyebrow: '06 — disponibilidad',
    heading: 'Cómo se ve trabajar juntos',
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
        body: 'Un bloque de horas reservado cada mes para trabajo continuo — features, mantenimiento, releases, lo que haya arriba de la mesa.',
        points: [
          'Respuesta prioritaria',
          'Releases a las stores incluidos',
          'Las horas no usadas se pasan una vez',
        ],
        featured: true,
      },
      {
        kind: 'consultoría',
        status: 'abierto',
        price: 'Por hora',
        body: 'Revisiones de arquitectura, destrabar un build de mobile que no compila, o una segunda opinión antes de comprometerte con un camino.',
        points: ['Async o por llamada', 'Recomendaciones por escrito', 'Sin mínimo de contratación'],
      },
    ],
  },

  contact: {
    eyebrow: '07 — contacto',
    headline: ['Contame qué', 'estás construyendo.'],
    body: 'Con un párrafo alcanza. Te vuelvo con un alcance, un plazo y una lectura honesta de si soy la persona indicada.',
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
      needOptions: ['App mobile', 'App de TV', 'API / backend', 'App web', 'Todavía no sé'],
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
    built: `© ${profile.year} ${profile.name} — hecho a mano, sin plantilla`,
  },
}
