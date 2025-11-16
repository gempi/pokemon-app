# Copilot Instructions

This is a React Native Expo app using GraphQL with Relay and expo-router for file-based routing.

## Architecture Overview

### Tech Stack

- **React Native + Expo** with new architecture enabled (`newArchEnabled: true`)
- **expo-router** for file-based routing with typed routes enabled
- **Relay** for GraphQL data fetching with code generation
- **Jest + React Testing Library** for testing
- **TypeScript** with strict configuration

### Project Structure

- `src/app/` - File-based routing (expo-router)
- `src/screens/` - Screen components that handle data fetching
- `src/components/` - Reusable UI components
- `src/__generated__/` - Auto-generated Relay types and queries
- `data/schema.graphql` - GraphQL schema (fetched from external API)

## Critical Development Workflows

### GraphQL/Relay Development

1. **Schema updates**: Use `npx get-graphql-schema https://graphql-pokeapi.graphcdn.app/ > data/schema.graphql`
2. **Relay compilation**: Run `npm run watch-relay` during development (auto-compiles on query changes)
3. **Query pattern**: Define queries with `graphql` template literal, use `useLazyLoadQuery` hook
4. **Generated types**: Import from `src/__generated__/[queryName].graphql.ts`

### Development Commands

- `npm run dev` - Starts Expo with Relay watching (preferred for development)
- `npm start` - Expo only (without Relay watching)
- `npm test` - Jest in watch mode
- `npm run relay` - One-time Relay compilation

### Environment Setup

- Copy `.env.example` to `.env` before starting
- `EXPO_PUBLIC_API_URL` must be set for GraphQL endpoint

## Project-Specific Patterns

### Relay Data Flow

```tsx
// Screen handles data fetching
const { pokemons } = useLazyLoadQuery<pokemonListQuery>(
  PokemonListQuery,
  variables
);

// Component receives typed data props
<PokemonList pokemons={data} />;
```

### Routing Convention

- Screens in `src/app/` configure Stack.Screen options and render screen components
- Screen components in `src/screens/` handle data fetching and business logic
- UI components in `src/components/` are pure presentation layer

### Type Extraction Pattern

```tsx
// Extract types from generated Relay types
export type Pokemon = NonNullable<
  NonNullable<pokemonListQuery$data["pokemons"]>["results"]
>[number];
```

### Error Handling

- Global ErrorBoundary in `_layout.tsx` with retry functionality
- Suspense boundaries for async components with ActivityIndicator fallbacks

### Testing Approach

- Component tests focus on UI behavior and prop handling
- Mock external dependencies (router navigation, data props)
- Use `@testing-library/react-native` for component testing

## Key Dependencies

- **RelayEnvironmentProvider** wraps the entire app in `_layout.tsx`
- **expo-router** provides navigation via `router.navigate()`
- **react-relay** hooks: `useLazyLoadQuery` for data fetching
- Babel plugin `relay` compiles GraphQL queries at build time

## Gotchas

- Relay compiler must run before/during development - queries won't work without generated files
- File-based routing requires exact folder structure in `src/app/`
- Generated GraphQL types are read-only - use manual type extraction for mutable data
- Environment variables must use `EXPO_PUBLIC_` prefix to be available in client code
