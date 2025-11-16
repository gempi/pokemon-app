import { PokemonListScreen } from "@/src/screens/pokemon-list";
import { render, waitFor } from "@testing-library/react-native";
import { useLazyLoadQuery, useRelayEnvironment } from "react-relay";

// Mock react-relay hooks
jest.mock("react-relay", () => ({
  ...jest.requireActual("react-relay"),
  useLazyLoadQuery: jest.fn(),
  useRelayEnvironment: jest.fn(),
  fetchQuery: jest.fn(),
  graphql: jest.fn(),
}));

// Mock the PokemonList component
jest.mock("@/src/components/pokemon-list", () => ({
  PokemonList: ({
    pokemons,
    isLoadingMore,
    loadMore,
  }: {
    pokemons: any[];
    isLoadingMore?: boolean;
    loadMore?: () => void;
  }) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { Text, View } = require("react-native");

    if (pokemons.length === 0) {
      return (
        <View testID="pokemon-list">
          <Text>No pokemons found.</Text>
        </View>
      );
    }
    return (
      <View testID="pokemon-list">
        {pokemons.map((pokemon, index) => (
          <Text key={index} testID={`pokemon-${pokemon.name}`}>
            {pokemon.name}
          </Text>
        ))}
        {isLoadingMore && <Text testID="loading-more">Loading...</Text>}
        {loadMore && <Text testID="has-load-more">Has load more function</Text>}
      </View>
    );
  },
}));

const mockUseLazyLoadQuery = useLazyLoadQuery as jest.MockedFunction<
  typeof useLazyLoadQuery
>;
const mockUseRelayEnvironment = useRelayEnvironment as jest.MockedFunction<
  typeof useRelayEnvironment
>;

describe("PokemonListScreen", () => {
  const mockInitialData = {
    pokemons: {
      nextOffset: 20,
      results: [
        { _id: 1, name: "bulbasaur", image: "https://example.com/1.png" },
        { _id: 2, name: "ivysaur", image: "https://example.com/2.png" },
        { _id: 3, name: "venusaur", image: "https://example.com/3.png" },
      ],
    },
  };

  const mockEnvironment = {};

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseRelayEnvironment.mockReturnValue(mockEnvironment as any);
  });

  it("renders initial pokemon data", async () => {
    mockUseLazyLoadQuery.mockReturnValue(mockInitialData);

    const { getByTestId, queryByText } = render(<PokemonListScreen />);

    await waitFor(() => {
      expect(getByTestId("pokemon-list")).toBeTruthy();
    });

    expect(queryByText("bulbasaur")).toBeTruthy();
    expect(queryByText("ivysaur")).toBeTruthy();
    expect(queryByText("venusaur")).toBeTruthy();
  });

  it("calls useLazyLoadQuery with correct initial parameters", () => {
    mockUseLazyLoadQuery.mockReturnValue(mockInitialData);

    render(<PokemonListScreen />);

    expect(mockUseLazyLoadQuery).toHaveBeenCalledWith(expect.anything(), {
      limit: 20,
      offset: 0,
    });
  });

  it("renders empty state when no pokemons are returned", async () => {
    mockUseLazyLoadQuery.mockReturnValue({
      pokemons: { nextOffset: null, results: [] },
    });

    const { queryByText } = render(<PokemonListScreen />);

    await waitFor(() => {
      expect(queryByText("No pokemons found.")).toBeTruthy();
    });
  });

  it("handles null results gracefully", async () => {
    mockUseLazyLoadQuery.mockReturnValue({
      pokemons: { nextOffset: null, results: null },
    });

    const { queryByText } = render(<PokemonListScreen />);

    await waitFor(() => {
      expect(queryByText("No pokemons found.")).toBeTruthy();
    });
  });

  it("passes loadMore function to PokemonList component", async () => {
    mockUseLazyLoadQuery.mockReturnValue(mockInitialData);

    const { queryByTestId } = render(<PokemonListScreen />);

    await waitFor(() => {
      expect(queryByTestId("has-load-more")).toBeTruthy();
    });
  });

  it("initializes state correctly from useLazyLoadQuery data", async () => {
    mockUseLazyLoadQuery.mockReturnValue(mockInitialData);

    const { queryByText } = render(<PokemonListScreen />);

    await waitFor(() => {
      expect(queryByText("bulbasaur")).toBeTruthy();
      expect(queryByText("ivysaur")).toBeTruthy();
      expect(queryByText("venusaur")).toBeTruthy();
    });
  });

  it("handles undefined pokemons data gracefully", async () => {
    mockUseLazyLoadQuery.mockReturnValue({
      pokemons: undefined,
    });

    const { queryByText } = render(<PokemonListScreen />);

    await waitFor(() => {
      expect(queryByText("No pokemons found.")).toBeTruthy();
    });
  });

  it("uses useRelayEnvironment for fetchQuery operations", () => {
    mockUseLazyLoadQuery.mockReturnValue(mockInitialData);

    render(<PokemonListScreen />);

    expect(mockUseRelayEnvironment).toHaveBeenCalled();
  });

  it("sets up proper state management hooks", () => {
    mockUseLazyLoadQuery.mockReturnValue(mockInitialData);

    const { queryByTestId } = render(<PokemonListScreen />);

    // Component should render without errors, indicating proper hook setup
    expect(queryByTestId("pokemon-list")).toBeTruthy();
  });
});
