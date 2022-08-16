import React, {Component} from "react";
import {connect} from 'react-redux';



import ReactstrapNavbar from "./R049_ReactstrapNavbar";
import ReactstrapAlerts from './R034_ReactstrapAlerts';
import ReactstrapBreadcrumbs from "./R036_ReactstrapBreadcrumbs";
import ReactstrapCarousel from "./R041_ReactstrapCarousel";
import 'bootstrap/dist/css/bootstrap.css'
import { render } from "react-dom";

class App extends Component {
    render(){
        return(
            <div>
                <ReactstrapNavbar />
                < ReactstrapCarousel/>
                <ReactstrapBreadcrumbs />
                
            </div>
        )
    }
}
// let mapStateToProps = (state, props) => {
//     console.log('Props from index.js' + props.indexProp)
//     return {
//         str: state.data.str,
//     };
// };
// App = connect(mapStateToProps, null)(App);
export default App;