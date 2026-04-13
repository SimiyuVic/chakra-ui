import { Flex, Heading, Box, Text, Button, HStack, Spacer } from "@chakra-ui/react";

const Navbar = () => {
    return ( 
        <Flex as="nav" p="10" alignItems="center">
            <Heading as="h1"> 
                DEvcON
            </Heading>

            <Spacer />

            <HStack spacing="20px">
                <Box bg="gray.200" p="10px">VC</Box>
                <Text>victor.dev@gmail.com</Text>
                <Button colorScheme="purple">Log-Out</Button>
            </HStack>
        </Flex>
     );
}
 
export default Navbar;