'use client'
import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { MdFavorite, MdAddShoppingCart, MdRemoveShoppingCart  } from 'react-icons/md'

export default function Home() {
  return (
    <>
    <Flex>
      <Box mt="24px" m="auto">
        <Flex alignItems="center" direction="column" gap="5">
          <Heading ml="20px" mt="40px">
            Collections
          </Heading>
          <Flex
            direction="row"
            wrap="wrap"
            mt="20px"
            gap="5"
            justifyContent="space-evenly"
          >
            {NFT_CONTRACTS.map((item) => (
              <Link
                _hover={{ textDecoration: "none" }}
                w={300}
                h={400}
                key={item.address}
                href={`/collection/${item.chain.id.toString()}/${item.address}`}
              >
                <Image src={item.thumbnailUrl} />
                
                <Flex mt="10px" justifyContent="flex-end" alignItems="center">
                    <Text fontSize="large" mt="10px">
                        {item.title}
                    </Text>
                    <Spacer />
                    <MdAddShoppingCart style={{ marginRight: "5px" }} />
                    <MdRemoveShoppingCart />
                    <MdFavorite/>
                </Flex>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Flex>
    </>
  )
}
