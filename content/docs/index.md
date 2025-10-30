---
title: The Perfect Stack
order: 1
---

Not a framework, just the perfect collection of technologies. Come for the buzzwords, stay for the delightful experience.

- [TypeScript](https://www.typescriptlang.org)
- [Bun](https://bun.sh)
- [Hono](https://hono.dev)
- [Zod](https://zod.dev)
- [SQLite](https://bun.sh/docs/api/sqlite)
- [Drizzle ORM](https://orm.drizzle.team)
- [HTMX](https://htmx.org)
- [Alpine.js](https://alpinejs.dev)
- [Pico CSS](https://picocss.com)

## Why?

I'm a simpleton and I felt like building web apps was getting complicated. I just wanted a nice, simple server-side rendered app with no fuss.

My goals for the Perfect Stack are:

1. Type safety.
2. Simplicity.

### Why TypeScript?

I know JavaScript and TypeScript. I don't have time to learn something else.

### Why Bun?

Bun is fast. Bun supports TypeScript out of the box. Bun comes with its own SQLite driver. If I wrote tests, it has a test runner too. It helps me reduce the number of dependencies I need, keeping things simpler. I wish it had a formatter like Deno, so I don't have to include Prettier.

### Why Hono?

IMO, it has a great DX. Its API is simple and TypeScript support is great. It includes a lot of useful helpers and middleware.

### Why Zod?

Hono with Zod lets me [parse and not validate](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/). Types can fall apart and lie to you at the boundaries of an app, so Zod gives me confidence that the body of a request actually matches my type. [Works really well with Hono](https://hono.dev/docs/guides/validation#zod-validator-middleware).

### Why SQLite?

It is just a file. Simple.

### Why Drizzle ORM?

Like Zod, gives me type safety and more confidence that what my DB actually matches my types. I love that I can define tables with TypeScript without duplicating column names and types. Then, with Zod, I can create model types from the table schemas themselves.

### Why HTMX?

TBH, HTMX is what kicked all this off. I read the [book](https://hypermedia.systems/book/contents/) and the philosophy clicked with me. I like how it pushes view logic to the server, and you're just dealing with HTML. So the Perfect Stack was born as a way to experiment with HTMX.

### Why Alpine.js?

This is pretty optional. Sometimes I want some nice interactions that are easier with JS. Alpine removes boilerplate to make things reactive and colocates logic in the template.

### Why Pico CSS?

Also optional. When I start a project, I usually don't want to immediately think about styling. Pico CSS makes things look decent out of the box and encourages use of semantic HTML and proper ARIA attributes.

---

This works for me. Will it work for you? IDK. Maybe. 

![](/media/test.jpeg)