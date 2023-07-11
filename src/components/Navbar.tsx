import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useColorMode,
  useColorModeValue,
  Row,
  Heading,
  Button,
  IconButton,
  HamburgerIcon,
  CircleIcon,
  PlayIcon,
  MoonIcon,
  SunIcon
} from "native-base";

type Props = {
  heading: String
}

const Navbar: React.FC<Props> = ({ heading }) => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();

  const text = useColorModeValue("darkText", "light.50");
  const bg = useColorModeValue("warmGray.50", "coolGray.800");

  return (
    <>
      <Row alignItems="center" justifyContent="space-between" p="1" bg={bg}>
        <Row alignItems="center">
          <IconButton
            icon={<HamburgerIcon size="lg" color={text} />}
            onPress={() => console.log("imagine menu here pls", colorMode)}
          />
          <Button onPress={() => navigate('/start')} variant="ghost">
            <Row alignItems="center">
              <PlayIcon size="md" color={text} />
              <Heading size="md">GameCollection</Heading>
            </Row>
          </Button>
        </Row>
        <Row alignItems="center">
          <Heading size="md">{heading}</Heading>
        </Row>
        <Row alignItems="center">
          <IconButton
            icon={
              colorMode === "light" ?
                <MoonIcon size="lg" color={text} /> :
                <SunIcon size="lg" color={text} />
            }
            onPress={() => toggleColorMode()}
          />
          {/* placeholders */}
          <IconButton icon={<CircleIcon size="lg" color={text} />} />
          <IconButton icon={<CircleIcon size="lg" color={text} />} />
        </Row>
      </Row>
    </>
  )
}

export default Navbar;