import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { graphql, useLazyLoadQuery } from "react-relay";
import { pokemonListPokemonsQuery } from "./__generated__/pokemonListPokemonsQuery.graphql";

type Pokemon = NonNullable<
  NonNullable<pokemonListPokemonsQuery["response"]["pokemons"]>["results"]
>[number];

const LIMIT = 20;

const pokemonListQuery = graphql`
  query pokemonListPokemonsQuery($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      nextOffset
      results {
        _id: id
        name
      }
    }
  }
`;

export function PokemonList() {
  const [offset, setOffset] = useState(0);
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const data = useLazyLoadQuery<pokemonListPokemonsQuery>(pokemonListQuery, {
    limit: LIMIT,
    offset,
  });

  useEffect(() => {
    if (data?.pokemons?.results) {
      const results = data.pokemons.results ?? [];
      if (offset === 0) {
        setAllPokemons([...results]);
      } else {
        setAllPokemons((prev) => [...prev, ...results]);
      }
      setIsLoadingMore(false);
    }
  }, [data, offset]);

  const hasMore = !!data?.pokemons?.next;

  const handleLoadMore = () => {
    if (hasMore && !isLoadingMore && data?.pokemons?.nextOffset) {
      setIsLoadingMore(true);
      setOffset(data.pokemons.nextOffset);
    }
  };

  if (!data) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  if (allPokemons.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.emptyText}>No pokemons found.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={allPokemons}
      keyExtractor={(item) => String(item?._id)}
      renderItem={({ item }) => (
        <Pressable
          style={styles.item}
          onPress={() =>
            router.navigate({
              pathname: "/[pokemonName]",
              params: { pokemonName: String(item?.name) },
            })
          }
        >
          <Text style={styles.name}>{item?.name}</Text>
        </Pressable>
      )}
      contentContainerStyle={styles.list}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onEndReached={handleLoadMore}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 0,
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "rgba(0,0,0,0.08)",
  },
  center: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    color: "gray",
  },
});
