const CarouselItem = ({ item, style }) => {
    return (
        <div style={style} className={'slider-item'}>
            <div style={{ height: "25px", width: "200px", display: "flex", justifyContent: "center" }}><span>{item.name}</span></div>
            <div style={{ height: "200px", width: "200px" }}><img src={item.imgUrl} style={{ height: "200px", width: "200px" }} /></div>
            <div style={{ height: "25px", width: "200px", display: "flex", justifyContent: "center" }}><span>{item.price}</span></div>
        </div>
    );
};

export default CarouselItem;