import React from "react";
import CarouselItem from "./CarouselItem";
import styled, { css } from "styled-components";

const Arrow = styled.div`
    width: 0; 
    height: 0; 
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    background-color: transparent; 
    ${props => props.left && css`
        border-right:10px solid whitesmoke;
    `}
    ${props => props.right && css`
        border-left:10px solid whitesmoke;
        margin-left: 25px;
    `}
`;

const ArrowContainer = styled.div`
    height: 30px;
    width: 40px;
`;

const CarouselDiv = styled.div`
    display: flex; 
    align-items: center;
`;

const CarouselItemWrapper = styled.div`
    width: 2000px;
`;

const CarouselWindowDiv = styled.div`
    width: 600px;
    height: 270px;
    overflow: hidden;
    border-radius: 4px;
`;

const carouselWidth = 600;

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...Carousel.getInitialState(this.props)
        }
    }

    slideToPreviousItem = () => {
        const { firstItemIndex, left } = this.state;
        if (firstItemIndex === 2) {
            this.setState({
                firstItemIndex: firstItemIndex - 1,
                left: left + carouselWidth / 3,
                isPrevActive: false,
                isNextActive: true
            },
            );
        }
        else {
            this.setState({
                firstItemIndex: firstItemIndex - 1,
                left: left + carouselWidth / 3,
                isNextActive: true,
                isPrevActive: true
            });
        }
    }

    static getInitialState(props) {
        const { carouselItems } = props;
        return {
            firstItemIndex: 1,
            left: 0,
            isNextActive: carouselItems.length > 3,
            isPrevActive: false,
            carouselItems: carouselItems,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.carouselItems[0].categoryId !== prevState.carouselItems[0].categoryId) {
            return Carousel.getInitialState(nextProps);
        }
        return null;
    }

    slideToNextItem = () => {
        const { firstItemIndex, carouselItems, left } = this.state;
        if (firstItemIndex === carouselItems.length - 3) {
            this.setState({
                firstItemIndex: firstItemIndex + 1,
                left: left - carouselWidth / 3,
                isNextActive: false,
                isPrevActive: true
            });
        }
        else {
            this.setState({
                firstItemIndex: firstItemIndex + 1,
                left: left - carouselWidth / 3,
                isPrevActive: true,
                isNextActive: true
            })
        }
    }

    render() {
        return (
            <CarouselDiv>
                <ArrowContainer>
                    {this.state.isPrevActive && <Arrow left onClick={this.slideToPreviousItem} />}
                </ArrowContainer>
                <CarouselWindowDiv>
                    <CarouselItemWrapper >
                        {this.state.carouselItems.map((item, index) => {
                            return <CarouselItem item={item} leftOffest={this.state.left} />
                        })}
                    </CarouselItemWrapper>
                </CarouselWindowDiv>
                <ArrowContainer>
                    {this.state.isNextActive && <Arrow right onClick={this.slideToNextItem} />}
                </ArrowContainer>
            </CarouselDiv >
        );
    }
}
