import { pokemonListQuery$data } from "@/src/__generated__/pokemonListQuery.graphql";
import { router } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export type Pokemon = NonNullable<
  NonNullable<pokemonListQuery$data["pokemons"]>["results"]
>[number];

export function PokemonList({
  pokemons,
  isLoadingMore,
  loadMore,
}: {
  pokemons: Pokemon[];
  isLoadingMore?: boolean;
  loadMore?: () => void;
}) {
  if (pokemons.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No pokemons found.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={pokemons}
      keyExtractor={(item) => String(item?._id)}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() =>
            router.navigate({
              pathname: "/[pokemonName]",
              params: { pokemonName: String(item?.name) },
            })
          }
        >
          <View style={styles.row}>
            {item?.image ? (
              <Image
                source={{ uri: item.image }}
                style={styles.avatar}
                resizeMode="cover"
              />
            ) : null}
            <Text style={styles.name}>{item?.name}</Text>
          </View>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.list}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onEndReached={loadMore}
      ListFooterComponent={
        isLoadingMore ? (
          <ActivityIndicator size="small" style={{ marginVertical: 12 }} />
        ) : null
      }
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
    borderRadius: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    marginRight: 12,
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
});
