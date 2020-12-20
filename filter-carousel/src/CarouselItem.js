import styled from "styled-components";

const Div = styled.div`
    height: 25px;
    width: 200px;
    display: flex;
    justify-content: center;
`
const ImageDiv = styled.div`
    width: 200px;
    height: 200px;
`
const CarouselItemDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background-color: white;
    float: left;
    position: relative;
    transition: all .2s linear;
    `

const CarouselItem = ({ item, leftOffest }) => {
    return (
        <CarouselItemDiv style={{ left: leftOffest }} >
            <Div><span>{item.name}</span></Div>
            <ImageDiv><img src={item.imgUrl} /></ImageDiv>
            <Div><span>{item.price}</span></Div>
        </CarouselItemDiv >
    );
};

export default CarouselItem;