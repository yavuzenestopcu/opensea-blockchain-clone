'use client'

import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import { Link } from "@chakra-ui/next-js";
import {
    Box,
    Flex,
    Image,
    Text,
} from "@chakra-ui/react";

export default function Collections() {
    return (
        <Flex>
            <Box mt="24px" m="auto">
                <Flex direction="column" gap="4">
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
                                <Text fontSize="large" mt="10px">
                                    {item.title}
                                </Text>
                            </Link>
                        ))}
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}