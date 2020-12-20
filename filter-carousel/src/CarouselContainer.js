import Carousel from "./Carousel";
import React, { useState } from "react";
import { CAR_IMAGES, PRODUCT_CATEGORY } from "./constants";

const CarouselContainer = () => {
    const filteredItems = CAR_IMAGES.filter((item) => {
        return item.categoryId === 1;
    });
    const [selectedCategoryItems, setSelectedCategoryItems] = useState(filteredItems);
    const onProductChange = (event) => {
        let selectedCategoryId = event.target.value;
        let items = CAR_IMAGES.filter((item) => {
            return item.categoryId === parseInt(selectedCategoryId);
        })
        setSelectedCategoryItems(items);
    }

    return (
        <>
            <select onChange={onProductChange}>
                <option value={PRODUCT_CATEGORY.IPHONE.id}>{PRODUCT_CATEGORY.IPHONE.name}</option>
                <option value={PRODUCT_CATEGORY.ANDROID.id}>{PRODUCT_CATEGORY.ANDROID.name}</option>
            </select>
            <Carousel sliderItems={selectedCategoryItems} sliderWidth="600px" sliderHeight="250px" />
        </>
    )
}

export default CarouselContainer;