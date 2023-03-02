import { TabPanel } from '@chakra-ui/react';
import React from 'react';
import ProductCard from './ProductCard';

function TabPanell(props) {
    return ( 
        <TabPanel
        display={"flex"}
        flexWrap={"wrap"}
        color={"#EEEEEE"}
        gap={"2"}
    >
        <ProductCard/>
    </TabPanel>
     );
}

export default TabPanell;