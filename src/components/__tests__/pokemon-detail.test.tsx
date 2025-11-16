import { PokemonDetail } from "@/src/components/pokemon-detail";
import { render } from "@testing-library/react-native";

describe("PokemonDetail", () => {
  const mockPokemon = {
    _id: 1,
    name: "pikachu",
    height: 4,
    weight: 60,
    base_experience: 112,
    sprites: {
      front_default: "https://example.com/pikachu.png",
    },
    types: [{ type: { name: "electric" } }],
    stats: [{ base_stat: 55, stat: { name: "speed" } }],
    abilities: [
      { ability: { name: "static" }, is_hidden: false },
      { ability: { name: "lightning-rod" }, is_hidden: true },
    ],
  };

  it("renders pokemon details when data is available", () => {
    const { getByText, queryByText } = render(
      <PokemonDetail pokemon={mockPokemon} />
    );

    expect(getByText("pikachu")).toBeTruthy();
    expect(queryByText("Pokemon not found")).toBeNull();
  });

  it("renders fallback when pokemon is not found", () => {
    const { getByText } = render(<PokemonDetail pokemon={null} />);

    expect(getByText("Pokemon not found")).toBeTruthy();
  });
});
