import { getGames } from "@/actions/serverActions";
import GameContainer from "@/components/game-container";
import Paginator from "@/components/paginator";
import SearchGames from "@/components/search-games";

export default async function Home({ params, searchParams }) {
  const resolvedParams = await params;
  const searchParamsResueltos = await searchParams;

  const page = searchParamsResueltos.page || 1;
  const name = searchParamsResueltos.name || "";

  const { results: juegos } = await getGames(page, name);

  return (
    <>
      <Paginator page={page} />
      <SearchGames />
      <GameContainer
        games={juegos}
      />
      <Paginator page={page} />
    </>
  );
}
