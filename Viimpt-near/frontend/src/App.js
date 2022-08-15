import React from "react";
import ReactstrapNavbar from "./R049_ReactstrapNavbar";
import ReactstrapAlerts from './R034_ReactstrapAlerts';
import ReactstrapBreadcrumbs from "./R036_ReactstrapBreadcrumbs";
import ReactstrapCarousel from "./R041_ReactstrapCarousel";
import 'bootstrap/dist/css/bootstrap.css'

function App(){
    return (
        <div>
            <ReactstrapNavbar />
            <ReactstrapAlerts />
            <ReactstrapCarousel />
            <ReactstrapBreadcrumbs />
            
        </div>
    );
}
export default App;