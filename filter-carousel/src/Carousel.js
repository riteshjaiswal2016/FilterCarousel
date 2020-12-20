import React from "react";
import "./Carousel.css";
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
    height: 250px;
    overflow: hidden;
    border-radius: 10px;
`;

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: this.props.sliderItems,
            activeIndex: 1,
            left: 0,
            isNextActive: true,
            isPrevActive: false,
        }
        this.modWidth = parseInt(this.props.sliderWidth.replace("px", ""));
    }

    prevSlide = () => {
        if (this.state.activeIndex === 2) {
            this.setState({
                activeIndex: this.state.activeIndex - 1,
                left: this.state.left + this.modWidth / 3,
                isPrevActive: false,
                isNextActive: true
            },
            );
        }
        else {
            this.setState({
                activeIndex: this.state.activeIndex - 1,
                left: this.state.left + this.modWidth / 3,
                isNextActive: true,
                isPrevActive: true
            });
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.sliderItems[0].categoryId != prevState.slider[0].categoryId) {
            return {
                activeIndex: 1,
                left: 0,
                isNextActive: true,
                isPrevActive: false,
                slider: nextProps.sliderItems,
            }
        }
        return null;
    }

    nextSlide = () => {
        if (this.state.activeIndex === this.state.slider.length - 3) {
            this.setState({
                activeIndex: this.state.activeIndex + 1,
                left: this.state.left - this.modWidth / 3,
                isNextActive: false,
                isPrevActive: true
            }
            );
        }
        else {
            this.setState({
                activeIndex: this.state.activeIndex + 1,
                left: this.state.left - this.modWidth / 3,
                isPrevActive: true,
                isNextActive: true
            })
        }
    }

    render() {
        return (
            <CarouselDiv>
                <ArrowContainer>
                    {this.state.isPrevActive && <Arrow left onClick={this.prevSlide} />}
                </ArrowContainer>
                <CarouselWindowDiv>
                    <CarouselItemWrapper >
                        {this.state.slider.map((item, index) => {
                            return <CarouselItem item={item} leftOffest={this.state.left} />
                        })}
                    </CarouselItemWrapper>
                </CarouselWindowDiv>
                <ArrowContainer>
                    {this.state.isNextActive && <Arrow right onClick={this.nextSlide} />}
                </ArrowContainer>
            </CarouselDiv >
        );
    }
}
