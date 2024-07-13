
import { Game } from "../hooks/useGames";
import { Image, Card,Heading,CardBody } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
