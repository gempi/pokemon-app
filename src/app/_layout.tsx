import { ErrorBoundaryProps, Stack } from "expo-router";
import { Text, View } from "react-native";
import "react-native-reanimated";

import { RelayEnvironmentProvider } from "react-relay";
import { Environment, FetchFunction, Network } from "relay-runtime";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const fetchGraphQL: FetchFunction = async (request, variables) => {
  const resp = await fetch(apiUrl!, {
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

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: 600, marginBottom: 5 }}>{error.message}</Text>
      <Text onPress={retry}>Try Again?</Text>
    </View>
  );
}

export default function RootLayout() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Stack />
    </RelayEnvironmentProvider>
  );
}
