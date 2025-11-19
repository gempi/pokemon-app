import { pokemonDetailQuery } from "@/src/__generated__/pokemonDetailQuery.graphql";
import { PokemonDetail } from "@/src/components/pokemon-detail";
import { graphql, useLazyLoadQuery } from "react-relay";

const PokemonDetailQuery = graphql`
  query pokemonDetailQuery($name: String!) {
    pokemon(name: $name) {
      _id: id
      name
      height
      weight
      base_experience
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
      ...abilities_pokemon
    }
  }
`;

function PokemonDetailScreen({ pokemonName }: { pokemonName: string }) {
  const data = useLazyLoadQuery<pokemonDetailQuery>(PokemonDetailQuery, {
    name: pokemonName,
  });

  return <PokemonDetail pokemon={data.pokemon} />;
}

export { PokemonDetailScreen };
