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
            width: `${this.modWidth / 3}px`,
            height: this.props.sliderHeight,
            display: "inline-block"
        };

        return (
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ height: "30px", width: "40px" }} >{this.state.isPrevActive && <button onClick={this.prevSlide}>Prev</button>}</div>
                <div className="slider-wrapper">
                    <ul className="slider">
                        {this.state.slider.map(function (item, index) {
                            let isCurrent = index + 1 === this.state.activeIndex;
                            return (
                                <CarouselItem imgUrl={item.imgUrl} imgTitle="" isCurrent={isCurrent} style={style} leftStyle={this.state.left} />
                            )
                        }, this)
                        }
                    </ul>
                </div>
                {/* <div className="buttons-wrapper">
                    {this.state.isPrevActive && <button className="prev-button" onClick={this.prevSlide}></button>}
                    {this.state.isNextActive && <button className="next-button" onClick={this.nextSlide}></button>}
                </div> */}
                <div style={{ height: "30px", width: "40px" }} >{this.state.isNextActive && <button onClick={this.nextSlide}>Next</button>}</div>
            </div >
        );
    }
}
