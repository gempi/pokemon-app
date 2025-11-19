import { StyleSheet, Text, View } from "react-native";
import { graphql, useFragment } from "react-relay";
import { abilities_pokemon$key } from "../__generated__/abilities_pokemon.graphql";

export function Abilities({ abilities }: { abilities: abilities_pokemon$key }) {
  const data = useFragment<abilities_pokemon$key>(
    graphql`
      fragment abilities_pokemon on Pokemon {
        abilities {
          is_hidden
          ability {
            name
            url
          }
        }
      }
    `,
    abilities
  );

  const abilitiesList = data?.abilities || [];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Abilities</Text>
      {abilitiesList.map((ability: any, index: number) => (
        <View key={index} style={styles.abilityRow}>
          <Text style={styles.abilityName}>{ability?.ability?.name}</Text>
          {ability?.is_hidden && <Text style={styles.hiddenBadge}>Hidden</Text>}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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
