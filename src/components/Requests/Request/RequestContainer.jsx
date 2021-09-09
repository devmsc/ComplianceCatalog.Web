import {connect} from "react-redux";
import React from 'react';
import Request from "./Request";

const RequestContainer = React.memo((props) => {
    return (
        <Request { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {
        role: state.auth.role
    };
}


export default connect(mapStateToProps, { })(RequestContainer);
