import { Container, Heading, Text, Box, filter} from "@chakra-ui/react";

const Dashboard = () => {
  const boxStyles = {
    bg: "purple",
    my: "20px",
    p: "16px",
    color: "white",
    filter: "blur(1px)",
    ":hover": {
      color: "black",
      bg: "blue:300"
    }
  }
  return ( 
        <Container my="20px" as="section" maxWidth="4xl" py="20px">
          <Heading marginBottom="10px">
            Chakra UI
          </Heading>
          <Text marginLeft="5px">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sed explicabo iste dolor sequi officia officiis molestiae? Consequuntur quia, aliquam optio vel esse odio alias incidunt in dolores aliquid consectetur?
          </Text>
          <Text marginLeft="5px" color="blue.500" fontWeight="bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sed explicabo iste dolor sequi officia officiis molestiae? Consequuntur quia, aliquam optio vel esse odio alias incidunt in dolores aliquid consectetur?
          </Text>
          <Box my="30px" p="20px" bg="orange"> 
            <Text>This is a Box</Text>
          </Box>
          <Box sx={boxStyles}>
            Second Box
          </Box>
        </Container>
   );
}
 
export default Dashboard;