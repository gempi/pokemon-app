# Pokemon App

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Setup environment variables

   ```bash
   cp .env.example .env
   ```

3. Start the app

   ```bash
   npx expo start
   ```

## Testing

```bash
   npm run test
```

## GraphQL schema update

```bash
npx get-graphql-schema https://graphql-pokeapi.graphcdn.app/ > data/schema.graphql
```

## Todo

- [ ] Improve ui and ux
- [ ] Split up components in detail view (e.g. abilities, stats etc.)
- [ ] Add e2e tests (e.g. https://docs.expo.dev/eas/workflows/examples/e2e-tests/)
- [ ] Add deployment process
- [ ] Make app production ready (e.g. app.json etc.)
