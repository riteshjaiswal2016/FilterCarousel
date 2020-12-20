import Carousel from "./Carousel";
import React, { useState } from "react";
import { PRODUCTS, PRODUCT_CATEGORY } from "../constants";
import styled from "styled-components";

const Select = styled.select`
    padding: 7px;
    width: 100px;
    border-radius: 5px;
    margin-left: 40px;
    margin-bottom: 30px;
`;

const CarouselContainer = () => {
    const filteredItems = PRODUCTS.filter((item) => {
        return item.categoryId === 1;
    });
    const [selectedCategoryItems, setSelectedCategoryItems] = useState(filteredItems);
    const onProductChange = (event) => {
        let selectedCategoryId = event.target.value;
        let items = PRODUCTS.filter((item) => {
            return item.categoryId === parseInt(selectedCategoryId);
        })
        setSelectedCategoryItems(items);
    }

    return (
        <>
            <Select onChange={onProductChange}>
                <option value={PRODUCT_CATEGORY.IPHONE.id}>{PRODUCT_CATEGORY.IPHONE.name}</option>
                <option value={PRODUCT_CATEGORY.ANDROID.id}>{PRODUCT_CATEGORY.ANDROID.name}</option>
            </Select>
            <Carousel carouselItems={selectedCategoryItems} />
        </>
    )
}

export default CarouselContainer;