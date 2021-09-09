import {connect} from "react-redux";
import React from 'react';
import NewRequest from "./NewRequest";

const NewRequestContainer = React.memo((props) => {
    return (
        <NewRequest { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(NewRequestContainer);
