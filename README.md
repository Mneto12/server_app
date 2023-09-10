# Server app with NestJS and clean arquitecture

## Explanation

- controllers: 
- abstracts:
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

4) Generate prisma client

```bash
$ npx prisma generate
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
