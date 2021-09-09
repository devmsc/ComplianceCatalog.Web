import {connect} from "react-redux";
import React from 'react';
import EditBusinessClientResponse from "./EditBusinessClientResponse";

const EditBusinessClientResponseContainer = React.memo((props) => {
    return (
        <EditBusinessClientResponse { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(EditBusinessClientResponseContainer);
