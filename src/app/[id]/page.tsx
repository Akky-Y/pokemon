import { Button } from "@/components/ui/button";
import { getPokemon } from "@/data/pokemon";
import Image from "next/image";
import Link from "next/link";

export default async function Page({
  params: { id },
}: { params: { id: string } }) {
  const pokemon = await getPokemon(id);
  console.log(pokemon);

  return (
    <div className="container">
      <Button asChild>
        <Link href="/">戻る</Link>
      </Button>
      {/* <a href="/">戻る</a> */}
      <h2>{pokemon.name}</h2>
      <Image
        src={pokemon.sprites.front_default}
        width={150}
        height={150}
        alt=""
      />
      <audio controls src={pokemon.cries.latest}>
        <track kind="captions" src="path/to/captions.vtt" label="English" />
        Your browser does not support the audio element.
      </audio>
      <audio controls src={pokemon.cries.legacy}>
        <track kind="captions" src="path/to/captions.vtt" label="English" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
