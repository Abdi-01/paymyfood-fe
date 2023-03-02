import { Button, Flex } from "@chakra-ui/react";
import React from "react";

function Pagination(props) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.totalData / props.size); i++) {
        pageNumbers.push(i);
    }
    return (
        <Flex>
            {pageNumbers.map((number) => (
                <Button
                    onClick={() => props.paginate(number - 1)}
                    color="white"
                    size="md"
                    fontSize={"xs"}
                    colorScheme="pmf"
                    w="4"
                    mr="4"
                    variant={props.page + 1 == number ? "solid" : "outline"}

                    type="button"
                    // _active={{
                    //     colorScheme: "pmf",

                    //     transform: "scale(0.98)",
                    // }}
                >
                    {number}
                </Button>
            ))}
        </Flex>
    );
}

export default Pagination;
