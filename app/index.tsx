import { PokemonList } from "@/components/pokemon-list";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Pokemon List",
        }}
      />
      <PokemonList />
    </View>
  );
}
