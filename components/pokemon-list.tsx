import { router } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { graphql, useLazyLoadQuery } from "react-relay";
import { pokemonListAllPokemonsQuery } from "./__generated__/pokemonListAllPokemonsQuery.graphql";

const pokemonsQuery = graphql`
  query pokemonListAllPokemonsQuery($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        _id: id
        name
      }
    }
  }
`;

export function PokemonList() {
  const data = useLazyLoadQuery<pokemonListAllPokemonsQuery>(pokemonsQuery, {});

  if (!data) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  const pokemons = data.pokemons?.results ?? [];

  if (pokemons.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.emptyText}>No pokemons found.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={pokemons}
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
      onEndReached={() => console.log("On reach end")}
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
