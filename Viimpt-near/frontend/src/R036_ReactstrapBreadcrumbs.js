
import React, {Component} from "react";
import { Breadcrumb, BreadcrumbItem, Table } from "reactstrap";

class R036_ReactstrapBreadcrumbs extends Component{
    render(){
        return (
            <div id="top">
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href='#top'>GO_TOP</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href='#bottom'>Go_BOTTOM</BreadcrumbItem>
                </Breadcrumb>
                <div id="bottom" style={{marginTop:"1000px"}}>
                    <span>bottom</span>
                    <Table striped hover>
                <thead>
                    <tr>
                        <th>rank</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>SALMON</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>SHRIMP</td>
                    </tr>
                </tbody>
            </Table>
                </div>
            </div>
        )
    }
}
export default R036_ReactstrapBreadcrumbs;