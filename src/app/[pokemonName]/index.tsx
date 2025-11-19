import { PokemonDetailScreen } from "@/src/screens/pokemon-detail";
import { Stack, useLocalSearchParams } from "expo-router";
import { Suspense } from "react";
import { ActivityIndicator, View } from "react-native";

export default function PokemonDetail() {
  const { pokemonName } = useLocalSearchParams<{ pokemonName: string }>();

  return (
    <>
      <Stack.Screen
        options={{
          title: pokemonName,
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
        <PokemonDetailScreen pokemonName={pokemonName} />
      </Suspense>
    </>
  );
}
