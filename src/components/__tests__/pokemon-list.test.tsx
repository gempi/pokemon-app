import { PokemonList } from "@/src/components/pokemon-list";
import { render } from "@testing-library/react-native";

describe("PokemonList", () => {
  const mockLoadMore = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders empty message when no pokemons are returned", () => {
    const { getByText } = render(
      <PokemonList pokemons={[]} loadMore={mockLoadMore} />
    );

    expect(getByText("No pokemons found.")).toBeTruthy();
  });

  it("renders a list of pokemons when data is available", () => {
    const pokemons = [
      { _id: 1, name: "bulbasaur", image: "https://example.com/1.png" },
      { _id: 2, name: "ivysaur", image: "https://example.com/2.png" },
    ];

    const { getByText } = render(
      <PokemonList pokemons={pokemons} loadMore={mockLoadMore} />
    );

    expect(getByText("bulbasaur")).toBeTruthy();
    expect(getByText("ivysaur")).toBeTruthy();
  });
});
