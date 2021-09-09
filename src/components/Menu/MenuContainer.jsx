import Menu from "./Menu";
import {connect} from "react-redux";
import React from 'react';

const MenuContainer = React.memo((props) => {
    return (
        <Menu { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {
        role: state.auth.role
    };
}




export default connect(mapStateToProps, { })(MenuContainer);
