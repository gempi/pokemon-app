import { PokemonDetail } from "@/components/pokemon-detail";
import { Stack, useLocalSearchParams } from "expo-router";
import { Suspense } from "react";
import { ActivityIndicator, View } from "react-native";

export default function PokemonDetailPage() {
  const { pokemonName } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          title: "Pokemon Detail",
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
        <PokemonDetail pokemonName={String(pokemonName)} />
      </Suspense>
    </>
  );
}
