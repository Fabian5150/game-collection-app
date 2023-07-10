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
      <Row bg="primary.50" alignItems="center" justifyContent="space-between" p="1">
        <Row alignItems="center">
          <IconButton
            icon={<HamburgerIcon size="lg" color="darkText" />}
            onPress={() => console.log("imagine menu here pls")}
          />
          <Button onPress={() => navigate('/start')} variant="ghost">
            <Row alignItems="center">
              <PlayIcon size="md" color="darkText" />
              <Heading size="md">GameCollection</Heading>
            </Row>
          </Button>
        </Row>
        <Row alignItems="center">
          <Heading size="md">{heading}</Heading>
        </Row>
        <Row alignItems="center">
          {/* placeholders */}
          <IconButton icon={<CircleIcon size="lg" color="darkText" />} />
          <IconButton icon={<CircleIcon size="lg" color="darkText" />} />
          <IconButton icon={<CircleIcon size="lg" color="darkText" />} />
        </Row>
      </Row>
    </>
  )
}

export default Navbar;