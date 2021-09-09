import {connect} from "react-redux";
import React from 'react';
import CreateRequest from "./CreateRequest";

const CreateRequestContainer = React.memo((props) => {
    return (
        <CreateRequest { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(CreateRequestContainer);
