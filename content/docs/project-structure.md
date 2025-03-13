---
title: Project Structure
order: 3
---

```
perfect-app/
├── db/
│   └── sqlite.db
├── src/
│   ├── assets/
│   │   ├── alpinejs.min.js
│   │   ├── htmx.min.js
│   │   └── styles.css
│   ├── db/
│   │   ├── migrations/
│   │   │   └── [generated Drizzle migration files]
│   │   ├── db.ts
│   │   ├── migrate.ts
│   │   ├── schema.ts
│   │   └── seed.ts
│   ├── middleware/
│   │   └── [your custom Hono middleware]
│   ├── routes/
│   │   └── [your smaller Hono apps]
│   ├── views/
│   │   ├── components/
│   │   │   └── [your components]
│   │   ├── layouts/
│   │   │   ├── BaseLayout.ts
│   │   │   └── [your other layouts]
│   │   └── pages/
│   │       ├── IndexPage.ts
│   │       └── [your other pages]
│   ├── index.ts
│   └── models.ts
├── drizzle.config.ts
├── env.d.ts
├── global.d.ts
├── package.json
└── tsconfig.json
```