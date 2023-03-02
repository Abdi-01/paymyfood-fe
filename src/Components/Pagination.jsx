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
                    bgColor="#00adb5"
                    w="4"
                    variant={props.page + 1 == number ? "solid" : "outline"}
                    _hover={{
                        bg: "#00adb5",
                        color:"#EEEEEE"
                    }}
                    type="button"
                    mr="4"
                    _active={{
                        bgColor: "#00adb5",
                        transform: "scale(0.98)",
                    }}
                >
                    {number}
                </Button>
            ))}
        </Flex>
    );
}

export default Pagination;
