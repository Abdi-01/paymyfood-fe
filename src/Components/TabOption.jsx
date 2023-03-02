import React from "react";
import { Tab, Tabs, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import TabPanell from "./TabPanell";

function TabOption(props) {

    const printTabList = () => {
        return props.dataAllCategory.map((val,idx) => {
            return <Tab bgColor={"#00ADB5"} color="#EEEEEE" mr={"2"}>
            {val.category}
        </Tab>
        })
    }

    const printTabPanel = () => {
        return props.dataAllCategory.map((val,idx) => {
            return <TabPanell />
        })
    }

    const printTabPanelAllProducts = () => {
        return props.dataAllProducts.map((val,idx) => {
            return <ProductCard product={val.product} price={val.price} image={val.image}/>
        })
    }

    console.log("props get all product taboption : ", props.dataAllProducts)


    return (
        <Tabs variant="soft-rounded">
            <TabList>
                <Tab bgColor={"#00ADB5"} color="#EEEEEE" mr={"2"}>
                    All Products
                </Tab>
                {printTabList()}
            </TabList>
            <TabPanels ml={"-4"}>
                {/* TAB-PANEL 1 */}
                <TabPanel
                    display={"flex"}
                    flexWrap={"wrap"}
                    color={"#EEEEEE"}
                    gap={"2"}
                >
                    {printTabPanelAllProducts()}
                </TabPanel>


                {printTabPanel()}

            </TabPanels>
        </Tabs>
    );
}

export default TabOption;
