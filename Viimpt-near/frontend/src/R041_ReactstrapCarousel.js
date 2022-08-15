import React,{ Component } from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
    {
        src: "https://ifh.cc/g/opF7KL.jpg",
        altText: 'alternative TExt',
        caption: 'caption',
        header: 'title'
    },
    {
        src: "https://ifh.cc/g/Hq19O8.jpg",
        altText: 'alternative TExt',
        caption: 'caption',
        header: 'title'
    },
];
class R041_ReactstrapCarousel extends Component{
    render() {
        return (
            <UncontrolledCarousel items={items} />
        )
    }
}
export default R041_ReactstrapCarousel;