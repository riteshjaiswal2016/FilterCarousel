
const CarouselItem = ({ imgUrl, imgTitle, isCurrent, leftStyle, style }) => {
    return (
        <li style={style}>
            <img style={{ left: leftStyle, }} src={imgUrl} className={isCurrent ? 'slider-item' : 'hide'} />
        </li>
    );
};

export default CarouselItem;