import React,{Component} from "react";
import {Table} from 'reactstrap'

class R054_ReactstrapTable extends Component{
    render(){
        return (
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
        )
    }
}

export default R054_ReactstrapTable;