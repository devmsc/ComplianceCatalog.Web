import {connect} from "react-redux";
import React from 'react';
import Requests from "./Requests";

const RequestsContainer = React.memo((props) => {
    return (
        <Requests { ...props } />
    )
})


const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(RequestsContainer);
