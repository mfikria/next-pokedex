import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image priority src="/images/pokemon-logo.svg" fill alt="pokemon logo" />
    </>
  );
}
