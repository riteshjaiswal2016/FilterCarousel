import React from "react";
import "./Carousel.css";
import CarouselItem from "./CarouselItem";

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
        var style = {
            left: this.state.left
        };

        return (
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ height: "30px", width: "40px" }} >{this.state.isPrevActive && <div className="arrow-left" onClick={this.prevSlide}></div>}</div>
                <div className="slider-wrapper">
                    <div className="slider">
                        {this.state.slider.map(function (item, index) {
                            let isCurrent = index + 1 === this.state.activeIndex;
                            return (
                                <CarouselItem item={item} style={style} />
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div style={{ height: "30px", width: "40px" }} >{this.state.isNextActive && <div className="arrow-right" onClick={this.nextSlide}></div>}</div>
            </div >
        );
    }
}
