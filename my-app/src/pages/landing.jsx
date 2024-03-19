import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
  Center,
} from "@chakra-ui/react";
import theme from "../theme";

const Landing = () => {
  return (
    <Box
      bgImage="url('/images/banner-image-bestscreenshots.jpg')" //cycle through screenshots w/ fade transition?
      bgSize={"cover"}
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      minH={"100vh"}
      opacity={0.8}
    >
      <Stack
        maxW={"5x1"}
        theme={theme}
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        fontFamily="Add City Boy, sans-serif"
      >
        <Box
          fontWeight={"extrabold"}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          color={"grey"}
          bgColor={"black"}
          minW="100vw"
          mb={10}
        >
          IRacing Stats And Telemetry
        </Box>
        <Box
          opacity={0.9}
          mt={3}
          maxW="sm"
          borderRadius="lg"
          overflow="hidden"
          bgColor={"black"}
          pr={2}
          pl={2}
        >
          <Heading color={"grey"}>What is IRST?</Heading>
        </Box>
        <Box
          mt={3}
          maxW="1000px"
          borderRadius="lg"
          overflow="hidden"
          bgColor={"black"}
          opacity={0.9}
        >
          <Text fontSize="20px" color={"grey"} fontWeight={"bold"} maxW={"3x1"}>
            IRacing Stats And Telemetry (IRST) aims to provide users with a
            variety of statistics pertaining to their IRacing careers, as well
            as telemetry to help them analyze their racecraft.
          </Text>
        </Box>
        <Box
          opacity={0.9}
          mt={10}
          borderRadius="lg"
          overflow="hidden"
          bgColor={"black"}
          pr={2}
          pl={2}
        >
          <Heading color={"grey"}>Who I am and why I created IRST</Heading>
        </Box>
        <Box
          mt={3}
          maxW="1000px"
          borderRadius="lg"
          overflow="hidden"
          bgColor={"black"}
          opacity={0.9}
        >
          <Text fontSize="20px" color={"grey"} fontWeight={"bold"} maxW={"3x1"}>
            My name is Marcus Fredericks, and I am a full time student at New
            York Institute of Technology majoring in Computer Science. For many
            years now I have been a fan of motorsports. I started watching F1
            when I was younger, and my infatuation for motorsports spread across
            a wider variety of series and diciplines. One of my earlier
            experiences with racing games was over decade ago, playing F1 games
            on my Xbox controller. Only recently did I step foot into the more
            "serious" side of sim racing, purchasing better equpitment and
            subscribing to IRacing. With the purpose of improving my driving
            ability and laptimes, I looked for sevices allowing me to analyze my
            progress and areas of improvement. I have experiences a variety of
            telemetry logging and comparison services, which gave me the
            inspiration to make one of my own.
          </Text>
          <Text
            fontSize="20px"
            color={"grey"}
            fontWeight={"bold"}
            maxW={"3x1"}
            mt={3}
          >
            Only recently have I stepped my feet into the more "serious" side of
            sim racing, purchasing better equpitment and subscribing to IRacing.
            With the purpose of improving my driving ability and laptimes, I
            looked for sevices allowing me to analyze my progress and areas of
            improvement. I have experiences a variety of telemetry logging and
            comparison services, which gave me the inspiration to make one of my
            own.
          </Text>
        </Box>
        //add function
        <Box mt={3} maxW="1000px" borderRadius="lg" overflow="hidden">
          <Button mt={7}>Get Started With IRST!</Button>
        </Box>
        <Text
          mt={3}
          fontSize="lg"
          color={"white.500"}
          fontWeight={"bold"}
        ></Text>
      </Stack>
    </Box>

    // <Container
    //   maxW="5x1"
    //   theme={theme}
    //   bgImage="url('/images/banner-image-bestscreenshots.jpg')"
    // >
    //   <Stack textAlign={"center"}>
    //     <Text fontSize="large"></Text>
    //   </Stack>
    // </Container>
  );
};

export default Landing;

/*
landing/about page
Title, and content
explain what this is, why the stats are important, and why the future telemetry function is important
explain why you are choosing to do this project
add pictures
simple styling and structure
*/
