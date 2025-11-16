import { PokemonList } from "@/components/pokemon-list";
import { Stack } from "expo-router";

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Pokemon List",
        }}
      />
      <PokemonList />
    </>
  );
}
