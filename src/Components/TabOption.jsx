import React from "react";
import { Tab, Tabs, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

function TabOption() {
    return (
        <Tabs variant="soft-rounded">
            <TabList>
                <Tab bgColor={"#00ADB5"} color="#EEEEEE" mr={"2"}>
                    All Products
                </Tab>
                <Tab bgColor={"#00ADB5"} color="#EEEEEE" mr={"2"}>
                    Main Course
                </Tab>
                <Tab bgColor={"#00ADB5"} color="#EEEEEE" mr={"2"}>
                    Appetizers
                </Tab>
                <Tab bgColor={"#00ADB5"} color="#EEEEEE" mr={"2"}>
                    Beverages
                </Tab>
                <Tab bgColor={"#00ADB5"} color="#EEEEEE" mr={"2"}>
                    Desserts
                </Tab>
            </TabList>
            <TabPanels ml={"-4"}>
                <TabPanel
                    display={"flex"}
                    flexWrap={"wrap"}
                    color={"#EEEEEE"}
                    gap={"2"}
                >
                    <ProductCard />
                </TabPanel>
                <TabPanel
                    display={"flex"}
                    flexWrap={"wrap"}
                    color={"#EEEEEE"}
                    gap={"2"}
                >
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </TabPanel>
                <TabPanel
                    display={"flex"}
                    flexWrap={"wrap"}
                    color={"#EEEEEE"}
                    gap={"2"}
                >
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </TabPanel>
                <TabPanel
                    display={"flex"}
                    flexWrap={"wrap"}
                    color={"#EEEEEE"}
                    gap={"2"}
                >
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </TabPanel>
                <TabPanel
                    display={"flex"}
                    flexWrap={"wrap"}
                    color={"#EEEEEE"}
                    gap={"2"}
                >
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

export default TabOption;
