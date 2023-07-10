import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Heading, HamburgerIcon, IconButton, CircleIcon, PlayIcon, Button } from "native-base";

type Props = {
  heading: String
}

const Navbar: React.FC<Props> = ({ heading }) => {
  const navigate = useNavigate();

  return (
    <>
      <Row bg="indigo.100" alignItems="center" justifyContent="space-between" p="1">
        <Row alignItems="center">
          <IconButton
            icon={<HamburgerIcon size="lg" color="dark.50" />}
            onPress={() => console.log("imagine menu here pls")}
          />
          <Button onPress={() => navigate('/start')} variant="ghost">
            <Row alignItems="center">
              <PlayIcon size="md" color="dark.50" />
              <Heading size="md">GameCollection</Heading>
            </Row>
          </Button>
        </Row>
        <Row alignItems="center">
          <Heading size="md">{heading}</Heading>
        </Row>
        <Row alignItems="center">
          {/* placeholders */}
          <IconButton icon={<CircleIcon size="lg" color="dark.50" />} />
          <IconButton icon={<CircleIcon size="lg" color="dark.50" />} />
          <IconButton icon={<CircleIcon size="lg" color="dark.50" />} />
        </Row>
      </Row>
    </>
  )
}

export default Navbar;