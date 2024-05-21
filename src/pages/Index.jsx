import { Container, VStack, HStack, Box, Text, Image, Button, IconButton, Heading } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Naruto Action Figure",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1630710478039-9c680b99f800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXJ1dG8lMjBhY3Rpb24lMjBmaWd1cmV8ZW58MHx8fHwxNzE2MzAwMjIzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "One Piece T-Shirt",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbmUlMjBwaWVjZSUyMHQtc2hpcnR8ZW58MHx8fHwxNzE2MzAwMjIzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Attack on Titan Poster",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1580130775562-0ef92da028de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdHRhY2slMjBvbiUyMHRpdGFuJTIwcG9zdGVyfGVufDB8fHx8MTcxNjMwMDIyNHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <HStack w="full" justifyContent="space-between">
          <Heading as="h1" size="xl">
            Anime Shop
          </Heading>
          <HStack spacing={4}>
            <IconButton aria-label="Search" icon={<FaSearch />} size="lg" />
            <IconButton aria-label="Cart" icon={<FaShoppingCart />} size="lg" />
          </HStack>
        </HStack>
        <VStack spacing={8} w="full">
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" w="full" maxW="sm">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Text fontWeight="bold" fontSize="xl">
                  {product.name}
                </Text>
                <Text mt={2}>{product.price}</Text>
                <Button mt={4} colorScheme="teal">
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
