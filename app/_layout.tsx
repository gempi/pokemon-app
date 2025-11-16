import { Stack } from "expo-router";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { RelayEnvironmentProvider } from "react-relay";
import { Environment, FetchFunction, Network } from "relay-runtime";

export const unstable_settings = {
  anchor: "(tabs)",
};

const HTTP_ENDPOINT = "https://graphql-pokeapi.graphcdn.app/";

const fetchGraphQL: FetchFunction = async (request, variables) => {
  const resp = await fetch(HTTP_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: request.text, variables }),
  });
  if (!resp.ok) {
    throw new Error("Response failed.");
  }
  return await resp.json();
};

const environment = new Environment({
  network: Network.create(fetchGraphQL),
});

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Stack />
    </RelayEnvironmentProvider>
  );
}
