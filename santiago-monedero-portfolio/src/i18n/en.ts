import { profile } from '../data/profile'
import type { Dict } from './types'

export const en: Dict = {
  meta: {
    title: `${profile.name} — Full-stack developer, web and mobile`,
    description:
      'Full-stack development with React, TypeScript, NestJS, PostgreSQL and Prisma, plus React Native apps for iOS, Android and Android TV. Freelance, based in Buenos Aires.',
  },

  nav: {
    stack: 'stack',
    services: 'services',
    how: 'how it works',
    work: 'work',
    hire: 'hire me',
  },

  lang: {
    switchLabel: 'Language',
    en: 'EN',
    es: 'ES',
  },

  appearance: {
    night: 'night',
    day: 'day',
    toDay: 'Switch to day mode',
    toNight: 'Switch to night mode',
  },

  cta: {
    primary: 'start a project →',
    secondary: 'see the stack',
  },

  heroField: {
    kicker: `${profile.name.toLowerCase()} — buenos aires · remote`,
    headline: ['Web and mobile,', 'built end to end.'],
    body: 'Full-stack developer in Buenos Aires — React and TypeScript on the front, NestJS and PostgreSQL behind it, React Native when a product needs an app. Move your cursor: every node is part of the stack.',
    panelLabel:
      'A wooden shoji panel lit from behind. Move the cursor and the light follows it; each node in the lattice shows a piece of the stack.',
  },

  stack: {
    eyebrow: '01 — the stack',
    heading: 'The stack I work with',
    views: { tree: 'tree', depth: 'depth', graph: 'graph' },
    itemsSuffix: 'items',
    graphHint: 'drag any node to explore the stack',
    groups: [
      {
        dir: 'frontend/',
        items: [
          { name: 'React', note: 'daily' },
          { name: 'TypeScript', note: 'daily' },
          { name: 'JavaScript ES6+', note: 'daily' },
          { name: 'HTML5 / CSS3', note: 'grid, flex' },
          { name: 'Bootstrap', note: 'rapid UI' },
        ],
      },
      {
        dir: 'backend/',
        items: [
          { name: 'NestJS', note: 'modular' },
          { name: 'Express.js', note: 'lean APIs' },
          { name: 'Node.js', note: 'runtime' },
          { name: 'REST design', note: 'validation' },
          { name: 'webhooks', note: 'payments' },
        ],
      },
      {
        dir: 'data/',
        items: [
          { name: 'PostgreSQL', note: 'schema, queries' },
          { name: 'Prisma', note: 'migrations' },
          { name: 'Sanity.io', note: 'headless CMS' },
          { name: 'Mercado Pago', note: 'integration' },
        ],
      },
      {
        dir: 'mobile/',
        items: [
          { name: 'React Native', note: 'daily' },
          { name: 'Expo + EAS', note: 'builds, OTA' },
          { name: 'Android TV / tvOS', note: 'focus nav' },
          { name: 'native pipelines', note: 'signing, stores' },
          { name: 'offline state', note: 'persistence' },
        ],
      },
      {
        dir: 'tooling/',
        items: [
          { name: 'Git', note: 'daily' },
          { name: 'Bash / shell', note: 'automation' },
          { name: 'VS Code', note: 'home' },
          { name: 'Figma', note: 'handoff' },
          { name: 'Python', note: 'scripting' },
          { name: 'C / C++', note: 'fundamentals' },
        ],
      },
    ],
    depth: [
      {
        key: 'rn',
        name: 'React Native + Expo',
        label: 'daily · production',
        note: 'Cross-platform apps in stores, custom native modules, EAS build pipelines.',
      },
      {
        key: 'react',
        name: 'React',
        label: 'daily · production',
        note: 'Component architecture, state and performance on production web apps.',
      },
      {
        key: 'ts',
        name: 'TypeScript',
        label: 'daily · production',
        note: 'Type-safe app structures, API contracts and Prisma schemas.',
      },
      {
        key: 'node',
        name: 'Node.js / Express',
        label: 'production',
        note: 'REST services, middleware, auth and third-party integrations.',
      },
      {
        key: 'nest',
        name: 'NestJS',
        label: 'production',
        note: 'Modular architecture, DI, DTO validation on typed endpoints.',
      },
      {
        key: 'pg',
        name: 'PostgreSQL + Prisma',
        label: 'production',
        note: 'Relational modelling, migrations, high-volume write paths.',
      },
      {
        key: 'tv',
        name: 'Android TV interfaces',
        label: 'shipped',
        note: 'Spatial focus navigation, remote input, 10-foot layouts.',
      },
      {
        key: 'cms',
        name: 'Sanity / headless CMS',
        label: 'shipped',
        note: 'Content modelling decoupled from the application UI.',
      },
      {
        key: 'git',
        name: 'Git / Bash / CI',
        label: 'daily',
        note: 'Branching discipline, shell automation, release scripting.',
      },
      {
        key: 'systems',
        name: 'Python · C · C++',
        label: 'supporting',
        note: 'Scripting, data handling and systems-level fundamentals.',
      },
    ],
  },

  services: {
    eyebrow: '02 — services',
    heading: 'What I can build for you',
    items: [
      {
        num: '/01',
        title: 'Web applications',
        body: 'React and TypeScript front ends, from a client-facing product to the admin panel and reporting views your team uses every day.',
        tags: ['React', 'TypeScript'],
      },
      {
        num: '/02',
        title: 'APIs and backends',
        body: 'NestJS or Express services with typed contracts, validated input and a PostgreSQL schema designed around the queries it will have to serve.',
        tags: ['NestJS', 'Prisma', 'PostgreSQL'],
      },
      {
        num: '/03',
        title: 'Mobile apps, start to store',
        body: 'A React Native app built on Expo and released to iOS and Android, including the build pipeline, code signing and OTA updates.',
        tags: ['React Native', 'Expo', 'EAS'],
      },
      {
        num: '/04',
        title: 'Payments and integrations',
        body: 'Mercado Pago and similar gateways integrated end to end: preferences, redirects, webhooks, idempotency and the failure states that follow.',
        tags: ['Mercado Pago', 'webhooks'],
      },
      {
        num: '/05',
        title: 'Smart TV & Android TV apps',
        body: 'Remote-driven interfaces with proper spatial focus navigation and layouts designed for viewing across a room.',
        tags: ['Android TV', 'focus nav'],
      },
      {
        num: '/06',
        title: 'Content-driven sites',
        body: 'Sanity or another headless CMS behind a fast React front end, so your team publishes content without a developer or a deploy.',
        tags: ['Sanity.io', 'React'],
      },
    ],
  },

  trace: {
    eyebrow: '03 — one request, end to end',
    heading: 'Follow a single request through the whole stack',
    stages: [
      {
        num: '01',
        name: 'Client',
        tech: 'React · React Native',
        headline: 'A form submitted in the browser, or a tap in the app',
        body: 'The same interface logic runs in React on the web and in React Native on iOS, Android and Android TV. Validation, optimistic updates and offline state are handled before the request leaves the client.',
        file: 'src/checkout/Checkout.tsx',
        code: 'const submit = async () => {\n  setPending(true)\n  const res = await api.post(\n    "/orders", { items, method }\n  )\n  goTo("status", { id: res.id })\n}',
      },
      {
        num: '02',
        name: 'API layer',
        tech: 'NestJS · Express',
        headline: 'A typed endpoint that validates before it accepts',
        body: 'NestJS modules keep the surface small: a controller, a DTO that validates the body, and a service that owns the rules. Nothing reaches the database in a shape it was not expecting.',
        file: 'src/orders/orders.controller.ts',
        code: '@Post()\n@UsePipes(new ValidationPipe())\ncreate(@Body() dto: CreateOrderDto) {\n  return this.orders.create(dto)\n}',
      },
      {
        num: '03',
        name: 'Business logic',
        tech: 'Service layer',
        headline: 'Where the product rules live',
        body: 'Pricing, availability, payment intent creation and retries. This is the layer worth writing carefully, because every client of the API inherits the decisions made here.',
        file: 'src/orders/orders.service.ts',
        code: 'async create(dto: CreateOrderDto) {\n  const total = price(dto.items)\n  const pay = await mp.preference(total)\n  return this.db.order.create({\n    data: { ...dto, total, ref: pay.id }\n  })\n}',
      },
      {
        num: '04',
        name: 'Data layer',
        tech: 'Prisma · PostgreSQL',
        headline: 'A schema built for the next feature',
        body: 'Prisma models describe the tables, migrations move them forward safely, and indexes are chosen for the queries the application actually runs.',
        file: 'prisma/schema.prisma',
        code: 'model Order {\n  id      String  @id @default(cuid())\n  total   Decimal\n  status  Status  @default(PENDING)\n  ref     String  @unique\n  @@index([status, createdAt])\n}',
      },
      {
        num: '05',
        name: 'Back to the client',
        tech: 'Webhooks · OTA',
        headline: 'The gateway calls back and the client updates',
        body: 'Mercado Pago posts the result to a webhook, the order changes state, and both the web app and the mobile app reflect it. Expo OTA delivers mobile fixes without waiting on a store review.',
        file: 'src/payments/webhook.controller.ts',
        code: '@Post("mp")\nasync webhook(@Body() body: MpEvent) {\n  await this.orders.settle(body.data.id)\n  return { received: true }\n}',
      },
    ],
  },

  work: {
    eyebrow: '04 — selected work',
    heading: 'Recent work, described within NDA',
    intro:
      'Most of what I have shipped belongs to employers and clients, so each entry describes the problem and what I built — without logos or screenshots.',
    labels: { problem: 'problem', approach: 'what I did', stack: 'stack' },
    own: {
      heading: 'My own projects',
      sub: 'my apps, each with its own visual theme',
      viewCase: 'view the case →',
      close: 'close',
      sampleData: 'sample data',
      projects: [
        {
          id: 'al-cierre',
          kicker: 'own project · 2026 · design, backend and frontend',
          title: 'Al Cierre',
          tagline: 'How much I have spent before the card statement closes.',
          problem:
            'Spending alerts arrive by email, the statement arrives as a password-protected PDF after the billing cycle closes, and Mercado Pago lives somewhere else. There was no view of the cycle in progress.',
          approach:
            'A web app that brings two credit cards and Mercado Pago together, corrects declines, duplicates, reversals and instalments, and shows spending per cycle and per category. The parsers and reconciliation rules are tested in Node.',
          tags: ['Google Apps Script', 'Google Sheets', 'Gmail', 'Drive', 'Mercado Pago API', 'pdf.js', 'HTML/CSS/JS', 'clasp', 'Node (tests)'],
          note: 'the app and repo are private: they hold real financial data',
          detail: {
            meta: [
              { k: 'Type', v: 'Own project, for personal use' },
              { k: 'Role', v: 'Design, backend and frontend' },
              { k: 'Year', v: '2026' },
              { k: 'Runs on', v: 'Google Apps Script + Sheets, no server of its own' },
            ],
            sections: [
              {
                heading: 'The problem',
                body: 'Every card purchase sends an alert email right away. The statement only arrives after the cycle closes, as a password-protected PDF, and Mercado Pago has its own app. Knowing how much I had spent in the cycle meant adding it up by hand — and the emails do not tell the whole story: there are declines, repeated charges, reversals and instalments they never mention.',
              },
              {
                heading: 'Where every number comes from',
                items: [
                  { k: 'Email alerts', v: 'Every 30 minutes it reads Gmail and parses the alerts from both card processors, each in its own format.' },
                  { k: 'Bank statement', v: 'The PDF is encrypted. It is opened in the browser with pdf.js and cross-checked against the alerts: balance, minimum payment and the upcoming instalments table.' },
                  { k: 'Mercado Pago', v: 'Every day at 6 it asks the API for the account report, saves it to Drive and imports it. Refunds are deducted automatically.' },
                ],
              },
              {
                heading: 'One recalculation',
                items: [
                  { k: 'Store what was read', v: 'Each email or transaction is stored once, with what was extracted. It is the source of truth and prevents duplicates.' },
                  { k: 'Reconcile', v: 'Declines, duplicates, reversals, refunds, instalments and charges that may have been repeated.' },
                  { k: 'Assign to a cycle', v: 'Each transaction lands in its cycle by the real closing date, not the calendar month.' },
                  { k: 'Show and notify', v: 'The web app reads the result, and on Fridays at 9 a summary arrives by email.' },
                ],
              },
              {
                heading: 'What the email does not say',
                body: 'The alerts are not the statement. Everything the app corrects goes into a list of observations to review: a possible repeated charge, a declined purchase that does not count, a reversal already deducted, or a purchase presented after the close that moves to the next cycle.',
              },
              {
                heading: 'Decisions',
                items: [
                  { k: 'Sheets as the database', v: 'Zero cost, it can be opened and fixed by hand, and the app respects those manual fixes on every recalculation.' },
                  { k: 'Only the owner gets in', v: 'The web app is published with restricted access and also checks the email of whoever opens it. The Mercado Pago token lives in the script properties.' },
                  { k: 'Pure logic, tested in Node', v: 'Parsers, reconciliation and cycles never touch Google services, so they run in Node with dependency-free tests.' },
                  { k: 'Always recalculate from scratch', v: 'What was read is stored once and what is shown is regenerated in full. Changing a rule and reprocessing months of email is one button.' },
                ],
              },
              {
                heading: 'Design',
                body: 'The cycle branch: one blossom for each day that has passed, sized by what was spent that day, and buds for the days left until the close. Investments are drawn as a flower where each petal is its share of the total.',
              },
            ],
            tradeoffs: {
              heading: 'Why Apps Script and not a backend',
              prosHeading: 'What it solved',
              pros: [
                { k: 'Gmail without my own OAuth', v: 'The script runs as the account owner and reads mail directly — no OAuth app to register and no Google verification to pass.' },
                { k: 'Scheduled jobs included', v: 'Triggers replace a cron: Gmail every 30 minutes, Mercado Pago at 6 and the summary on Fridays at 9.' },
                { k: 'Free login', v: 'Owner-only access, with no users, sessions or passwords to build.' },
                { k: 'Zero cost', v: 'No hosting, database or domain to pay for.' },
              ],
              consHeading: 'What it gave up',
              cons: [
                { k: 'Execution limits', v: 'Each run has a time budget. Long imports take a lock and save their work in steps.' },
                { k: 'No npm on the server', v: 'pdf.js runs in the browser.' },
                { k: 'More manual deploys', v: 'The web app serves a pinned version: every clasp push needs a redeploy.' },
                { k: 'Separate tests', v: 'The business logic lives in files that use no Google services, so it can run in Node.' },
              ],
              verdict:
                'For one person with private data, Apps Script wins. For many users, a conventional backend would make more sense.',
            },
          },
        },
        {
          id: 'creator-hub',
          kicker: 'own project · 2026 · closed beta',
          title: 'Creator Hub',
          tagline: 'Upload a video once. Publish it to three networks.',
          problem:
            'Posting the same vertical clip to three networks meant uploading it three times, converting it by hand, scheduling where the API does not allow it, and comparing performance across three dashboards that measure differently.',
          approach:
            'A web app for streamers on Cloudflare Workers: the video is uploaded once to R2, FFmpeg converts it only when needed, one workflow per network publishes or schedules it with retries, and a collector reads the metrics to compare them by hours since posting.',
          tags: ['Cloudflare Workers', 'Hono', 'D1 + Drizzle', 'R2', 'Queues · Workflows · Cron', 'Containers + FFmpeg', 'React 19 + Vite', 'Tailwind 4', 'TanStack Query', 'TypeScript + zod', 'Vitest + Biome'],
          note: 'closed beta for a small group of streamers',
          detail: {
            meta: [
              { k: 'Type', v: 'Web app, closed beta for streamers' },
              { k: 'Role', v: 'Design, backend and frontend' },
              { k: 'Year', v: '2026' },
              { k: 'Runs on', v: 'Cloudflare Workers, with FFmpeg in a container' },
            ],
            sections: [
              {
                heading: 'The problem',
                body: 'A streamer who clips a moment from a stream wants it on all three vertical-video networks. That meant opening three apps, entering the same caption within each one’s limits, exporting the video in the format each network wants and, in the end, looking at three dashboards that count views differently.',
                items: [
                  { k: 'Upload three times', v: 'Same file, three uploads. If it was landscape or HEVC, it had to be converted by hand.' },
                  { k: 'Schedule by hand', v: 'Instagram does not allow scheduling through its API: posting at 6 pm on all three depended on being at the computer.' },
                  { k: 'Compare by eye', v: 'A Reel from two days ago against a Short from last week tells you nothing.' },
                ],
              },
              {
                heading: 'How it works',
                items: [
                  { k: 'Upload from the browser', v: 'The file travels to R2 in 32 MB parts. A failed part retries on its own, and the upload is refused before the first byte if it would exceed the quota.' },
                  { k: 'Twitch clips', v: 'A clip from the channel is imported, trimmed and turned vertical with the camera on top and the game below.' },
                  { k: 'Read and convert', v: 'A queue sends the file to a container with FFmpeg. If it is already 1080×1920 H.264 it goes out as is; otherwise it is framed over a blurred background.' },
                  { k: 'Publish', v: 'One workflow per network and attempt: prepare, upload, wait for the network to process it and confirm, with up to 3 retries.' },
                  { k: 'Measure', v: 'Hourly for the first 48 h, daily until day 30 and weekly until day 90, storing the hours since posting.' },
                ],
              },
              {
                heading: 'Three pieces that do the heavy lifting',
                items: [
                  { k: 'Per-network tracking', v: 'Each network publishes on its own and never twice: before retrying, the network is queried with the stored ID. Only transient errors are retried.' },
                  { k: 'Comparison', v: 'Every post is placed on the same axis of hours since it went out, so a 9 pm Reel and a 6 pm Short compare fairly, and a winner is picked by a chosen criterion.' },
                  { k: 'Quotas and brakes', v: 'R2 is free up to 10 GB and Cloudflare never cuts service, it only warns. So the app brakes itself: per-account quota, a global cap, FFmpeg minutes and YouTube’s daily quota.' },
                ],
              },
              {
                heading: 'Decisions',
                items: [
                  { k: 'A single Worker', v: 'It serves the API and the web app on the same domain, with an HttpOnly cookie and no CORS. Login with Twitch or Google, and an admin approves every signup.' },
                  { k: 'Scheduling is changing a date', v: 'A Cron every minute dispatches due jobs. Rescheduling — including dragging on the calendar — is editing a date.' },
                  { k: 'Simulated adapters first', v: 'Every network has a fake adapter with the same states and errors as the real one, to exercise the odd cases.' },
                  { k: 'Encrypted tokens', v: 'Access to each network is stored with AES-256-GCM and a key version so the key can be rotated.' },
                  { k: 'Null, not zero', v: 'Whatever a network does not report stays empty with its reason. TikTok has no daily account views, so they are not added up.' },
                  { k: 'Typed monorepo', v: 'Shared types and zod schemas between the API and the web app, and around 300 Vitest tests running on the Workers runtime.' },
                ],
              },
            ],
          },
        },
      ],
      alCierre: {
        cycle: 'October cycle',
        range: 'Sep 26 to Oct 29 · sample data',
        start: 'Opens Sat Sep 26',
        close: 'Closes Thu Oct 29',
        todaySummary: 'Day {day} of {total} · spent so far this cycle',
        daySpent: 'spent that day',
        dayNone: 'nothing spent',
        dayFuture: 'still ahead',
        todayTag: 'today',
        bud: 'bud',
        hint: 'One blossom per day that has passed, sized by what was spent that day, and buds until the close. Hover a blossom.',
      },
      creatorHub: {
        clip: 'Clutch 1v4 in the final',
        publish: 'Publish to all 3',
        publishing: 'publishing…',
        restart: 'start over',
        cloudNote: 'You can close the tab: publishing carries on in the cloud. Sample data.',
        status: {
          ready: 'Ready',
          preparing: 'Preparing',
          uploading: 'Uploading',
          processing: 'Publishing',
          published: 'Published',
        },
        notes: {
          ready: 'Waiting for you to hit Publish',
          preparing: 'Reading the video with ffprobe',
          uploading: 'Resumable upload from R2',
          processing: 'The network is processing the video',
          publishedYouTube: '1 attempt · resumable upload from R2',
          publishedInstagram: '1 attempt · the video was fetched from a signed link',
          privateTikTok: 'Posted as private: the app is still under review by TikTok',
        },
      },
    },
    clientsHeading: 'For clients and employers',
    cases: [
      {
        num: '01',
        title: 'Live audience prediction and tracking system',
        meta: 'High-volume writes · real-time evaluation',
        problem:
          'Thousands of people submitting predictions during a live event, all of which had to be stored, scored and shown back while the event was still running.',
        approach:
          'Designed a PostgreSQL schema for high-volume submissions and built the evaluation path that scores entries and updates standings in real time.',
        tags: ['PostgreSQL', 'Node.js', 'React', 'Prisma'],
      },
      {
        num: '02',
        title: 'Payment gateway integrated into a management platform',
        meta: 'Mercado Pago · webhooks · NestJS',
        problem:
          'Transactions were reconciled by hand, so status was always out of date and mistakes were expensive to correct.',
        approach:
          'Implemented the payment flow end to end — preference creation, redirect handling and webhook listeners that move an order through its states automatically and idempotently.',
        tags: ['NestJS', 'Mercado Pago', 'webhooks', 'PostgreSQL'],
      },
      {
        num: '03',
        title: 'Headless CMS behind a marketing platform',
        meta: 'Sanity.io · React front end',
        problem:
          'Every content change required a developer and a deploy, which slowed the team down and made the developer a bottleneck.',
        approach:
          'Integrated Sanity.io as the content layer, modelled the schemas around how the team actually writes, and decoupled administration from the application UI.',
        tags: ['Sanity.io', 'React', 'TypeScript'],
      },
      {
        num: '04',
        title: 'Cross-platform app shipped to iOS and Android',
        meta: 'React Native · Expo · client-facing product',
        problem:
          'A client needed one product on both stores with a small team, and maintaining two native codebases was not an option.',
        approach:
          'Built and released a React Native app on Expo with custom UI components, persisted state and a native build pipeline handling signing and store submissions.',
        tags: ['React Native', 'Expo', 'EAS', 'TypeScript'],
      },
      {
        num: '05',
        title: 'Smart TV interface with remote-first navigation',
        meta: 'React Native for Android TV · 10-foot UI',
        problem:
          'TV is a different product: no touch, a D-pad, and a viewer sitting three metres away. Mobile layouts and focus behaviour do not transfer.',
        approach:
          'Developed a React Native app targeting Android TV, handling spatial focus navigation, remote input mapping and layouts optimised for large screens and long viewing distance.',
        tags: ['React Native', 'Android TV', 'focus nav'],
      },
    ],
  },

  about: {
    eyebrow: '05 — about',
    heading: 'The parts of a project I take on',
    paragraphs: [
      'Build pipelines, webhook state machines, schema migrations, focus navigation on a TV remote — the parts of a project that are easy to postpone and expensive to get wrong. That is the work I am good at, and it is why clients stay past the first project.',
      'Full-time I work in mobile: React Native and Expo, shipped to iOS, Android and Android TV. Freelance is mostly web and full stack: React and TypeScript on the front, NestJS or Express behind it, PostgreSQL and Prisma underneath, Sanity for content and Mercado Pago when payments are involved.',
    ],
    facts: [
      { k: 'full-time', v: 'Mobile developer' },
      { k: 'freelance', v: 'Web & full stack, open' },
      { k: 'based', v: `Buenos Aires · ${profile.utcOffsetLabel}` },
      { k: 'languages', v: 'Spanish · English' },
    ],
    terminalEyebrow: 'try it — type a command',
  },

  terminal: {
    title: 'guest@portfolio — zsh',
    welcome: 'Welcome. This terminal works — type `help` for the commands.',
    helpIntro: 'available commands:',
    help: [
      { cmd: 'whoami', desc: 'who is behind this page' },
      { cmd: 'stack', desc: 'everything I work with' },
      { cmd: 'web', desc: 'the web and full-stack side' },
      { cmd: 'mobile', desc: 'the mobile specialisation' },
      { cmd: 'projects', desc: 'what I have shipped' },
      { cmd: 'rates', desc: 'how engagements work' },
      { cmd: 'contact', desc: 'how to reach me' },
      { cmd: 'sudo hire', desc: 'the fast path' },
      { cmd: 'lang', desc: 'switch English / Spanish' },
      { cmd: 'clear', desc: 'wipe the screen' },
    ],
    whoami: [
      'Full-stack developer — web and mobile, freelance and by contract.',
      'React and TypeScript on the front, NestJS, PostgreSQL and Prisma behind it.',
    ],
    web: [
      'React + TypeScript — web apps, admin panels and reporting views.',
      'NestJS or Express APIs with typed contracts and validated input,',
      'PostgreSQL and Prisma underneath, Sanity when content is involved.',
    ],
    mobile: [
      'React Native + Expo — iOS, Android, Android TV.',
      'Custom native modules, EAS builds, OTA updates, store submissions,',
      'offline persistence, and spatial focus navigation for TV remotes.',
    ],
    stackHint: 'frontend/  backend/  data/  mobile/  tooling/',
    projectsNote: 'Details are in the work section — most of it is under NDA.',
    rates: [
      'fixed scope  — defined deliverable, firm price',
      'retainer     — monthly block of hours, priority response',
      'consulting   — hourly, architecture reviews and unblocking',
    ],
    contactLocation: `Buenos Aires · ${profile.utcOffsetLabel} · remote · ES/EN`,
    sudoPrompt: '[sudo] password for guest: ********',
    sudoGranted: 'access granted.',
    sudoWhere: `Scroll to the contact form, or email ${profile.email}.`,
    ls: 'frontend/  backend/  data/  mobile/  tooling/',
    exit: 'nothing to exit — this is a single page',
    notFound: 'zsh: command not found:',
    tryHelp: 'try `help`',
    hints: ['help', 'whoami', 'stack', 'web', 'mobile', 'projects', 'sudo hire'],
    doom: {
      boot: [
        'if it runs on a toaster, it runs here.',
        'mounting DOOM1.WAD (shareware, 1993) ... ok',
      ],
      title: 'DOOM (1993) — shareware episode',
      controls: 'WASD moves · mouse or ←/→ turns · Ctrl fires · Space opens doors · Esc = game menu',
      close: 'close',
      failed: 'DOOM could not start — the game files did not load. Reload the page and try again.',
    },
  },

  availability: {
    eyebrow: '06 — availability',
    heading: 'How engagements work',
    items: [
      {
        kind: 'project',
        status: 'open',
        price: 'Fixed scope',
        body: 'Defined deliverable, defined price. Best when you know what you need built and want a firm number before starting.',
        points: [
          'Scope + estimate before any invoice',
          'Weekly demo builds',
          '30 days of fixes after handoff',
        ],
      },
      {
        kind: 'retainer',
        status: 'limited',
        price: 'Monthly',
        body: 'A reserved block of hours each month for ongoing work — features, maintenance and releases.',
        points: ['Priority response', 'Releases handled', 'Roll unused hours once'],
        featured: true,
      },
      {
        kind: 'consulting',
        status: 'open',
        price: 'Hourly',
        body: 'Architecture reviews, unblocking a stalled build or release, or a second opinion before you commit to a direction.',
        points: ['Async or call', 'Written recommendations', 'No minimum engagement'],
      },
    ],
  },

  contact: {
    eyebrow: '07 — contact',
    headline: ['Tell me what', "you're building."],
    body: "A paragraph is enough. I'll reply with a scope, a timeline and an honest assessment of whether I'm the right fit.",
    labels: {
      email: 'Email',
      whatsapp: 'WhatsApp',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      instagram: 'Instagram',
      based: 'based',
      languages: 'languages',
    },
    basedValue: `Buenos Aires · ${profile.utcOffsetLabel} · remote`,
    languagesValue: 'Spanish · English',
    form: {
      name: 'name',
      namePlaceholder: 'Ada Lovelace',
      email: 'email',
      emailPlaceholder: 'you@company.com',
      needs: 'what do you need',
      needOptions: ['Web app', 'API / backend', 'Mobile app', 'TV app', 'Not sure yet'],
      project: 'the project',
      projectPlaceholder: "What it is, who it's for, and when you'd want it live.",
      submit: 'send it →',
      sending: 'sending…',
      sentRoute: 'POST /api/contact',
      sentStatus: '200 OK',
      sentGreeting: 'Got it,',
      sentBody: "It's in my inbox. I'll come back to you within a day or two.",
      handoffBody:
        'Your email client should be open with the message ready — hit send there and it reaches me.',
      sendAnother: 'send another',
      errorStatus: '502 Bad Gateway',
      errorBody: "That didn't go through. Send it by email instead — same message, one click.",
      errorRetry: 'try again',
      errorMailto: 'open email instead →',
    },
  },

  footer: {
    built: `© ${profile.year} ${profile.name} — designed and built from scratch`,
  },
}
