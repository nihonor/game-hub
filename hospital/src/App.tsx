import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import PlatformSelector from "./component/PlatformSelector";
function App() {
  const newLocal = "aside";
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{base:'1fr',lg:'200px 1fr'}}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}><GenreList/></GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector/>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
