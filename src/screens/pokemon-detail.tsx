import { PokemonDetail } from "@/src/components/pokemon-detail";
import { graphql, useLazyLoadQuery } from "react-relay";
import { pokemonDetailQuery } from "../__generated__/pokemonDetailQuery.graphql";

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
      abilities {
        ability {
          name
        }
        is_hidden
      }
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
