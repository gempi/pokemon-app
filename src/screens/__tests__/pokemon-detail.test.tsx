import { PokemonDetailScreen } from "@/src/screens/pokemon-detail";
import { render } from "@testing-library/react-native";
import { useLazyLoadQuery } from "react-relay";

// Mock the react-relay hook
jest.mock("react-relay", () => ({
  ...jest.requireActual("react-relay"),
  useLazyLoadQuery: jest.fn(),
  graphql: jest.fn(),
}));

// Mock the PokemonDetail component
jest.mock("@/src/components/pokemon-detail", () => ({
  PokemonDetail: ({ pokemon }: { pokemon: any }) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { Text } = require("react-native");
    if (!pokemon) {
      return <Text>Pokemon not found</Text>;
    }
    return <Text testID="pokemon-detail">{pokemon.name}</Text>;
  },
}));

const mockUseLazyLoadQuery = useLazyLoadQuery as jest.MockedFunction<
  typeof useLazyLoadQuery
>;

describe("PokemonDetailScreen", () => {
  const mockPokemonData = {
    pokemon: {
      _id: 25,
      name: "pikachu",
      height: 4,
      weight: 60,
      base_experience: 112,
      sprites: {
        front_default: "https://example.com/pikachu.png",
      },
      types: [{ type: { name: "electric" } }],
      stats: [
        { base_stat: 35, stat: { name: "hp" } },
        { base_stat: 55, stat: { name: "attack" } },
        { base_stat: 40, stat: { name: "defense" } },
        { base_stat: 50, stat: { name: "special-attack" } },
        { base_stat: 50, stat: { name: "special-defense" } },
        { base_stat: 90, stat: { name: "speed" } },
      ],
      abilities: [
        { ability: { name: "static" }, is_hidden: false },
        { ability: { name: "lightning-rod" }, is_hidden: true },
      ],
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders pokemon details when data is available", () => {
    mockUseLazyLoadQuery.mockReturnValue(mockPokemonData);

    const { getByTestId } = render(
      <PokemonDetailScreen pokemonName="pikachu" />
    );

    expect(getByTestId("pokemon-detail")).toBeTruthy();
    expect(mockUseLazyLoadQuery).toHaveBeenCalledWith(expect.anything(), {
      name: "pikachu",
    });
  });

  it("renders fallback when pokemon is not found", () => {
    mockUseLazyLoadQuery.mockReturnValue({ pokemon: null });

    const { getByText } = render(
      <PokemonDetailScreen pokemonName="nonexistent" />
    );

    expect(getByText("Pokemon not found")).toBeTruthy();
    expect(mockUseLazyLoadQuery).toHaveBeenCalledWith(expect.anything(), {
      name: "nonexistent",
    });
  });

  it("passes correct pokemon name to query", () => {
    mockUseLazyLoadQuery.mockReturnValue(mockPokemonData);

    render(<PokemonDetailScreen pokemonName="charizard" />);

    expect(mockUseLazyLoadQuery).toHaveBeenCalledWith(expect.anything(), {
      name: "charizard",
    });
  });

  it("handles empty pokemon name", () => {
    mockUseLazyLoadQuery.mockReturnValue({ pokemon: null });

    render(<PokemonDetailScreen pokemonName="" />);

    expect(mockUseLazyLoadQuery).toHaveBeenCalledWith(expect.anything(), {
      name: "",
    });
  });

  it("passes pokemon data to PokemonDetail component", () => {
    mockUseLazyLoadQuery.mockReturnValue(mockPokemonData);

    const { getByTestId } = render(
      <PokemonDetailScreen pokemonName="pikachu" />
    );

    // Verify the component renders with correct data
    expect(getByTestId("pokemon-detail")).toBeTruthy();
  });
});
