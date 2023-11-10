# Novenbre numérique

## Backend

Set env

```sh
mv .env_example .env.local
```

Docker,

```sh
docker compose up
```

Seed db, and generate prisma client

> Mamorona user milay kely par defaut
>
> bisounours@gmail.com ny email, 123456 ny mdp, Etudiant izy

```sh
# if first time
npx prisma db seed

# else
npm run db:migrate-dev
```