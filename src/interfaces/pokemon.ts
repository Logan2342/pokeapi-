

export default interface Pokemon {
    url: string,
    name: string,
}

interface Ablility {
    ability: {
        name: string;
    };
}

export default interface PokemonData {
    height: number;
    weight: number;
    abilities: Ablility[];
    types: { type: { name: string } }[];
}
