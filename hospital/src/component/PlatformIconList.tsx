import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { Text,Icon, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
    const iconMap:{[key:string]:IconType}={
         pc:FaWindows,
         playstation:FaPlaystation,
         xbox:FaXbox,
         nintendo:SiNintendo,
         mac:FaApple,
         linux:FaLinux,
         android:FaAndroid,
         web:BsGlobe,
         ios:MdPhone,
    }
  return (

    <HStack marginY={1}>
      {platforms.map((platform) => (
      <Icon as={iconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>

  );
};

export default PlatformIconList;
