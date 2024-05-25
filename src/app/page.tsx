import { getAllPokemons } from "@/data/pokemon";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // const data = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  // const pokemon = await data.json();
  // console.log(pokemon);
  const pokemons = await getAllPokemons();

  console.log(pokemons);

  return (
    <main>
      <div className="container grid grid-cols-3 gap-3">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="bg-muted rounded-lg relative">
            <h2>{pokemon.name}</h2>
            <Link href={`/${pokemon.id}`} className="absolute inset-0" />
            <Image
              src={pokemon.sprites.front_default}
              width={150}
              height={150}
              alt=""
              className="mx-auto"
            />
          </div>
        ))}
      </div>
      {/* <h1>{pokemon.sprites.front_default}</h1> */}
      {/* <img src={pokemon.sprites.front_default} alt="" /> */}
    </main>
  );
}
