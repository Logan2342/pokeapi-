import React, { useEffect, useState } from 'react';
import Pokemon from "@/interfaces/pokemon";
import { useInView } from "react-intersection-observer";
import { fetchPokemon } from "@/api/getPokemon";
import Image from "next/image";
import PokemonCard from "@/components/PokemonCard";

function ClipLoader(props: { color: string }) {
    return <div style={{ color: props.color }}>Loading...</div>;
}

const LoadPokemon = ({
                         search,
                         initialPokemon
                     }: {
    search: string | undefined;
    initialPokemon: Pokemon[] | undefined;
}) => {
    const [pokemon, setPokemon] = useState<Pokemon[]>(initialPokemon || []);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const { inView, ref } = useInView();

    // Helper function to simulate delay
    const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));

    const loadMorePokemon = async () => {
        setLoading(true);
        await delay(1000);
        const nextPage = page + 1;
        const newPokemon = await fetchPokemon({
            search: search || '',
            page: nextPage,
        });
        setPage(nextPage);
        setPokemon((prev) => {
            if (!prev) return newPokemon;
            const uniquePokemon = newPokemon.filter(
                (poke: Pokemon) =>
                    !prev.some((p) => p.name === poke.name)
            );
            return [...prev, ...uniquePokemon];
        });
        setLoading(false);
    };

    useEffect(() => {
        console.log('Initial Pokemon:', initialPokemon);
        if (!initialPokemon || initialPokemon.length === 0) {
            loadMorePokemon();
        }
    }, []);

    useEffect(() => {
        if (inView) {
            loadMorePokemon();
        }
    }, [inView]);

    return (
        <>
            <div className="">
                {pokemon?.map((poke: Pokemon) => {
                    console.log('Rendering Pokemon:', poke);
                    const pokemonIndex = poke.url.split('/')[poke.url.split('/').length - 2];
                    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
                    return (
                        <>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                                {pokemon?.map((poke: Pokemon) => (
                                    <PokemonCard key={poke.url} pokemon={poke} />
                                ))}
                            </div>
                            {pokemon && pokemon.length >= 24 && (
                                <div
                                    className="flex justify-center items-center p-4"
                                    ref={ref}
                                >
                                    <ClipLoader color="#fff" />
                                </div>
                            )}
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default LoadPokemon;