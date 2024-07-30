import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import PlatformSelector from "./component/PlatformSelector";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import SortSelector from "./component/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})}/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <SortSelector
          sortOrder={gameQuery.sortOrder}
          onSelectSortOrder={(sortOrder) =>
            setGameQuery({ ...gameQuery, sortOrder })
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
