import React, { Component } from 'react';
import { UncontrolledCollapse } from 'reactstrap';

const items = [
    {
        src: '',
        altText: 'SLIDE 1',
        caption: 'DESCRIPTION',
        header : 'TITLE'
    },
    {
        src: '',
        altText: 'SLIDE 2',
        caption: 'DESCRIPTION',
        header : 'TITLE'
    },
    {
        src: '',
        altText: 'SLIDE 3',
        caption: 'DESCRIPTION',
        header : 'TITLE'
    },
    {
        src: '',
        altText: 'SLIDE 4',
        caption: 'DESCRIPTION',
        header : 'TITLE'
    },
];
class home_Slide extends Component {
    render() {
        return (
            <UncontrolledCollapse items={items} />
        )
    }
}
export default home_Slide;