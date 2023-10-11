# Server app with NestJS and clean arquitecture

## Explanation

- controllers: 
- Core:
- helpers:
- frameworks:
- use-cases:

## What need to do to run the application

1) Install dependencies

```bash
$ npm install
```

2) duplicate the .env.example and change the name to .env (only for developing)

3) Copy and paste the credentials located in the notion post

4) Prisma config

```bash
$ npx prisma generate
```

then

```bash
$ npx prisma db push --force-reset && npx prisma db seed
```

5) Run the application

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Docs and inspirations

https://nestjs.com/

https://www.prisma.io/

https://betterprogramming.pub/clean-node-js-architecture-with-nestjs-and-typescript-34b9398d790f

https://medium.com/@jonathan.pretre91/clean-architecture-with-nestjs-e089cef65045

https://medium.com/@jonathan.pretre91/clean-architecture-with-nestjs-e089cef65045

https://github.com/prisma/prisma/discussions/6801

https://medium.com/@bhkfazano/quick-and-simple-error-handling-with-nestjs-fc43d8dc5f45
