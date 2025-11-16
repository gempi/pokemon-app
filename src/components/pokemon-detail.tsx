import { pokemonDetailQuery$data } from "@/src/__generated__/pokemonDetailQuery.graphql";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type Pokemon = pokemonDetailQuery$data["pokemon"];

export function PokemonDetail({ pokemon }: { pokemon: Pokemon }) {
  if (!pokemon)
    return (
      <View style={styles.center}>
        <Text>Pokemon not found</Text>
      </View>
    );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.name}>{pokemon.name}</Text>
      </View>

      {/* Types */}
      {pokemon.types && pokemon.types.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Types</Text>
          <View style={styles.typeContainer}>
            {pokemon.types.map((typeObj: any, index: number) => (
              <View key={index} style={styles.typeTag}>
                <Text style={styles.typeText}>{typeObj?.type?.name}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Basic Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Height:</Text>
          <Text style={styles.value}>
            {pokemon.height ? (pokemon.height / 10).toFixed(1) + " m" : "N/A"}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Weight:</Text>
          <Text style={styles.value}>
            {pokemon.weight ? (pokemon.weight / 10).toFixed(1) + " kg" : "N/A"}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Base Experience:</Text>
          <Text style={styles.value}>{pokemon.base_experience || "N/A"}</Text>
        </View>
      </View>

      {/* Stats */}
      {pokemon.stats && pokemon.stats.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Stats</Text>
          {pokemon.stats.map((stat: any, index: number) => (
            <View key={index} style={styles.infoRow}>
              <Text style={styles.label}>{stat?.stat?.name}:</Text>
              <Text style={styles.value}>{stat?.base_stat}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Abilities */}
      {pokemon.abilities && pokemon.abilities.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Abilities</Text>
          {pokemon.abilities.map((ability: any, index: number) => (
            <View key={index} style={styles.abilityRow}>
              <Text style={styles.abilityName}>{ability?.ability?.name}</Text>
              {ability?.is_hidden && (
                <Text style={styles.hiddenBadge}>Hidden</Text>
              )}
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginBottom: 24,
  },
  name: {
    fontSize: 28,
    fontWeight: "600",
  },
  id: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  section: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  typeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  typeTag: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  typeText: {
    fontSize: 14,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  value: {
    fontSize: 14,
    color: "#666",
    textTransform: "capitalize",
  },
  abilityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  abilityName: {
    fontSize: 14,
    color: "#333",
    textTransform: "capitalize",
  },
  hiddenBadge: {
    fontSize: 12,
    backgroundColor: "#fff9c4",
    color: "#f57f17",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    fontWeight: "600",
  },
});
