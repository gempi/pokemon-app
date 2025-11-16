import {
  pokemonListQuery,
  pokemonListQuery$data,
} from "@/src/__generated__/pokemonListQuery.graphql";
import { PokemonList } from "@/src/components/pokemon-list";
import { useEffect, useState, useTransition } from "react";
import {
  fetchQuery,
  graphql,
  useLazyLoadQuery,
  useRelayEnvironment,
} from "react-relay";

export type Pokemons = NonNullable<
  NonNullable<pokemonListQuery$data["pokemons"]>["results"]
>[number][];

const PokemonListQuery = graphql`
  query pokemonListQuery($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      nextOffset
      results {
        _id: id
        name
        image
      }
    }
  }
`;

function PokemonListScreen() {
  const [data, setData] = useState<Pokemons>([]);
  const [nextOffset, setNextOffset] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();
  const environment = useRelayEnvironment();

  // Initial load with useLazyLoadQuery - this will trigger Suspense only on first load
  const { pokemons } = useLazyLoadQuery<pokemonListQuery>(PokemonListQuery, {
    limit: 20,
    offset: 0,
  });

  useEffect(() => {
    if (pokemons?.results) {
      const results = pokemons.results ?? [];
      setData([...results]);
      setNextOffset(pokemons.nextOffset ?? null);
    }
  }, [pokemons]);

  const loadMore = async () => {
    if (nextOffset && !isPending) {
      startTransition(async () => {
        const response = (await fetchQuery(environment, PokemonListQuery, {
          limit: 20,
          offset: nextOffset,
        }).toPromise()) as pokemonListQuery$data;

        if (response?.pokemons?.results) {
          const newResults = response.pokemons.results ?? [];
          setData((prev) => [...prev, ...newResults]);
          setNextOffset(response.pokemons.nextOffset ?? null);
        }
      });
    }
  };

  return (
    <PokemonList
      pokemons={data}
      isLoadingMore={isPending}
      loadMore={loadMore}
    />
  );
}

export { PokemonListScreen };
