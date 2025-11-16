import { Stack } from "expo-router";
import { Suspense } from "react";
import { ActivityIndicator, View } from "react-native";
import { PokemonListScreen } from "../screens/pokemon-list";

export default function PokemonList() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Pokemons",
        }}
      />
      <Suspense
        fallback={
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator />
          </View>
        }
      >
        <PokemonListScreen />
      </Suspense>
    </>
  );
}
