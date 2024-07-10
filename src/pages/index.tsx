import { useEffect, useState } from "react";
import { fetchPokemon, getPokemon } from "@/api/getPokemon";
import LoadPokemon from "@/components/LoadPokemon";
import Pokemon from "@/interfaces/pokemon";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetchPokemon({ search: searchQuery });
                console.log(`Response from pokemon API: ${JSON.stringify(response, null, 2)}`);
                setPokemonList(response); // Assuming the API returns an array of Pokemon
            } catch (error) {
                console.error('Failed to fetch Pokemon:', error);
            }
        };

        fetchPokemonData();
    }, [searchQuery]);

    const handleSearch = async () => {
        try {
            const response = await getPokemon({ query: searchQuery, limit: 100, page: 1 });
            console.log(`Search response from pokemon API: ${JSON.stringify(response, null, 2)}`);
            setPokemonList(response); // Assuming the API returns an array of Pokemon
        } catch (error) {
            console.error('Failed to fetch Pokemon:', error);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-row-reverse items-center space-x-reverse space-x-4 border-2 border-neutral-700 p-4">
                <input
                    type="text"
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
                    placeholder="Look up"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <div className="flex m-6 flex-row w-full border-2 border-blue-500 gap-4">
                <LoadPokemon search={searchQuery} initialPokemon={pokemonList} />
            </div>
        </main>
    );
}